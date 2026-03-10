import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css"; // ← adjust path if needed

// ✏️ CHANGE: Replace "Portfolio" with your name or brand
const BRAND_NAME = "Portfolio";
// ✏️ CHANGE: Replace with your initials or short tagline shown under logo
const BRAND_SUB  = "Creative Developer";

const NAV_LINKS = [
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"      },
  { label: "Projects",   href: "#projects"    },
  
  { label: "Contact",    href: "#contact"     },
];

function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [activeLink,  setActiveLink]  = useState("");
  const [progress,    setProgress]    = useState(0);
  const drawerRef = useRef(null);

  /* ── Scroll: progress bar + scrolled class + close mobile menu ── */
  useEffect(() => {
    const onScroll = () => {
      const doc    = document.documentElement;
      const scrollTop = window.scrollY;
      const maxScroll = doc.scrollHeight - doc.clientHeight;

      setScrolled(scrollTop > 40);
      setProgress(maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0);

      // Close mobile menu on scroll
      if (menuOpen) setMenuOpen(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  /* ── Scroll spy: highlight active nav link ── */
  useEffect(() => {
    const sectionIds = NAV_LINKS.map(l => l.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* ── Close drawer when clicking outside ── */
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  /* ── Smooth scroll handler ── */
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Scroll progress bar — sits at very top of viewport */}
      <div
        className="nav-progress-bar"
        style={{ "--scroll-progress": `${progress}%` }}
        aria-hidden="true"
      />

      <nav
        className={`site-nav${scrolled ? " scrolled" : ""}`}
        role="navigation"
        aria-label="Main navigation"
        ref={drawerRef}
      >
        {/* ── Inner bar ── */}
        <div className="nav-inner">

          {/* Logo */}
          <a
            href="#"
            className="nav-logo"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            aria-label="Go to top"
          >
            <span className="nav-logo-text" data-text={BRAND_NAME}>
              {BRAND_NAME}
            </span>
            <span className="nav-logo-sub">{BRAND_SUB}</span>
          </a>

          {/* Desktop links */}
          <ul className="nav-links" role="list">
            {NAV_LINKS.map(({ label, href }, i) => (
              <li className="nav-item" key={href}>
                <a
                  href={href}
                  className={`nav-link${activeLink === href ? " active" : ""}`}
                  onClick={e => handleNavClick(e, href)}
                >
                  <span className="nav-link-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="nav-cta">
            <a
              href="#contact"
              className="nav-cta-btn"
              onClick={e => handleNavClick(e, "#contact")}
            >
              {/* ✏️ CHANGE: Update CTA label if desired */}
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`nav-hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="ham-line" />
            <span className="ham-line" />
            <span className="ham-line" />
          </button>
        </div>

        {/* ── Mobile drawer ── */}
        <div
          className={`nav-mobile-drawer${menuOpen ? " open" : ""}`}
          aria-hidden={!menuOpen}
        >
          {NAV_LINKS.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              className={`nav-mobile-link${activeLink === href ? " active" : ""}`}
              onClick={e => handleNavClick(e, href)}
            >
              <span className="nav-mobile-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              {label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navbar;