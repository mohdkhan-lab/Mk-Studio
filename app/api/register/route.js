import { NextResponse } from "next/server";

// In-memory / persistent server-side store for registrations
// In a cloud environment, this can connect to Supabase, Firebase, or MongoDB
let registeredUsers = [
  {
    id: "usr-101",
    name: "Aman Verma",
    phone: "+91 8899001122",
    email: "aman.creator@gmail.com",
    niche: "YouTube Shorts & Reels",
    registeredAt: "2026-11-02 19:40",
    source: "MK AutoEditor V2",
  },
  {
    id: "usr-102",
    name: "Rohan Gupta",
    phone: "+91 9876501234",
    email: "rohan.edits@gmail.com",
    niche: "Faceless Story Channels",
    registeredAt: "2026-11-02 18:15",
    source: "OmniGrab Pro",
  },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    count: registeredUsers.length,
    users: registeredUsers,
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, niche, source } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: "Name and WhatsApp number are required" },
        { status: 400 }
      );
    }

    const newUser = {
      id: `usr-${Date.now()}`,
      name: name.trim(),
      phone: phone.trim(),
      email: (email || "").trim() || "N/A",
      niche: niche || "YouTube Creator",
      registeredAt: new Date().toISOString().replace("T", " ").slice(0, 16),
      source: source || "Creator Hub",
    };

    registeredUsers = [newUser, ...registeredUsers];

    return NextResponse.json({
      success: true,
      message: "Creator registered successfully!",
      user: newUser,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Failed to process registration" },
      { status: 500 }
    );
  }
}
