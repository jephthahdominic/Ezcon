import nodemailer from "nodemailer";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { fullName, email, message } = await req.json();

    await resend.emails.send({
      from: `${email}`,
      to: "obidike0953@gmail.com",
      subject: `New message from ${fullName}`,
      html: `
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `
    })
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Message sent successfully!"
      }),
      { status: 200 }
    );

  }catch (error) {
    console.error("Email send error:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: `Failed to send message: ${error.message}`,
        error: process.env.NODE_ENV === 'development' ? error.stack : undefined
      }),
      { status: 500 }
    );
  }
    

 
}
