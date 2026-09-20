import nodemailer from "nodemailer";

export default async function handler(
  req,
  res,
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  }

  try {
    const {
      name,
      email,
      subject,
      phone,
      message,
    } = req.body ?? {};

    if (
      !name ||
      !email ||
      !subject ||
      !message
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Please complete all required fields.",
      });
    }

    if (
      !process.env.GMAIL_USER ||
      !process.env.GMAIL_APP_PASSWORD
    ) {
      console.error(
        "Gmail environment variables are missing.",
      );

      return res.status(500).json({
        success: false,
        message:
          "Email service is not configured.",
      });
    }

    const transporter =
      nodemailer.createTransport({
        service: "gmail",

        auth: {
          user: process.env.GMAIL_USER,
          pass:
            process.env
              .GMAIL_APP_PASSWORD,
        },
      });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,

      to: process.env.GMAIL_USER,

      replyTo: email,

      subject:
        `Portfolio Contact: ${subject}`,

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
      `.trim(),
    });

    return res.status(200).json({
      success: true,
      message:
        "Message sent successfully.",
    });
  } catch (error) {
    console.error(
      "Contact email error:",
      error,
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to send your message. Please try again later.",
    });
  }
}