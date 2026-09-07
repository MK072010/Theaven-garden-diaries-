(() => {
  "use strict";

  /* =========================================================
     OWNER'S WHATSAPP NUMBER
     Replace with the real number in full international format,
     digits only, no "+", no spaces (e.g. India number 98765 43210
     becomes "919876543210"). Used by both the floating WhatsApp
     button and the "Book a Table" form below.
     ========================================================= */
  const OWNER_WHATSAPP_NUMBER = "911234567890"; // TODO: replace with the real number

  /* ---------- floating WhatsApp button ---------- */
  const waFloat = document.getElementById("whatsappFloat");
  if (waFloat) {
    const defaultMsg = encodeURIComponent(
      "Hi! I'm reaching out from the Thevan Garden Diaries website."
    );
    waFloat.href = `https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${defaultMsg}`;
  }

  /* ---------- book a table -> WhatsApp ---------- */
  const bookForm = document.getElementById("bookForm");
  if (bookForm) {
    bookForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = bookForm.name.value.trim();
      const phone = bookForm.phone.value.trim();
      const date = bookForm.date.value;
      const time = bookForm.time.value;
      const guests = bookForm.guests.value;
      const note = bookForm.note.value.trim();

      const lines = [
        "Hi, I'd like to book a table at Thevan Garden Diaries.",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Date: ${date}`,
        `Time: ${time}`,
        `Guests: ${guests}`,
      ];
      if (note) lines.push(`Note: ${note}`);

      const message = encodeURIComponent(lines.join("\n"));
      window.open(`https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener");
    });
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ---------- year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- load curtain ---------- */
  /* Reveal the page as soon as the hero image is ready, instead of
     waiting for every resource on the page (fonts, all images, etc.)
     to finish — this makes the site feel much faster to open. */
  const curtain = document.querySelector(".curtain");
  let curtainHidden = false;
  const hideCurtain = () => {
    if (curtainHidden || !curtain) return;
    curtainHidden = true;
    curtain.classList.add("is-hidden");
  };
  const heroImg = document.querySelector(".hero-media img, .menu-hero img");
  if (heroImg && heroImg.complete && heroImg.naturalWidth > 0) {
    hideCurtain();
  } else if (heroImg) {
    heroImg.addEventListener("load", hideCurtain, { once: true });
    heroImg.addEventListener("error", hideCurtain, { once: true });
  } else {
    window.addEventListener("load", hideCurtain, { once: true });
  }
  /* Safety net: never let the curtain hang around more than 2s,
     even on a very slow connection. */
  setTimeout(hideCurtain, 2000);

  /* ---------- nav scroll state ---------- */
  const nav = document.getElementById("siteNav");
  const onScroll = () => {
    if (!nav) return;
    if (window.scrollY > 40) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- mobile menu ---------- */
  const navToggle = document.getElementById("navToggle");
  const mobilePanel = document.getElementById("mobilePanel");
  if (navToggle && mobilePanel) {
    navToggle.addEventListener("click", () => {
      const isOpen = mobilePanel.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });
    mobilePanel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobilePanel.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------- scroll reveal for sections ---------- */
  if (!reduceMotion && "IntersectionObserver" in window) {
    const revealTargets = document.querySelectorAll(
      ".story-copy, .story-visual, .exp-panel, .menu-head, .menu-col, .book-form, .gallery-heading, .g-item, .location-copy, .location-map, .pause-copy, .final-cta-content"
    );
    revealTargets.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = "opacity .8s cubic-bezier(.22,.61,.22,1), transform .8s cubic-bezier(.22,.61,.22,1)";
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    revealTargets.forEach((el) => io.observe(el));

    /* gold accent underline draw, independent of the fade/translate above */
    const accents = document.querySelectorAll(".heading-accent");
    const accentIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            accentIo.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    accents.forEach((el) => accentIo.observe(el));
  }

  /* ---------- parallax on data-parallax elements ---------- */
  const parallaxEls = Array.from(document.querySelectorAll("[data-parallax]"));
  if (!reduceMotion && parallaxEls.length) {
    let ticking = false;
    const updateParallax = () => {
      const viewportH = window.innerHeight;
      parallaxEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > viewportH) return;
        const speed = parseFloat(el.dataset.parallax) || 0.15;
        const offset = (rect.top - viewportH / 2) * speed;
        const media = el.tagName === "IMG" ? el : el.querySelector("img") || el;
        const isPhoto = media.tagName === "IMG";
        media.style.transform = isPhoto
          ? `translateY(${offset * -0.15}px) scale(1.08)`
          : `translateY(${offset * -0.4}px)`;
      });
      ticking = false;
    };
    document.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          requestAnimationFrame(updateParallax);
          ticking = true;
        }
      },
      { passive: true }
    );
    updateParallax();
  }

  /* ---------- magnetic buttons (desktop only) ---------- */
  if (!reduceMotion && isFinePointer) {
    document.querySelectorAll(".magnetic").forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.18}px, ${y * 0.32}px)`;
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translate(0,0)";
      });
    });
  }

  /* ---------- gallery lightbox ---------- */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");
  const galleryItems = document.querySelectorAll("#galleryGrid .g-item");

  const openLightbox = (img) => {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = img.dataset.full || img.src;
    lightboxImg.alt = img.alt || "";
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  galleryItems.forEach((item) => {
    const img = item.querySelector("img");
    if (!img) return;
    item.addEventListener("click", () => openLightbox(img));
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(img);
      }
    });
  });
  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  /* ---------- custom cursor dot (desktop only) ---------- */
  const cursorDot = document.querySelector(".cursor-dot");
  if (cursorDot && isFinePointer && !reduceMotion) {
    window.addEventListener("mousemove", (e) => {
      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;
    });
    document.querySelectorAll("a, button, [role='button']").forEach((el) => {
      el.addEventListener("mouseenter", () => cursorDot.classList.add("is-active"));
      el.addEventListener("mouseleave", () => cursorDot.classList.remove("is-active"));
    });
  }
})();
