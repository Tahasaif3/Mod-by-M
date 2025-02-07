import { NextResponse } from "next/server";

import { backendClient } from "@/sanity/lib/backendClient";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, rating, comment, productId } = body;

    if (!name || !rating || !comment || !productId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Correct reference field name
    await backendClient.create({
      _type: "review",
      name,
      rating,
      comment,
      productId: { _type: "reference", _ref: productId }, // Correctly set the product reference
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ message: "Review added successfully!" });
  } catch (error) {
    console.error("Error creating review:", error);
    return NextResponse.json({ error: "Failed to add review" }, { status: 500 });
  }
}
