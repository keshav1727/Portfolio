/**
 * Vercel serverless function - handles POST /api/contact
 * Forwards contact form submissions to Telegram.
 *
 * Requires these env vars set in the Vercel project (Settings -> Environment Variables):
 *   TELEGRAM_BOT_TOKEN
 *   TELEGRAM_CHAT_ID
 */

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, message: "Method not allowed." });
  }

  const { user_name, user_email, subject, message } = req.body || {};

  if (!user_name || !user_email || !subject || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user_email)) {
    return res.status(400).json({ success: false, message: "Invalid email address." });
  }
  if (message.length > 2000) {
    return res.status(400).json({ success: false, message: "Message too long (max 2000 chars)." });
  }

  const text =
    `New Portfolio Contact\n\n` +
    `Name: ${user_name}\n` +
    `Email: ${user_email}\n` +
    `Subject: ${subject}\n\n` +
    `Message:\n${message}`;

  try {
    const telegramRes = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: process.env.TELEGRAM_CHAT_ID, text }),
      }
    );

    if (!telegramRes.ok) throw new Error(`Telegram API responded ${telegramRes.status}`);

    return res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Contact form error:", error.message);
    return res.status(500).json({ success: false, message: "Failed to send message. Please try again later." });
  }
};
