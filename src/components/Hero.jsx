import React from "react";
import portfolioData from "../data/portfolioData";
import "./Hero.css";
// import "../assets/loki1.jpeg";
// import "./HeroImage.css"; // ← NEW: image-only styles

function Hero() {
  const nameParts = portfolioData.name.trim().split(" ");

  return (
    <section className="hero-section">

      {/* ── Decorative diagonal gold slashes ── */}
      <div className="hero-slash"   aria-hidden="true" />
      <div className="hero-slash-2" aria-hidden="true" />

      {/* ── Ambient glow blobs ── */}
      <div className="hero-glow-main"  aria-hidden="true" />
      <div className="hero-glow-right" aria-hidden="true" />

      {/* ── Main content ── */}
      <div className="hero-content">

        {/* Top meta row */}
        <div className="hero-meta-row">
          <span className="hero-index">
            <span>01</span> / Portfolio
          </span>
          <span className="hero-available">Available for work</span>
        </div>

        {/* Name — each word in its own block */}
        {nameParts.map((word, i) => (
          <div className="hero-name-block" key={i}>
            <h1 className="hero-name">{word}</h1>
          </div>
        ))}

        {/* Role */}
        <div className="hero-role-row">
          <span className="hero-role-line" aria-hidden="true" />
          <h2 className="hero-role">{portfolioData.role}</h2>
        </div>

        {/* Location */}
        <p className="hero-location">
          {portfolioData.location}
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta">
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noreferrer"
            className="hero-btn-primary"
          >
            <span className="btn-label">GitHub</span>
            <span className="btn-arrow" aria-hidden="true">→</span>
          </a>

          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hero-btn-outline"
          >
            <span className="btn-label">LinkedIn</span>
            <span className="btn-arrow" aria-hidden="true">↗</span>
          </a>
        </div>

      </div>

      {/* ================================================================
          NEW — Profile Image Block
          Step 1: Copy your photo into  src/assets/profile.jpg
          Step 2: Update the src= path below if your filename differs
          ================================================================ */}
      <div className="hero-image-wrap">

        {/* Outer pulsing glow halo */}
        <div className="hero-image-glow" aria-hidden="true" />

        {/* Rotating decorative ring */}
        <div className="hero-image-ring" aria-hidden="true" />

        {/* Image frame — circular crop */}
        <div className="hero-image-frame">
          <img
            src="/src/assets/loki1.jpeg"
            alt={`Portrait of ${portfolioData.name}`}
            loading="eager"
          />
          {/* ✏️ CHANGE src= above to match your actual image path, e.g.:
               src="/src/assets/photo.png"
               src="/src/assets/me.webp"
               src={profileImg}  (if you import it at the top)     */}
        </div>

        {/* Small status badge below the image */}
        <div className="hero-image-badge" aria-hidden="true">
          <span className="hero-image-badge-text">Open to work</span>
          {/* ✏️ CHANGE badge text if desired, e.g. "Freelance · Remote" */}
        </div>

      </div>
      {/* ── END Image Block ── */}

      {/* ── Scroll indicator ── */}
      <div className="hero-scroll" aria-hidden="true">
        <span className="hero-scroll-label">Scroll</span>
        <div className="hero-scroll-track" />
      </div>

      {/* ── Corner metadata ── */}
      <div className="hero-corner-data" aria-hidden="true">
        <p><strong>FOLIO</strong> · 2025</p>
        <p><strong>VER</strong>   · 1.0.0</p>
        <p><strong>MODE</strong>  · AVAILABLE</p>
      </div>

    </section>
  );
}

export default Hero;