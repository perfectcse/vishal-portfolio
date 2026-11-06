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
          <span>Vishal<span className="brand-dot">.</span></span>
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
        <div className="footer-brand">
          <Link className="brand" to="/" aria-label={`${siteConfig.name}, home`}>
            <span className="brand-mark" aria-hidden="true">v.</span>
            <span>Vishal<span className="brand-dot">.</span></span>
          </Link>
          <p className="footer-role">{siteConfig.title}</p>
          <p className="footer-intro">
            Building modern, responsive and user-friendly web applications with React.js and the MERN stack.
          </p>
        </div>

        <section className="footer-cta" aria-labelledby="footer-cta-heading">
          <p className="eyebrow">Have a project in mind?</p>
          <h2 id="footer-cta-heading">Let&apos;s build something great together.</h2>
          <p>I&apos;m open to React.js, frontend and MERN Stack development opportunities. Let&apos;s connect.</p>
          <Link className="button button-primary footer-cta-button" to="/contact">
            Get in Touch <span aria-hidden="true">↗</span>
          </Link>
        </section>

        <nav className="footer-column" aria-label="Footer navigation">
          <h2 className="footer-column-heading">Quick links</h2>
          <div className="footer-nav">
            {navigation.map((item) => (
              <Link to={item.href} key={item.href}>{item.label}</Link>
            ))}
          </div>
        </nav>

        <div className="footer-column" aria-labelledby="footer-connections-heading">
          <h2 className="footer-column-heading" id="footer-connections-heading">Connect</h2>
          <div className="footer-social">
            <ExternalLink href={siteConfig.links.github} aria-label="Visit Vishal Mishra on GitHub">
              GitHub <span aria-hidden="true">↗</span>
            </ExternalLink>
            {siteConfig.links.linkedin ? (
              <ExternalLink href={siteConfig.links.linkedin} aria-label="Connect with Vishal Mishra on LinkedIn">
                LinkedIn <span aria-hidden="true">↗</span>
              </ExternalLink>
            ) : (
              <span className="footer-placeholder">{siteConfig.placeholders.linkedin}</span>
            )}
            {siteConfig.links.email ? (
              <a href={`mailto:${siteConfig.links.email}`} aria-label={`Email Vishal Mishra at ${siteConfig.links.email}`}>
                {siteConfig.links.email}
              </a>
            ) : (
              <span className="footer-placeholder">{siteConfig.placeholders.email}</span>
            )}
            <ExternalLink href={siteConfig.links.fiverrReact}>React gig <span aria-hidden="true">↗</span></ExternalLink>
            <ExternalLink href={siteConfig.links.fiverrBugFixing}>Bug-fixing gig <span aria-hidden="true">↗</span></ExternalLink>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
        <span>Built with React.js · Designed &amp; built with care <b aria-hidden="true">✳</b></span>
        <Link to="/">Back to home ↑</Link>
      </div>
    </footer>
  );
}
