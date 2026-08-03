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
- **EmailJS** contact form (no backend required for email)
- **Express.js backend** with Nodemailer fallback

---

## Project Structure

```
portfolio/
|-- index.html              # Main frontend - all sections
|-- assets/
|   |-- css/style.css       # Complete styles (glassmorphism, animations)
|   |-- js/main.js          # All JS (GSAP, particles, typewriter, EmailJS)
|   `-- resume/             # Place resume PDF here
|-- server/
|   |-- server.js           # Express backend
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
```

### Full Stack (with Express backend)
```bash
cd server
npm install
cp .env.example .env    # Fill in your email credentials
node server.js
# -> http://localhost:3000
```

---

## EmailJS Setup (Frontend Email)

1. Create account at [emailjs.com](https://www.emailjs.com)
2. Add an **Email Service** (Gmail, Outlook, etc.)
3. Create an **Email Template** using these variables:
   - `{{user_name}}`, `{{user_email}}`, `{{subject}}`, `{{message}}`
4. Copy your **Public Key** from Account settings
5. In `assets/js/main.js`, replace:
   ```js
   const EMAILJS_PUBLIC_KEY  = "YOUR_EMAILJS_PUBLIC_KEY";
   const EMAILJS_SERVICE_ID  = "YOUR_EMAILJS_SERVICE_ID";
   const EMAILJS_TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID";
   ```

---

## Tech Stack

| Layer     | Technology |
|-----------|-----------|
| Frontend  | HTML5, CSS3, Vanilla JS |
| Animations| GSAP 3, Particles.js |
| Email     | EmailJS |
| Backend   | Node.js, Express.js |
| Mailer    | Nodemailer (Gmail) |
| Icons     | Font Awesome 6 |
| Fonts     | Google Fonts (Inter, Space Grotesk, Fira Code) |

---

## Links

- **GitHub:** [github.com/keshav1727](https://github.com/keshav1727)
- **LinkedIn:** [linkedin.com/in/keshav-bajaj-15b4181a8](https://linkedin.com/in/keshav-bajaj-15b4181a8)

---

(c) 2026 Keshav Bajaj - Built with care.
# Portfolio
