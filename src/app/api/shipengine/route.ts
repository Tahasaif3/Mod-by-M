// import shipengine from "@/lib/shipEngine";
import { backendClient } from "@/sanity/lib/backendClient";
import { NextRequest } from "next/server";

export async function GET() {
  return new Response(JSON.stringify({ message: "Shipengine Testing" }));
}

export async function POST(req: NextRequest) {
  const { shipToAddress } = await req.json();

  try {
    const sanityResponse = await backendClient.create({
      _type: "shipment",
      shipToAddress,
      shipFromAddress: {
        name: "CUstomer",
        phone: "92******",
        addressLine1: "Address 1",
        addressLine2: "Address 2",
        cityLocality: "Karachi",
        stateProvince: "IL",
        postalCode: "12345",
        countryCode: "PK",
        addressResidentialIndicator: "no",
      },
      createdAt: new Date().toISOString(),
    });

    return new Response(
      JSON.stringify({
        message: "Shipment created successfully",
        shipmentId: sanityResponse._id,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error occurred:", error);
    return new Response(
      JSON.stringify({ error: "Failed to create shipment" }),
      { status: 500 }
    );
  }
}
