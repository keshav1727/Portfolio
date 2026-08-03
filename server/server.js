/**
 * KESHAV BAJAJ - PORTFOLIO BACKEND
 * Express server for contact form & static file serving
 *
 * Setup:
 *  1. cd server && npm install
 *  2. cp .env.example .env  ->  fill in your credentials
 *  3. node server.js
 */

require("dotenv").config();
const express = require("express");
const cors    = require("cors");
const path    = require("path");

const app  = express();
const PORT = process.env.PORT || 3000;

/* -- MIDDLEWARE ----------------------------------------------- */
app.use(cors({ origin: process.env.ALLOWED_ORIGIN || "*" }));
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

// Serve portfolio static files from parent directory
app.use(express.static(path.join(__dirname, "..")));

/* -- HEALTH CHECK --------------------------------------------- */
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Keshav Portfolio API is running" });
});

/* -- CONTACT FORM ENDPOINT (sends to Telegram) ----------------- */
app.post("/api/contact", async (req, res) => {
  try {
    const { user_name, user_email, subject, message } = req.body;

    // Basic validation
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

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: process.env.TELEGRAM_CHAT_ID, text }),
      }
    );

    if (!telegramRes.ok) throw new Error(`Telegram API responded ${telegramRes.status}`);

    res.json({ success: true, message: "Message sent successfully!" });

  } catch (error) {
    console.error("Contact form error:", error.message);
    res.status(500).json({ success: false, message: "Failed to send message. Please try again later." });
  }
});

/* -- FALLBACK - serve index.html for SPA ---------------------- */
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

/* -- START SERVER --------------------------------------------- */
app.listen(PORT, () => {
  console.log(`\nKeshav Portfolio server running on http://localhost:${PORT}`);
  console.log(`Contact API: http://localhost:${PORT}/api/contact`);
  console.log(`Health:      http://localhost:${PORT}/api/health\n`);
});
