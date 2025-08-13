import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { fullName, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.BUSINESS_EMAIL, // Your business email
        pass: process.env.EMAIL_PASSWORD, // App password (Gmail)
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.BUSINESS_EMAIL,
      subject: `New message from ${fullName}`,
      text: message,
      html: `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Message sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
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
