/**
 * KESHAV BAJAJ - PORTFOLIO MAIN JS
 *
 * Sections handled:
 *  - Loader removal
 *  - Scroll progress bar
 *  - Navbar scroll effect + active link highlighting
 *  - Mobile nav toggle
 *  - Particles.js hero background
 *  - Typewriter effect
 *  - GSAP hero entrance animations
 *  - Scroll-based reveal animations (IntersectionObserver)
 *  - Animated counters (About stats)
 *  - 3D tilt on project cards
 *  - Back-to-top button
 *  - Contact form (sends to backend -> Telegram)
 */

"use strict";

/* --- LOADER ------------------------------------------------ */
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.classList.add("fade-out");
      setTimeout(() => loader.remove(), 500);
    }
    initHeroAnimations();
  }, 2600);
});

/* --- SCROLL PROGRESS --------------------------------------- */
const progressBar = document.getElementById("scrollProgress");
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if (progressBar) progressBar.style.width = pct + "%";
}, { passive: true });

/* --- NAVBAR ------------------------------------------------ */
const navbar  = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  if (!navbar) return;
  navbar.classList.toggle("scrolled", window.scrollY > 40);

  // Active link
  let current = "";
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) current = sec.getAttribute("id");
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) link.classList.add("active");
  });

  // Back-to-top
  const btn = document.getElementById("backToTop");
  if (btn) btn.classList.toggle("visible", window.scrollY > 400);
}, { passive: true });

/* --- MOBILE NAV -------------------------------------------- */
const hamburger = document.getElementById("hamburger");
const navLinksEl = document.getElementById("navLinks");

if (hamburger && navLinksEl) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinksEl.classList.toggle("open");
  });

  navLinksEl.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navLinksEl.classList.remove("open");
    });
  });
}

/* --- BACK TO TOP ------------------------------------------- */
const bttBtn = document.getElementById("backToTop");
if (bttBtn) {
  bttBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* --- SMOOTH SCROLL ----------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    const href = anchor.getAttribute("href");
    if (href === "#") return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

/* --- PARTICLES.JS ------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  if (typeof particlesJS === "undefined") return;

  particlesJS("particles-js", {
    particles: {
      number: { value: 70, density: { enable: true, value_area: 900 } },
      color: { value: ["#8b5cf6", "#22d3ee", "#a78bfa"] },
      shape: { type: "circle" },
      opacity: {
        value: 0.45,
        random: true,
        anim: { enable: true, speed: 0.8, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false }
      },
      line_linked: {
        enable: true,
        distance: 140,
        color: "#8b5cf6",
        opacity: 0.18,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 160, line_linked: { opacity: 0.4 } },
        push: { particles_nb: 3 }
      }
    },
    retina_detect: true
  });
});

/* --- TYPEWRITER -------------------------------------------- */
const twTexts = [
  "Full-Stack Web Apps",
  "React & Next.js UIs",
  "Web3 DApps",
  "TypeScript Backends",
  "Scalable APIs",
];

let twIdx = 0, twChar = 0, twDeleting = false;
const twEl = document.getElementById("typewriter");

function typewrite() {
  if (!twEl) return;
  const current = twTexts[twIdx];
  if (!twDeleting) {
    twEl.textContent = current.slice(0, ++twChar);
    if (twChar === current.length) { twDeleting = true; setTimeout(typewrite, 1800); return; }
    setTimeout(typewrite, 80);
  } else {
    twEl.textContent = current.slice(0, --twChar);
    if (twChar === 0) {
      twDeleting = false;
      twIdx = (twIdx + 1) % twTexts.length;
      setTimeout(typewrite, 300);
      return;
    }
    setTimeout(typewrite, 40);
  }
}

document.addEventListener("DOMContentLoaded", () => setTimeout(typewrite, 3200));

/* --- GSAP HERO ANIMATIONS ---------------------------------- */
function initHeroAnimations() {
  if (typeof gsap === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.fromTo(".hero-greeting",   { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 })
    .fromTo(".hero-name",       { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.3")
    .fromTo(".hero-typewriter", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
    .fromTo(".hero-bio",        { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
    .fromTo(".hero-cta",        { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
    .fromTo(".hero-socials",    { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
    .fromTo(".hero-visual",     { opacity: 0, scale: 0.85, x: 40 }, { opacity: 1, scale: 1, x: 0, duration: 0.9 }, "-=0.8")
    .fromTo(".floating-badge",  { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.15 }, "-=0.4");
}

/* --- INTERSECTION OBSERVER REVEAL ------------------------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // stagger children of reveal targets
      const el = entry.target;
      el.classList.add("revealed");
      revealObserver.unobserve(el);

      // trigger counter if stat card
      el.querySelectorAll(".stat-number[data-target]").forEach(animateCounter);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right").forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 0.08 + "s";
    revealObserver.observe(el);
  });

  // Also observe stat cards directly for counter
  document.querySelectorAll(".stat-card").forEach(card => {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll(".stat-number[data-target]").forEach(animateCounter);
          counterObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    counterObserver.observe(card);
  });
});

/* --- LIVE EXPERIENCE DURATIONS ----------------------------- */
/* Anything dated with data-since / data-from grows on its own as
   months pass - nothing here needs to be edited by hand.        */

// "2025-07" -> whole months completed since that month started
function monthsSince(yyyyMm) {
  const [y, m] = yyyyMm.split("-").map(Number);
  if (!y || !m) return 0;
  const now = new Date();
  const months = (now.getFullYear() - y) * 12 + (now.getMonth() - (m - 1));
  return Math.max(0, months);
}

// 3 -> "3 mos", 14 -> "1 yr 2 mos"
function formatDuration(months) {
  const total = Math.max(1, months);
  const yrs = Math.floor(total / 12);
  const mos = total % 12;
  const parts = [];
  if (yrs) parts.push(yrs + (yrs === 1 ? " yr" : " yrs"));
  if (mos) parts.push(mos + (mos === 1 ? " mo" : " mos"));
  return parts.join(" ");
}

// Append a running duration to every ongoing role: "Jun 2026 - Present - 3 mos"
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".tc-date[data-from]").forEach(el => {
    const months = monthsSince(el.dataset.from);
    if (months > 0) el.insertAdjacentText("beforeend", " - " + formatDuration(months));
  });

  const yearEl = document.getElementById("footerYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/* --- ANIMATED COUNTERS ------------------------------------- */
function animateCounter(el) {
  if (el.dataset.counted) return;
  el.dataset.counted = "1";
  // data-since wins over data-target: the number is derived from today's date
  const target = el.dataset.since ? monthsSince(el.dataset.since) : parseInt(el.dataset.target, 10);
  const duration = 1600;
  const startTime = performance.now();

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  }
  requestAnimationFrame(update);
}

/* --- 3D TILT ON PROJECT CARDS ------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".tilt-card").forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * -8;
      const rotY = ((x - cx) / cx) * 8;
      card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
    });
  });
});

/* --- CONTACT FORM (sends to backend -> Telegram) ------------ */
const contactForm = document.getElementById("contactForm");
const formStatus  = document.getElementById("formStatus");
const submitBtn   = document.getElementById("submitBtn");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const btnText    = submitBtn.querySelector(".btn-text");
    const btnLoading = submitBtn.querySelector(".btn-loading");

    // Show loading
    btnText.classList.add("hidden");
    btnLoading.classList.remove("hidden");
    submitBtn.disabled = true;
    if (formStatus) { formStatus.textContent = ""; formStatus.className = "form-status"; }

    // Collect data
    const payload = {
      user_name:  contactForm.user_name.value.trim(),
      user_email: contactForm.user_email.value.trim(),
      subject:    contactForm.subject.value.trim(),
      message:    contactForm.message.value.trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Failed to send message.");

      showFormStatus("success", "Message sent successfully! I'll get back to you soon.");
      contactForm.reset();
    } catch (err) {
      console.error("Contact form error:", err);
      showFormStatus("error", "Oops! Something went wrong. Please email me directly at keshavbajaj1708@gmail.com");
    } finally {
      btnText.classList.remove("hidden");
      btnLoading.classList.add("hidden");
      submitBtn.disabled = false;
    }
  });
}

function showFormStatus(type, msg) {
  if (!formStatus) return;
  formStatus.textContent = msg;
  formStatus.className = "form-status " + type;
  setTimeout(() => { formStatus.textContent = ""; formStatus.className = "form-status"; }, 6000);
}

/* --- GSAP SCROLL ANIMATIONS (supplemental) ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);

  // Skill category stagger
  gsap.from(".skill-category", {
    scrollTrigger: { trigger: ".skills-section", start: "top 75%" },
    opacity: 0, y: 40, stagger: 0.12, duration: 0.7, ease: "power3.out"
  });

  // Achievement cards stagger
  gsap.from(".ach-card", {
    scrollTrigger: { trigger: ".achievements-section", start: "top 75%" },
    opacity: 0, y: 50, stagger: 0.1, duration: 0.6, ease: "back.out(1.4)"
  });

  // Education items
  gsap.from(".edu-item", {
    scrollTrigger: { trigger: ".education-section", start: "top 75%" },
    opacity: 0, x: -40, stagger: 0.15, duration: 0.6, ease: "power3.out"
  });

  // Coding cards
  gsap.from(".coding-card", {
    scrollTrigger: { trigger: ".coding-section", start: "top 75%" },
    opacity: 0, y: 30, stagger: 0.12, duration: 0.5, ease: "power3.out"
  });
});
