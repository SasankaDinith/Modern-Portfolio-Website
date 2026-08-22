import { transporter } from "../config/mailer.js";

export async function sendContactMessage(req, res) {
  try {
    const {
      name,
      email,
      subject,
      phone,
      message,
    } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message:
          "Name, email, subject and message are required.",
      });
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return res.status(400).json({
        success: false,
        message:
          "Please enter a valid email address.",
      });
    }

    const mailOptions = {
      // Email must come FROM your authenticated Gmail account
      from: `"Portfolio Website" <${process.env.GMAIL_USER}>`,

      // Send it to yourself
      to: process.env.GMAIL_USER,

      // When you click Reply in Gmail,
      // it replies to the portfolio visitor
      replyTo: email,

      subject: `Portfolio Contact - ${subject}`,

      text: `
New Portfolio Contact Message

Name:
${name}

Email:
${email}

Phone:
${phone || "Not provided"}

Subject:
${subject}

Message:
${message}

--------------------------------
Sent from Sasanka Ranawaka's portfolio website.
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message:
        "Your message was sent successfully.",
    });
  } catch (error) {
    console.error(
      "Contact email error:",
      error,
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to send your message. Please try again.",
    });
  }
}