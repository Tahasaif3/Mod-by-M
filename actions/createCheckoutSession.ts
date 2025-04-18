"use server"

import type { CartItem } from "../store"
import Stripe from "stripe"
import { urlFor } from "@/sanity/lib/image"

// Define the metadata type
export type Metadata = {
  orderNumber: string
  customerName: string
  customerEmail: string
  clerkUserId: string
  shippingAddress?: string
  [key: string]: string | undefined
}

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  // @ts-ignore
  apiVersion: "2023-10-16", // Use the latest API version
})

export async function createCheckoutSession(cartItems: CartItem[], metadata: Metadata) {
  try {
    if (!cartItems || cartItems.length === 0) {
      throw new Error("Cart is empty")
    }

    // Format line items for Stripe
    const lineItems = cartItems.map((item) => {
      const product = item.product
      if (!product) {
        throw new Error("Product information is missing")
      }

      // Calculate unit amount (Stripe requires amount in cents)
      // @ts-ignore
      const unitAmount = Math.round(product.price * 100)

      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name || "Unknown Product",
            description: product.description || "",
            images: product.image ? [urlFor(product.image).url()] : [],
          },
          unit_amount: unitAmount,
        },
        quantity: item.quantity,
      }
    })

    // Create a checkout session with Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL?.split("/api/product")[0] || "http://localhost:3000"}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL?.split("/api/product")[0] || "http://localhost:3000"}/cart`,
      metadata: {
        ...metadata,
        // Ensure all metadata values are strings
        orderNumber: metadata.orderNumber || "",
        customerName: metadata.customerName || "",
        customerEmail: metadata.customerEmail || "",
        clerkUserId: metadata.clerkUserId || "",
        shippingAddress: metadata.shippingAddress || "",
      },
    })

    // Return the session URL
    return { url: session.url }
  } catch (error) {
    console.error("Error creating checkout session:", error)
    throw new Error(`Failed to create checkout session: ${error instanceof Error ? error.message : "Unknown error"}`)
  }
}



// "use server";

// import stripe from "@/lib/stripe";
// import { CartItem } from "../store";
// import Stripe from "stripe";
// import { urlFor } from "@/sanity/lib/image";

// // Define Metadata Interface
// export interface Metadata {
//   orderNumber: string;
//   customerName: string;
//   customerEmail: string;
//   clerkUserId: string;
//   shipmentId?: string;
// }

// // Define ShippingDetails Interface
// export interface ShippingDetails {
//   firstName: string;
//   lastName: string;
//   address: string;
//   apartment: string;
//   city: string;
//   country: string;
//   postalCode: string;
// }

// // Define GroupedCartItems Interface
// export interface GroupedCartItems {
//   product: CartItem["product"];
//   quantity: number;
// }

// // Utility function to validate metadata
// function validateMetadata(metadata: any): metadata is Metadata {
//   return (
//     metadata &&
//     typeof metadata.orderNumber === "string" &&
//     typeof metadata.customerName === "string" &&
//     typeof metadata.customerEmail === "string" &&
//     typeof metadata.clerkUserId === "string" &&
//     (typeof metadata.shipmentId === "string" || metadata.shipmentId === undefined)
//   );
// }

// // Main function to create a checkout session
// export async function createCheckoutSession(
//   items: GroupedCartItems[],
//   metadata: Metadata
// ) {
//   // Step 1: Validate Metadata
//   if (!validateMetadata(metadata)) {
//     throw new Error("Invalid metadata format.");
//   }

//   try {
//     // Step 2: Call ShipEngine API to create a shipment
//     const shipmentResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/shipengine`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         shipToAddress: {
//           firstName: metadata.customerName.split(" ")[0] || "FirstName",
//           lastName: metadata.customerName.split(" ")[1] || "LastName",
//           address: "123 Main Street",
//           apartment: "Apt 1",
//           city: "City Name",
//           country: "Country Name",
//           postalCode: "12345",
//         },
//         packages: items.map((item) => ({
//           weight: { value: 1, unit: "pound" }, // Example weight
//           dimensions: { length: 10, width: 5, height: 5, unit: "inch" }, // Example dimensions
//         })),
//       }),
//     });

  

//     const { shipmentId } = await shipmentResponse.json();

//     // Step 3: Check if all items have a price
//     const itemsWithoutPrice = items.filter((item) => !item.product.price);
//     if (itemsWithoutPrice.length > 0) {
//       throw new Error("Some items do not have a price");
//     }

//     // Step 4: Check if a customer exists in Stripe
//     const customers = await stripe.customers.list({
//       email: metadata.customerEmail,
//       limit: 1,
//     });

//     const customerId = customers.data.length > 0 ? customers.data[0].id : "";

//     // Step 5: Create Stripe Checkout Session with Shipment ID in metadata
//     const sessionPayload: Stripe.Checkout.SessionCreateParams = {
//       metadata: {
//         orderNumber: metadata.orderNumber,
//         customerName: metadata.customerName,
//         customerEmail: metadata.customerEmail,
//         clerkUserId: metadata.clerkUserId,
//         shipmentId, // Include the shipment ID here
//       },
//       mode: "payment",
//       allow_promotion_codes: true,
//       payment_method_types: ["card"],
//       success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}&orderNumber=${metadata.orderNumber}`,
//       cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
//       line_items: items.map((item) => ({
//         price_data: {
//           currency: "USD",
//           unit_amount: Math.round(item.product.price! * 100),
//           product_data: {
//             name: item.product.name || "Unnamed product",
//             description: item.product.description,
//             metadata: { id: item.product._id },
//             images: item.product.image ? [urlFor(item.product.image).url()] : undefined,
//           },
//         },
//         quantity: item.quantity,
//       })),
//     };

//     if (customerId) {
//       sessionPayload.customer = customerId;
//     } else {
//       sessionPayload.customer_email = metadata.customerEmail;
//     }

//     // Step 6: Create the Stripe session
//     const session = await stripe.checkout.sessions.create(sessionPayload);

//     return session.url;
//   } catch (error) {
//     console.error("Error creating checkout session:", error);
//     throw error;
//   }
// }




