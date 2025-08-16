import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Configure mail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // you can also use "hotmail", "yahoo", or custom SMTP
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // app password, not real password
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // send to yourself
      subject: `📩 New message from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ success: false, message: "Error sending message." }, { status: 500 });
  }
}
