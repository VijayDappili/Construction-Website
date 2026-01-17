 

export const runtime = "nodejs";

import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    console.log("📩 Contact API called");

    const body = await req.json();
    console.log("📦 Received data:", body);

    const { name, email, phone, message } = body;

    const client = await clientPromise;
    const db = client.db("hari");

    const result = await db.collection("contacts").insertOne({
      name,
      email,
      phone,
      message,
      createdAt: new Date(),
    });

    console.log("✅ Inserted ID:", result.insertedId);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ API ERROR:", error);

    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}
