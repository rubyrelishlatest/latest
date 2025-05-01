// app/api/contact/route.js
import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/config/db'; // make sure you use named export OR default export correctly
import Contact from '@/lib/models/Contact';  // ✅ Import your Contact model

export async function POST(req) {
  console.log("POST /api/contact hit");

  await connectDB(); // ✅ Use the correct function name from db.js

  try {
    const body = await req.json();
    const contact = new Contact(body); // ✅ Capital 'C' from the model import
    await contact.save();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact POST error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
