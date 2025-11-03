import { EmailTemplate } from '../../components/EmailTemplate'; 
import { Resend } from 'resend';
import { render } from '@react-email/render';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) { 
  try {
    // Parse the form data from the request
    const body = await request.json();
    console.log(body);
    const { fullName, email, message } = body;

    // Validate required fields
    if (!fullName || !email || !message) {
      return Response.json(
        { error: 'Full name, email and message are required' }, 
        { status: 400 }
      );
    }

    // Generate HTML from React component
    const emailHtml = render(EmailTemplate({ fullName, email, message }));

    const { data, error } = await resend.emails.send({ 
      from: `${email}`, 
      to: "stdominicjephthah63@gmail.com", // Fixed: should be array, not object
      subject: `New message from ${fullName}`, 
      html: `${emailHtml}`,
    });

    if (error) { 
      console.error('Resend API error:', error);
      return Response.json({ error }, { status: 500 }); 
    }

    return Response.json({ success: true, data }); 
  } catch (error) { 
    console.error('Email sending error:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 }); 
  } 
}