"use server";

import nodemailer from "nodemailer";

export const sendMessage = async (formData) => {
   const name = formData.get("name");
   const email = formData.get("email");
   const subject = formData.get("subject");
   const message = formData.get("message");
   const captchaToken = formData.get("captchaToken");

   // 1. Verify reCAPTCHA with Google
   const res = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`
   });

   const data = await res.json();

   if (!data.success) {
      console.error("Captcha failed:", data);
      return { success: false, error: "Captcha verification failed" };
   }

   // 2. Proceed with sending email

   try {
      const transporter = nodemailer.createTransport({
         service: "Gmail",
         auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
         }
      });

      // Send email to yourself
      await transporter.sendMail({
         from: process.env.EMAIL_USER,
         to: process.env.EMAIL_USER,
         subject: `New contact request: ${subject}`,
         html: `
        <h2>Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
      });

      await transporter.sendMail({
         from: process.env.EMAIL_USER,
         to: email, // reply to user
         subject: `Thank you for contacting Minhaz E Siraz`,
         html: `
    <p>Hi ${name},</p>
    <p>Thanks for reaching out! I’ll get back to you soon.</p>
    <p>– Minhaz</p>
  `
      });

      return { success: true };
   } catch (error) {
      console.error("Mail send error:", error);
      return { success: false, error: error.message };
   }
};
