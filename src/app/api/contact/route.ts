import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormData = await req.json();
    const { name, email, message } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: 'New Contact Form Submission',
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { success: false, error: error },
      { status: 500 }
    );
  }
}
