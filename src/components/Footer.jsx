import React from "react";
import "./Footer.css"; // ← adjust path if your styles folder is elsewhere

function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="site-footer">

      {/* ── Animated aurora top border ── */}
      <div className="footer-aurora" aria-hidden="true" />

      {/* ── Star field ── */}
      <div className="footer-stars" aria-hidden="true" />

      {/* ── Giant ghost year watermark ── */}
      <div className="footer-year-bg" aria-hidden="true">{year}</div>

      {/* ── Main content ── */}
      <div className="footer-inner">

        {/* Back to top button */}
        <button
          className="footer-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
        >
          <span className="footer-top-btn-circle">↑</span>
          <span className="footer-top-btn-label">Top</span>
        </button>

        {/* Top row */}
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            {/* ✏️ CHANGE: Replace "Your" and "Name" with your first/last name */}
            <span className="footer-brand-name">
              Lokesh<span>.</span>C Poojary
            </span>
            {/* ✏️ CHANGE: Replace with your title */}
            <span className="footer-brand-sub">Designer &amp; Developer</span>
          </div>

          {/* Metadata / coordinates */}
          <div className="footer-meta">
            {/* ✏️ CHANGE: Replace with your city coordinates or remove */}
            <span className="footer-meta-line">
              <strong>LAT</strong> 12.9141° N &nbsp;
              <strong>LNG</strong> 74.8560° E
            </span>
            {/* ✏️ CHANGE: Replace with your timezone */}
            <span className="footer-meta-line">
              <strong>TZ</strong>&nbsp; Asia/Kolkata — IST UTC+5:30
            </span>
            <span className="footer-meta-line">
              <strong>STATUS</strong>&nbsp; Open to work
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" aria-hidden="true" />

        {/* Bottom row */}
        <div className="footer-bottom">

          {/* Copyright */}
          <p className="footer-copy">
            ©&nbsp;
            <span className="footer-copy-year">{year}</span>
            {/* ✏️ CHANGE: Replace with your full name */}
            &nbsp;· All rights reserved · Lokesh C Poojary
          </p>

          {/* Crafted note */}
          <span className="footer-craft">
            Crafted with&nbsp;
            <span className="footer-craft-heart" aria-label="love">♥</span>
            &nbsp;using React
          </span>

        </div>
      </div>
    </footer>
  );
}

export default Footer;