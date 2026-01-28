import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwKOQovrh0BY91jM_4-DGMk11DSComHwy8Sb5h9b055g3nhCtrGidlXHJYQFarWKTs/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send data to Google Sheets");
    }

    return NextResponse.json(
      { message: "Data saved to Google Sheets" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
