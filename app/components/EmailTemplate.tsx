import * as React from 'react';

interface EmailTemplateProps {
  fullName: string;
  message: string;
}

export const EmailTemplate = ({ fullName, message }: EmailTemplateProps) => (
    <div>
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> {fullName}</p>
      <p><strong>Message:</strong> {message}</p>
    </div>
);
