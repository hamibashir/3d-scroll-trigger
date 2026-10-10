"use client";

import { useEffect } from "react";

// ─── Asset URLs ─────────────────────────────────────────────────────────────

const SKY_URL =
  "https://raft-blast-61784561.figma.site/_assets/v11/16b5007d9c93971e26ffe4e0e3e37946f6bd538c.png";
const BACK_FOUR_URL =
  "https://raft-blast-61784561.figma.site/_assets/v11/8a7f8af50e0ce92ec2e228e7b0b4112178c51cf1.png";
const BAZAAR_URL =
  "https://raft-blast-61784561.figma.site/_assets/v11/864afe00e41e2fa20a5aa546e15cb807e0f81384.png";
const SPLIT_LEFT_URL =
  "https://raft-blast-61784561.figma.site/_assets/v11/7536d7b60a1fce482cf6edf3f0bffd3bad5d0f8a.png";
const SPLIT_RIGHT_URL =
  "https://raft-blast-61784561.figma.site/_assets/v11/392db6a6a6b98e868bd7f8d3f55bb719d51e5028.png";
const BRIDGE_URL =
  "https://raft-blast-61784561.figma.site/_assets/v11/c6a6d8ef49bca43f708aa852692942c45ec950d4.png";
const FRAME_TWO_URL =
  "https://raft-blast-61784561.figma.site/_assets/v11/ba75252bab2b1c510987b74837770f7bc8a6b2d4.png";

const ICON1 =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260730_230438_d526b8b6-8a2e-4e3b-9993-3908acae03a7.png";
const ICON2 =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260730_230442_140bc25b-b165-4249-904a-f708bff6970e.png";
const ICON3 =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260730_230448_825949c9-ccdb-4857-b4a6-e349eccc9010.png";

// ─── Sight card data ─────────────────────────────────────────────────────────

const SIGHT_CARDS = [
  {
    ariaLabel: "Open Stari Most card",
    kicker: "Old Bridge",
    h3: "Stari Most",
    p: "The stone arch over the Neretva and Mostar's main landmark.",
    icon: ICON1,
  },
  {
    ariaLabel: "Open Kujundziluk card",
    kicker: "Bazaar Street",
    h3: "Kujundziluk",
    p: "Copper shops, souvenirs, and the old bazaar lane by the bridge.",
    icon: ICON2,
  },
  {
    ariaLabel: "Open Koski Mehmed Pasha Mosque card",
    kicker: "Viewpoint",
    h3: "Koski Mehmed Pasha Mosque",
    p: "A classic minaret view back toward Stari Most and the river.",
    icon: ICON3,
  },
  {
    ariaLabel: "Open Kajtaz House card",
    kicker: "Ottoman House",
    h3: "Kajtaz House",
    p: "A preserved residential house showing Mostar's Ottoman layers.",
    icon: ICON1,
  },
  {
    ariaLabel: "Open War Photo Exhibition card",
    kicker: "Museum",
    h3: "War Photo Exhibition",
    p: "A compact, moving stop for context on the city's recent history.",
    icon: ICON2,
  },
];

// ─── Post-cinema data ─────────────────────────────────────────────────────────

const STATS = [
  { value: "56", unit: "m", label: "Bridge arch above the Neretva" },
  { value: "1566", unit: "", label: "Year Stari Most was first built" },
  { value: "2.5", unit: "h", label: "From Sarajevo by scenic train" },
  { value: "29", unit: "km", label: "From the Adriatic coast" },
];

const SEASONS = [
  {
    id: "spring",
    months: "Mar – May",
    name: "Spring",
    desc: "Wildflowers, warm days, and the Neretva at full flow. The best season for walking and photography without peak crowds.",
    temp: "15 – 22°C",
    crowd: "Moderate",
  },
  {
    id: "summer",
    months: "Jun – Aug",
    name: "Summer",
    desc: "Long golden evenings, river swimming below the bridge, and the cliff divers at their peak. Book accommodation early.",
    temp: "28 – 38°C",
    crowd: "High",
  },
  {
    id: "autumn",
    months: "Sep – Nov",
    name: "Autumn",
    desc: "The finest light of the year. Crowds thin sharply after September; grapes ripen in the hills above the old city.",
    temp: "10 – 25°C",
    crowd: "Low",
  },
  {
    id: "winter",
    months: "Dec – Feb",
    name: "Winter",
    desc: "Quiet, mist-filled, and entirely yours. The gorge takes on a different character when cold air settles in.",
    temp: "2 – 10°C",
    crowd: "Very Low",
  },
];

const ROUTES = [
  {
    icon: "🚌",
    mode: "By Bus",
    detail: "Mostar Bus Station · Trg Ivana Krndelja",
    desc: "Daily coach services from Sarajevo (2.5 h), Dubrovnik (3 h), and Split (3.5 h). The most common approach and the easiest to book.",
  },
  {
    icon: "🚂",
    mode: "By Train",
    detail: "Daily departures · Book at the station",
    desc: "The scenic Sarajevo–Mostar railway cuts through the Neretva gorge. Allow 2.5 hours and sit on the right side heading south.",
  },
  {
    icon: "🚗",
    mode: "By Car",
    detail: "Parking available near the old town",
    desc: "M17 from Sarajevo follows the river canyon all the way south. E65 arrives from the Dalmatian coast. Both routes under 3.5 hours.",
  },
];

const TIPS = [
  {
    num: "01",
    heading: "Cross at sunrise.",
    body: "The bridge belongs to the morning. No crowds, soft light off the Neretva, and the sound of the river alone.",
  },
  {
    num: "02",
    heading: "Follow the smell of ćevapi.",
    body: "The best spots are tucked into the alleys near Kujundziluk. Order extra somun bread and sit anywhere you can.",
  },
  {
    num: "03",
    heading: "Mosques welcome visitors.",
    body: "Outside prayer times, the city's minarets are open to climb. Cover shoulders, bring patience for the narrow steps.",
  },
];

const GALLERY_IMAGES = [
  { src: SKY_URL, alt: "Mostar sky and landscape" },
  { src: BAZAAR_URL, alt: "Mostar bazaar quarter" },
  { src: FRAME_TWO_URL, alt: "Neretva river close-up" },
  { src: SPLIT_LEFT_URL, alt: "Old Bridge left frame" },
  { src: SPLIT_RIGHT_URL, alt: "Old Bridge right frame" },
];

// ─── Page component ──────────────────────────────────────────────────────────

export default function MostarPage() {
  useEffect(() => {
    // ── DOM refs ──────────────────────────────────────────────────────────
    const section = document.querySelector<HTMLElement>(".cinema-scroll")!;
    const root = document.documentElement;
    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
    const track = document.querySelector<HTMLElement>(".sights-track")!;
    const sightsControls = document.querySelector<HTMLElement>(".sights-controls")!;
    const prevBtn = document.querySelector<HTMLElement>(".sight-prev")!;
    const nextBtn = document.querySelector<HTMLElement>(".sight-next")!;
    const progressBar = document.getElementById("scroll-progress") as HTMLElement | null;
    const scrollTopBtn = document.getElementById("scroll-top-btn") as HTMLElement | null;
    const originalCards = Array.from(
      document.querySelectorAll<HTMLElement>(".sight-card")
    );

    // ── State ─────────────────────────────────────────────────────────────
    let targetMouseX = 0,
      targetMouseY = 0,
      mouseX = 0,
      mouseY = 0;
    let targetScroll = 0,
      smoothScroll = 0;
    let initialized = false;
    let rafPending = false;
    let sightCards: HTMLElement[] = [];
    const originalSightCount = originalCards.length;
    let activeSight = originalSightCount;

    // ── Math helpers ──────────────────────────────────────────────────────
    function clamp(v: number, min = 0, max = 1) {
      return Math.min(max, Math.max(min, v));
    }

    function smoothstep(e0: number, e1: number, v: number) {
      const x = clamp((v - e0) / (e1 - e0));
      return x * x * (3 - 2 * x);
    }

    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }

    function segmentInOut(s: number, a: number, b: number, c: number, d: number) {
      const enter = smoothstep(a, b, s);
      const exit = smoothstep(c, d, s);
      return { enter, exit, active: enter * (1 - exit) };
    }

    function getScrollDistance() {
      return clamp(
        -section.getBoundingClientRect().top,
        0,
        section.offsetHeight - window.innerHeight
      );
    }

    // ── Slider helpers ────────────────────────────────────────────────────
    function updateSightSlider() {
      if (!sightCards.length) return;
      const cardWidth = sightCards[0].offsetWidth;
      const gap = parseFloat(getComputedStyle(track).columnGap || "0");
      root.style.setProperty("--sights-shift", `${-(cardWidth + gap) * activeSight}px`);
      sightCards.forEach((card, i) => {
        card.classList.toggle("is-active", i === activeSight);
      });
    }

    function moveSightSlider(dir: number) {
      activeSight += dir;
      updateSightSlider();
    }

    function selectSightCard(card: HTMLElement) {
      const idx = Number(card.dataset.sightIndex);
      if (isFinite(idx)) {
        activeSight = idx;
        updateSightSlider();
      }
    }

    function jumpSightSlider(i: number) {
      track.classList.add("is-jumping");
      activeSight = i;
      updateSightSlider();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          track.classList.remove("is-jumping");
        });
      });
    }

    function normalizeSightSlider() {
      if (activeSight >= originalSightCount * 2) {
        jumpSightSlider(activeSight - originalSightCount);
      } else if (activeSight < originalSightCount) {
        jumpSightSlider(activeSight + originalSightCount);
      }
    }

    function setupSightSlider() {
      track.replaceChildren();
      for (let setIndex = 0; setIndex < 3; setIndex++) {
        originalCards.forEach((card, cardIndex) => {
          const clone = card.cloneNode(true) as HTMLElement;
          clone.dataset.sightIndex = String(setIndex * originalSightCount + cardIndex);
          clone.addEventListener("click", () => selectSightCard(clone));
          clone.addEventListener("keydown", (e: KeyboardEvent) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              selectSightCard(clone);
            }
          });
          track.appendChild(clone);
        });
      }
      sightCards = Array.from(track.querySelectorAll<HTMLElement>(".sight-card"));
      activeSight = originalSightCount;
      track.addEventListener("transitionend", normalizeSightSlider);
      updateSightSlider();
    }

    // ── RAF loop ──────────────────────────────────────────────────────────
    function update() {
      rafPending = false;

      targetScroll = getScrollDistance();
      if (!initialized || reduceMotion.matches) {
        smoothScroll = targetScroll;
        initialized = true;
      } else {
        smoothScroll = lerp(smoothScroll, targetScroll, 0.14);
      }
      if (Math.abs(smoothScroll - targetScroll) < 0.08) smoothScroll = targetScroll;

      mouseX = lerp(mouseX, targetMouseX, 0.12);
      mouseY = lerp(mouseY, targetMouseY, 0.12);

      const frame2 = segmentInOut(smoothScroll, 560, 900, 1300, 1620);
      const frame3 = segmentInOut(smoothScroll, 1760, 2140, 2540, 2700);
      const progress = clamp(smoothScroll / 2700);
      const introExit = smoothstep(90, 650, smoothScroll);
      const sightsEnterRaw = smoothstep(2760, 3560, smoothScroll);
      const sightsEnter = Math.pow(sightsEnterRaw, 1.55);
      const sightsControlsEnter = smoothstep(3360, 3660, smoothScroll);
      const blurActive = clamp(frame2.active + frame3.active);
      const frame2Opacity = frame2.active * (1 - frame3.enter);
      const splitDrift = Math.pow(frame2.enter, 1.5);
      const panel2Opacity = frame2.active * (1 - frame2.exit);
      const panel3Opacity = frame3.active * (1 - frame3.exit);
      const backScale = 0.76 + progress * 0.2 + frame2.enter * 0.18 + frame3.enter * 0.16;
      const sharedHeroY = progress * -74;
      const sharedHeroScale = progress * 0.23;
      const sightsScreenTop = Math.min(220, Math.max(112, window.innerHeight * 0.19)) - 50;
      const sightsParentTop =
        window.innerHeight - (window.innerHeight - sightsScreenTop) / backScale;

      // ── Write cinema custom properties ──────────────────────────────────
      const s = root.style;

      s.setProperty("--mx", reduceMotion.matches ? "0" : mouseX.toFixed(4));
      s.setProperty("--my", reduceMotion.matches ? "0" : mouseY.toFixed(4));

      s.setProperty("--back-opacity", String(1 - frame2.active * 0.06));
      s.setProperty("--back-x", `${mouseX * -12}px`);
      s.setProperty("--back-y", `${mouseY * -4}px`);
      s.setProperty("--back-scale", String(backScale));
      s.setProperty("--four-y", `${10 + progress * 10}vh`);
      s.setProperty("--four-scale", String(0.78 + progress * 0.16));
      s.setProperty("--bazaar-y", `${20 - progress * 8}vh`);
      s.setProperty("--blur-px", `${blurActive * 14}px`);
      s.setProperty("--back-brightness", String(1 - blurActive * 0.255));
      s.setProperty("--bazaar-blur-px", `${frame2.active * 14}px`);
      s.setProperty(
        "--bazaar-brightness",
        String(1 - frame2.active * 0.255 - frame3.active * 0.06)
      );
      s.setProperty("--bazaar-saturation", String(1 + frame3.active * 0.18));
      s.setProperty("--shade-opacity", "1");
      s.setProperty("--shade-z", frame2.active > 0.02 ? "2" : "0");
      s.setProperty("--shade-top-alpha", String(blurActive * 0.465));
      s.setProperty("--shade-mid-alpha", String(blurActive * 0.42));
      s.setProperty("--shade-bottom-alpha", String(blurActive * 0.51));

      s.setProperty("--title-y", `${introExit * -210}px`);
      s.setProperty("--title-scale", String(1 - introExit * 0.08));
      s.setProperty("--title-opacity", String(1 - introExit));

      s.setProperty("--bridge-x", `calc(-50% + ${mouseX * 18}px)`);
      s.setProperty("--bridge-y", `${mouseY * 8 + sharedHeroY - frame2.exit * 760}px`);
      s.setProperty("--bridge-bottom", `${5 - frame2.enter * 13}vh`);
      s.setProperty("--bridge-width", `${67.2 + frame2.enter * 37.8}vw`);
      s.setProperty("--bridge-scale", String(1.02 + sharedHeroScale + frame2.exit * 0.46));

      s.setProperty("--split-left-x", `calc(-50% + ${-splitDrift * 46}vw + ${mouseX * 22}px)`);
      s.setProperty("--split-left-y", `${mouseY * 10 + sharedHeroY - splitDrift * 180}px`);
      s.setProperty("--split-left-scale", String(1 + sharedHeroScale + frame2.enter * 0.74));
      s.setProperty("--split-right-x", `calc(-50% + ${splitDrift * 46}vw + ${mouseX * 22}px)`);
      s.setProperty("--split-right-y", `${mouseY * 10 + sharedHeroY - splitDrift * 180}px`);
      s.setProperty("--split-right-scale", String(1 + sharedHeroScale + frame2.enter * 0.74));

      s.setProperty("--frame2-opacity", String(frame2Opacity));
      s.setProperty("--frame2-x", `calc(-50% + ${mouseX * 10}px)`);
      s.setProperty("--frame2-y", `calc(-50% + ${mouseY * 8 - frame2.exit * 150}px)`);
      s.setProperty("--frame2-scale", String(1.06 + frame2.enter * 0.08 + frame2.exit * 0.08));

      s.setProperty("--intro-copy-y", `${introExit * 90}px`);
      s.setProperty("--intro-copy-opacity", String(1 - introExit));
      s.setProperty("--panel2-opacity", String(panel2Opacity));
      s.setProperty("--panel2-y", `calc(-50% + ${-frame2.exit * 86 + (1 - frame2.enter) * 58}px)`);
      s.setProperty("--panel3-opacity", String(panel3Opacity));
      s.setProperty("--panel3-y", `calc(-50% + ${-frame3.exit * 86 + (1 - frame3.enter) * 58}px)`);

      s.setProperty("--sights-opacity", String(sightsEnter));
      s.setProperty("--sights-controls-opacity", String(sightsControlsEnter));
      sightsControls.classList.toggle("is-ready", sightsControlsEnter > 0.98);
      s.setProperty("--sights-visibility", sightsEnter > 0.01 ? "visible" : "hidden");
      s.setProperty("--sights-y", "0px");
      s.setProperty("--sights-enter-x", `${(1 - sightsEnter) * 420}vw`);
      s.setProperty("--sights-scale", String(1 / backScale));
      s.setProperty("--sights-top", `${sightsParentTop}px`);
      s.setProperty("--sights-screen-top", `${sightsScreenTop}px`);

      // ── Global scroll progress bar ──────────────────────────────────────
      const totalPageScroll = document.body.scrollHeight - window.innerHeight;
      const pageProgress =
        totalPageScroll > 0 ? Math.min(1, window.scrollY / totalPageScroll) : 0;
      if (progressBar) progressBar.style.width = `${pageProgress * 100}%`;

      // ── Back-to-top button visibility ───────────────────────────────────
      if (scrollTopBtn) {
        scrollTopBtn.classList.toggle("is-visible", window.scrollY > 500);
      }

      // ── Re-schedule if still in motion ──────────────────────────────────
      const stillScrolling = Math.abs(smoothScroll - targetScroll) > 0.08;
      const stillMouseX = Math.abs(mouseX - targetMouseX) > 0.001;
      const stillMouseY = Math.abs(mouseY - targetMouseY) > 0.001;
      if (stillScrolling || stillMouseX || stillMouseY) {
        requestTick();
      }
    }

    function requestTick() {
      if (!rafPending) {
        rafPending = true;
        requestAnimationFrame(update);
      }
    }

    // ── Intersection Observer for reveal animations ────────────────────────
    const reveals = document.querySelectorAll<Element>(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );
    if (reduceMotion.matches) {
      reveals.forEach((el) => el.classList.add("is-visible"));
    } else {
      reveals.forEach((el) => revealObserver.observe(el));
    }

    // ── Event listeners ───────────────────────────────────────────────────
    function onScroll() {
      requestTick();
    }
    function onResize() {
      updateSightSlider();
      requestTick();
    }
    function onPointerMove(e: PointerEvent) {
      targetMouseX = e.clientX / window.innerWidth - 0.5;
      targetMouseY = e.clientY / window.innerHeight - 0.5;
      requestTick();
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    prevBtn.addEventListener("click", () => moveSightSlider(-1));
    nextBtn.addEventListener("click", () => moveSightSlider(1));

    // ── Boot ──────────────────────────────────────────────────────────────
    setupSightSlider();
    requestTick();

    // ── Cleanup ───────────────────────────────────────────────────────────
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      track.removeEventListener("transitionend", normalizeSightSlider);
      revealObserver.disconnect();
    };
  }, []);

  return (
    <main className="site-shell">
      {/* ── Fixed UI chrome ─────────────────────────────────────────────── */}
      <div id="scroll-progress" className="scroll-progress" aria-hidden="true" />
      <button
        id="scroll-top-btn"
        className="scroll-top-btn"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>

      {/* ── Cinematic scroll section ─────────────────────────────────────── */}
      <section
        className="cinema-scroll"
        id="cinema"
        aria-label="Mostar cinematic scroll story"
      >
        <div className="stage">
          <div className="world">
            {/* Sky */}
            <img className="scene-img sky-img" src={SKY_URL} alt="" />

            {/* Header */}
            <header className="site-header" aria-label="Primary navigation">
              <a className="site-logo" href="#cinema">
                Bosnia and Herzegovina
              </a>
              <nav className="site-nav" aria-label="Main menu">
                <a href="#cinema">Intro</a>
                <a href="#bridge">Bridge</a>
                <a href="#bazaar">Bazaar</a>
                <a href="#routes">Routes</a>
              </nav>
              <button className="language-switcher" aria-label="Change language">
                <span>EN</span>
                <span aria-hidden="true">⌄</span>
              </button>
            </header>

            {/* Back stack */}
            <div className="back-stack">
              <img className="scene-img back-img back-four" src={BACK_FOUR_URL} alt="" />

              {/* Sights slider */}
              <section className="sights-slider" aria-label="Mostar sights slider">
                <div className="sights-track">
                  {SIGHT_CARDS.map((card, i) => (
                    <article
                      key={i}
                      className="sight-card"
                      tabIndex={0}
                      role="button"
                      aria-label={card.ariaLabel}
                    >
                      <span className="sight-kicker">{card.kicker}</span>
                      <img className="sight-pin" src={card.icon} alt="" />
                      <h3>{card.h3}</h3>
                      <p>{card.p}</p>
                    </article>
                  ))}
                </div>
              </section>

              <img className="scene-img back-img back-bazaar" src={BAZAAR_URL} alt="" />
            </div>

            {/* Sights controls */}
            <div className="sights-controls" aria-label="Slider controls">
              <button className="sight-nav sight-prev" aria-label="Previous sight">←</button>
              <button className="sight-nav sight-next" aria-label="Next sight">→</button>
            </div>

            {/* Hero title */}
            <h1 className="hero-title">MOSTAR</h1>

            {/* Splitframes */}
            <img className="scene-img splitframe-img splitframe-left" src={SPLIT_LEFT_URL} alt="" />
            <img className="scene-img splitframe-img splitframe-right" src={SPLIT_RIGHT_URL} alt="" />

            {/* Bridge */}
            <img className="scene-img bridge-img" src={BRIDGE_URL} alt="" />

            {/* Frame two */}
            <img className="scene-img frame-two-img" src={FRAME_TWO_URL} alt="" />

            {/* Shade */}
            <div className="shade" />
          </div>

          {/* Intro copy */}
          <section className="intro-copy" aria-label="Mostar overview">
            <p>
              A stone arch, emerald water, and a compact old city made for slow
              mornings, late light, and one unforgettable crossing.
            </p>
            <div className="hero-tags" aria-label="Mostar highlights">
              <span>Old Bridge</span>
              <span>Neretva River</span>
              <span>UNESCO old city</span>
            </div>
          </section>

          {/* Bridge panel */}
          <section className="story-panel story-panel-bridge" aria-label="Old Bridge details">
            <h2>The bridge is the city&apos;s compass.</h2>
            <p>
              Stari Most links the banks of the Neretva and anchors a historic
              quarter shaped by Ottoman, Mediterranean, and European layers.
            </p>
            <dl className="facts">
              <div>
                <dt>1566</dt>
                <dd>Original bridge completed</dd>
              </div>
              <div>
                <dt>2005</dt>
                <dd>Old Bridge Area inscribed by UNESCO</dd>
              </div>
            </dl>
          </section>

          {/* Bazaar panel */}
          <section className="story-panel story-panel-bazaar" aria-label="Old town details">
            <h2>The bazaar keeps Mostar close.</h2>
            <p>
              Stone lanes, mosque courtyards, copper stalls, and riverside coffee
              stay within a short walk of Stari Most.
            </p>
            <button className="note-button">
              <span aria-hidden="true">↗</span>
              <span>Open old town notes</span>
            </button>
          </section>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/*  POST-CINEMA SECTIONS                                             */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <div className="post-cinema">

        {/* ── 1. STAT BAND ────────────────────────────────────────────────── */}
        <div className="stat-band" aria-label="Mostar key facts">
          <div className="stat-band-inner">
            {STATS.map((stat, i) => (
              <div key={i} className="stat-item reveal" style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}>
                <span className="stat-value">
                  {stat.value}
                  {stat.unit && <span className="stat-unit">{stat.unit}</span>}
                </span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── 2. SEASONS ──────────────────────────────────────────────────── */}
        <section className="seasons-section" aria-label="Best time to visit Mostar">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-eyebrow">When to Visit</span>
              <h2 className="section-title">Pick your season.</h2>
              <p className="section-sub">
                Every month in Mostar rewards the traveller differently.
              </p>
            </div>
            <div className="seasons-grid">
              {SEASONS.map((s, i) => (
                <article
                  key={s.id}
                  className={`season-card season-${s.id} reveal`}
                  style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                >
                  <div className="season-top">
                    <span className="season-months">{s.months}</span>
                    <h3 className="season-name">{s.name}</h3>
                  </div>
                  <p className="season-desc">{s.desc}</p>
                  <div className="season-meta">
                    <span className="season-temp">{s.temp}</span>
                    <span className="season-crowd">
                      <span className="crowd-dot" />
                      {s.crowd}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. ROUTES ───────────────────────────────────────────────────── */}
        <section className="routes-section" id="routes" aria-label="How to get to Mostar">
          <div className="routes-bg-wrap">
            <img className="routes-bg-img" src={SKY_URL} alt="" aria-hidden="true" />
            <div className="routes-overlay" />
          </div>
          <div className="container routes-inner">
            <div className="routes-copy reveal">
              <span className="section-eyebrow section-eyebrow--light">Getting There</span>
              <h2 className="routes-title">Mostar by land.</h2>
              <p className="routes-sub">
                Three easy approaches from the Adriatic coast and the capital.
              </p>
            </div>
            <div className="route-cards">
              {ROUTES.map((r, i) => (
                <div
                  key={i}
                  className="route-card reveal"
                  style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
                >
                  <span className="route-icon" aria-hidden="true">{r.icon}</span>
                  <h3 className="route-mode">{r.mode}</h3>
                  <p className="route-desc">{r.desc}</p>
                  <span className="route-detail">{r.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. GALLERY STRIP ────────────────────────────────────────────── */}
        <section className="gallery-section" aria-label="Mostar photo gallery">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-eyebrow">The City in Layers</span>
              <h2 className="section-title">Seen from every angle.</h2>
            </div>
          </div>
          <div className="gallery-viewport" aria-hidden="true">
            {/* Duplicate for seamless loop */}
            <div className="gallery-track">
              {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, i) => (
                <div key={i} className="gallery-item">
                  <img src={img.src} alt={img.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. LOCAL TIPS ───────────────────────────────────────────────── */}
        <section className="tips-section" aria-label="Local tips for Mostar">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-eyebrow section-eyebrow--ink">Local Knowledge</span>
              <h2 className="section-title section-title--ink">Three things to know.</h2>
            </div>
            <div className="tips-grid">
              {TIPS.map((tip, i) => (
                <article
                  key={i}
                  className="tip-card reveal"
                  style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
                >
                  <span className="tip-number">{tip.num}</span>
                  <h3 className="tip-heading">{tip.heading}</h3>
                  <p className="tip-body">{tip.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. BRIDGE QUOTE BANNER ──────────────────────────────────────── */}
        <div className="quote-banner">
          <div className="quote-banner-bg">
            <img src={FRAME_TWO_URL} alt="" aria-hidden="true" />
            <div className="quote-banner-overlay" />
          </div>
          <div className="container quote-inner reveal">
            <blockquote className="site-quote">
              <p>
                &ldquo;The bridge has been the soul of this city for five centuries.
                It fell once. The city rebuilt it. That says everything.&rdquo;
              </p>
              <cite>Old Town, Mostar</cite>
            </blockquote>
          </div>
        </div>

        {/* ── 7. FOOTER ───────────────────────────────────────────────────── */}
        <footer className="site-footer" aria-label="Site footer">
          <div className="container footer-inner">
            <div className="footer-top">
              <span className="footer-logo">Bosnia and Herzegovina</span>
              <span className="footer-coords">43.3438° N · 17.8078° E</span>
            </div>
            <div className="footer-divider" />
            <div className="footer-bottom">
              <span className="footer-tagline">
                A cinematic journey through Herzegovina.
              </span>
              <nav className="footer-nav" aria-label="Footer navigation">
                <a href="#cinema">Intro</a>
                <a href="#routes">Routes</a>
              </nav>
              <span className="footer-copy">© 2026 Mostar</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
