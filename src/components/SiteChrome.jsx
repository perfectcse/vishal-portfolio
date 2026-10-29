import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
        <Link className="brand" to="/" onClick={closeMenu} aria-label={`${siteConfig.name}, home`}>
          <span className="brand-mark" aria-hidden="true">v.</span>
          <span>vishal<span className="brand-dot">.</span></span>
        </Link>
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
              <NavLink key={item.href} to={item.href} end={item.href === "/"} onClick={closeMenu}>
                {item.label}
              </NavLink>
            ))}
          </div>
          <Link className="button button-small button-outline nav-cta" to="/contact" onClick={closeMenu}>
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-identity"><Link className="brand" to="/"><span className="brand-mark" aria-hidden="true">v.</span><span>vishal<span className="brand-dot">.</span></span></Link><p>{siteConfig.title}</p></div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {navigation.map((item) => <Link to={item.href} key={item.href}>{item.label}</Link>)}
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
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.name}</span><span>Designed &amp; built with care <b>✳</b></span><Link to="/">Back to home ↑</Link></div>
    </footer>
  );
}
