import * as React from 'react';

interface EmailTemplateProps {
  fullName: string;
  email:string;
  message: string;
}

export const EmailTemplate = ({ fullName, email, message }: EmailTemplateProps) => (
    <div>
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> {fullName}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong> {message}</p>
    </div>
);
