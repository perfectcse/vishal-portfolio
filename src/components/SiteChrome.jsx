import React, { useRef, useState } from "react";
import { navigation, siteConfig } from "../data/siteConfig.js";
import ExternalLink from "./ExternalLink.jsx";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleRef = useRef(null);

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleKeyDown(event) {
    if (event.key === "Escape" && menuOpen) {
      closeMenu();
      menuToggleRef.current?.focus();
    }
  }

  return (
    <header className="site-header">
      <nav className="nav-shell container" aria-label="Main navigation" onKeyDown={handleKeyDown}>
        <a className="brand" href="#home" onClick={closeMenu} aria-label={`${siteConfig.name}, home`}>
          <span className="brand-mark" aria-hidden="true">v.</span>
          <span>vishal<span className="brand-dot">.</span></span>
        </a>
        <button
          ref={menuToggleRef}
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>
        <div
          className={`nav-content${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
        >
          <div className="nav-links">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </div>
          <a className="button button-small button-outline nav-cta" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-identity"><a className="brand" href="#home"><span className="brand-mark" aria-hidden="true">v.</span><span>vishal<span className="brand-dot">.</span></span></a><p>{siteConfig.title}</p></div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </nav>
        <div className="footer-social">
          <ExternalLink href={siteConfig.links.github}>GitHub <span aria-hidden="true">↗</span></ExternalLink>
          {siteConfig.links.linkedin ? (
            <ExternalLink href={siteConfig.links.linkedin}>LinkedIn <span aria-hidden="true">↗</span></ExternalLink>
          ) : (
            <span className="footer-placeholder">{siteConfig.placeholders.linkedin}</span>
          )}
          <ExternalLink href={siteConfig.links.fiverrReact}>React gig <span aria-hidden="true">↗</span></ExternalLink>
          <ExternalLink href={siteConfig.links.fiverrBugFixing}>Bug-fixing gig <span aria-hidden="true">↗</span></ExternalLink>
        </div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.name}</span><span>Designed &amp; built with care <b>✳</b></span><a href="#home">Back to top ↑</a></div>
    </footer>
  );
}
