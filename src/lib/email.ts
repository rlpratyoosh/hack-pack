import nodemailer from 'nodemailer';

export const sendEmail = async (to: string, subject: string, html: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  }
  });

  await transporter.sendMail({
    from: `"Hack Pack" <noreply@hackpack.com>`,
    to,
    subject,
    html,
  });
};
