import stripe from "@/lib/stripe";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Metadata } from "../../../../actions/createCheckoutSession";
import { backendClient } from "@/sanity/lib/backendClient";
import crypto from "crypto"; 

export async function POST(req: NextRequest) {
    const body = await req.text();
    const headersList = await headers();
    const sig = headersList.get("stripe-signature");

    if (!sig) {
        return NextResponse.json({ error: 'No Stripe signature' }, { status: 400 });
    }
    const weebhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!weebhookSecret) {
        console.error('Stripe webhook secret is not set');
        return NextResponse.json({ error: 'Stripe webhook secret is not set' }, { status: 400 });
    }

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(body, sig, weebhookSecret);
    } catch (error) {
        console.error('Webhook event error', error);
        return NextResponse.json({ error: `Webhook Error ${error}` }, { status: 400 });
    }

    // Handle the 'checkout.session.completed' event
    if (event.type === 'checkout.session.completed') {
        const session = event.data.object as Stripe.Checkout.Session;
        try {
            // Call the createOrderInSanity function to create the order in Sanity
            await createOrderInSanity(session);
        } catch (error) {
            console.error('Error creating order in Sanity', error);
            return NextResponse.json({ error: `Order creation failed in Sanity: ${error}` }, { status: 500 });
        }
    }
    return NextResponse.json({ received: true });
}

async function createOrderInSanity(session: Stripe.Checkout.Session) {
    console.log("Creating order for session:", session);

    const { id, amount_total, currency, metadata, payment_intent, total_details } = session;

    if (!metadata) throw new Error("Session metadata is missing.");

    const {
        orderNumber,
        customerName,
        customerEmail,
        clerkUserId,
        shipmentId,
    } = metadata as unknown as Metadata;

    const lineItemsWithProduct = await stripe.checkout.sessions
        .listLineItems(id, { expand: ["data.price.product"] })
        .catch((err) => {
            console.error("Error fetching line items:", err);
            throw new Error("Failed to fetch line items.");
        });

    const sanityProducts = lineItemsWithProduct.data.map((item) => {
        const productId = (item.price?.product as Stripe.Product)?.metadata?.id;
        if (!productId) {
            console.error("Product metadata ID is missing for item:", item);
            throw new Error("Product metadata ID is missing.");
        }
        return {
            _key: crypto.randomUUID(),
            product: {
                _type: "reference",
                _ref: productId,
            },
            quantity: item?.quantity || 0,
        };
    });

    console.log("Sanity Products:", sanityProducts);

    const order = await backendClient.create({
        _type: "order", 
        orderNumber,
        stripeCheckoutSessionId: id,
        stripePaymentIntentId: payment_intent,
        customerName,
        stripeCustomerId: customerEmail,
        clerkUserId,
        email: customerEmail,
        shipment: {
            _type: "reference", 
            _ref: shipmentId,
        },
        currency,
        amountDiscount: total_details?.amount_discount
            ? total_details.amount_discount / 100
            : 0,
        products: sanityProducts,
        totalPrice: amount_total ? amount_total / 100 : 0,
        status: "paid",
        orderDate: new Date().toISOString(),
    });

    console.log("Order created in Sanity:", order);
    return order;
}
