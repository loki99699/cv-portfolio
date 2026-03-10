import React from "react";
import SectionWrapper from "../sections/SectionWrapper";
import portfolioData from "../data/portfolioData";
import "./Contact.css"; // ← adjust path if your styles folder is elsewhere

function Contact() {
  return (
    <SectionWrapper title="Contact" id="contact">

      {/* ── Ambient glow blobs ── */}
      <div className="contact-glow-a" aria-hidden="true" />
      <div className="contact-glow-b" aria-hidden="true" />
      <div className="contact-crosshair-bl" aria-hidden="true" />

      {/* ── Inner wrapper ── */}
      <div className="contact-inner">

        {/* Status badge above title */}
        <div className="contact-status-tag">Available for opportunities</div>

        {/* Email row */}
        <div className="contact-email-row">
          <span className="contact-email-label">✉ Email</span>
          <span className="contact-email-value">
            <a href={`mailto:${portfolioData.email}`}>
              {portfolioData.email}
            </a>
          </span>
        </div>

        <div className="contact-phone-row">
          <span className="contact-phone-label">phone no</span>
          <span className="contact-phone-value">
            <a href={`mailto:${portfolioData.phone}`}>
              {portfolioData.phone}
            </a>
          </span>
        </div>

        {/* Social link cards */}
        <div className="contact-links-grid">

          {/* GitHub card */}
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noreferrer"
            className="contact-link-card card-github"
          >
            <div className="card-top-row">
              <span className="card-icon">⌥</span>
              <span className="card-arrow">↗</span>
            </div>
            <div>
              <p className="card-label">Source Code</p>
              <p className="card-name">GitHub</p>
            </div>
          </a>

          {/* LinkedIn card */}
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact-link-card card-linkedin"
          >
            <div className="card-top-row">
              <span className="card-icon">in</span>
              <span className="card-arrow">↗</span>
            </div>
            <div>
              <p className="card-label">Professional Network</p>
              <p className="card-name">LinkedIn</p>
            </div>
          </a>

        </div>
      </div>

      {/* ── Footer transmission bar ── */}
      <div className="contact-transmission">
        <span className="transmission-text">End of transmission</span>
        <div className="transmission-line" />
      </div>

    </SectionWrapper>
  );
}

export default Contact;