# Keshav Bajaj - Portfolio

> **Full-Stack Developer | React | TypeScript | Next.js | Solidity**

### Live: [https://keshav1727.github.io/portfolio/](https://keshav1727.github.io/portfolio/)

Live portfolio for Keshav Bajaj - Full-Stack Developer building responsive, production-grade web apps with React, Next.js, and TypeScript, with hands-on Web3 and blockchain project work.

---

## Features

- **Stunning dark UI** with purple/cyan glassmorphism design
- **Particle.js** hero background with interactive particles
- **Typewriter effect** cycling through roles
- **GSAP animations** - smooth entrance & scroll-triggered effects
- **Animated counters** for stats (experience, internships, projects)
- **3D tilt** on project cards (mouse-driven perspective)
- **Fully responsive** - mobile, tablet, desktop
- **Contact form** that delivers straight to Telegram

---

## Project Structure

```
portfolio/
|-- index.html              # Main frontend - all sections
|-- assets/
|   |-- css/style.css       # Complete styles (glassmorphism, animations)
|   |-- js/main.js          # All JS (GSAP, particles, typewriter, contact form)
|   |-- img/                # Profile photo
|   `-- resume/             # Resume PDF
|-- api/
|   `-- contact.js          # Vercel serverless function - contact form -> Telegram
|-- server/
|   |-- server.js           # Express backend (for local dev / self-hosting)
|   |-- package.json
|   `-- .env.example        # Environment variables template
`-- README.md
```

---

## Quick Start

### Frontend Only (just open in browser)
```bash
# Simply open index.html in your browser
# OR use Live Server in VS Code
# Note: the contact form needs a backend (see below) to actually send anywhere.
```

### Full Stack, local (Express backend)
```bash
cd server
npm install
cp .env.example .env    # Fill in your Telegram bot token + chat id
node server.js
# -> http://localhost:3000
```

### Deploy to Vercel
The `api/contact.js` file is a Vercel serverless function, so the whole
project (static site + working contact form) deploys as a single Vercel
project - no separate backend hosting needed.

1. Push this repo to GitHub and import it in Vercel, or run `vercel` from
   the project root.
2. In the Vercel project's Settings -> Environment Variables, add:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
3. Deploy. `/api/contact` is served automatically alongside the static site.

---

## Telegram Contact Form Setup

1. Message [@BotFather](https://t.me/BotFather) on Telegram, send `/newbot`,
   and copy the bot token it gives you.
2. Send your new bot any message (e.g. "hi").
3. Visit `https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates` to find your
   chat id in the response.
4. Put both values in `server/.env` (local) or the Vercel project's
   environment variables (production).

---

## Tech Stack

| Layer     | Technology |
|-----------|-----------|
| Frontend  | HTML5, CSS3, Vanilla JS |
| Animations| GSAP 3, Particles.js |
| Contact   | Telegram Bot API |
| Backend   | Node.js, Express.js (local) / Vercel serverless functions (prod) |
| Icons     | Font Awesome 6 |
| Fonts     | Google Fonts (Inter, Space Grotesk, Fira Code) |

---

## Links

- **GitHub:** [github.com/keshav1727](https://github.com/keshav1727)
- **LinkedIn:** [linkedin.com/in/keshav-bajaj-15b4181a8](https://linkedin.com/in/keshav-bajaj-15b4181a8)

---

(c) 2026 Keshav Bajaj - Built with care.
