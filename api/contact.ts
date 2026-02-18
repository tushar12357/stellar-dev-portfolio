// api/contact.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { name, email, subject,company_name, message } = req.body;

  if (!name || !email || !subject || !message || !company_name) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Official free sender
      to: 'tusharcdry@gmail.com',
      replyTo: email,
      subject: `${subject} — Portfolio Message`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company_name}

Message:
${message}
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #6366f1;">New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Company:</strong> ${company_name}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 1px dashed #ddd; margin: 20px 0;">
          <p><strong>Message:</strong></p>
          <p style="background:#f9f9f9; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
          <br>
          <small style="color: #888;">Sent via your portfolio • tusharcdry.vercel.app</small>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent! I'll reply soon",
    });
  } catch (error: any) {
    console.error('Resend error:', error);
    return res.status(500).json({
      error: 'Failed to send. Email me directly: tusharcdry@gmail.com',
    });
  }
}