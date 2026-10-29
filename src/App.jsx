import React, { useState } from "react";
import { navigation, siteConfig } from "./data/siteConfig.js";
import { projects, services, skills } from "./data/projects.js";

function ExternalLink({ href, children, className = "", ...props }) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}

function SectionHeading({ eyebrow, title, description, number }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow"><span>{number}</span> / {eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {description && <p className="section-intro">{description}</p>}
    </div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleKeyDown(event) {
    if (event.key === "Escape") closeMenu();
  }

  return (
    <header className="site-header">
      <nav className="nav-shell container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label={`${siteConfig.name}, home`}>
          <span className="brand-mark" aria-hidden="true">v.</span>
          <span>vishal<span className="brand-dot">.</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          onKeyDown={handleKeyDown}
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

function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-grid container">
        <div className="hero-copy">
          <p className="availability"><span className="status-dot" /> Open to full-time opportunities</p>
          <p className="eyebrow hero-label">React.js Developer <span className="eyebrow-separator">/</span> MERN Stack Developer <span className="eyebrow-separator">/</span> Frontend Developer</p>
          <h1>Building responsive, modern web experiences <span>with React.js.</span></h1>
          <p className="hero-description">
            I&apos;m {siteConfig.name}, a web developer focused on building responsive websites and practical web applications using JavaScript, React.js, and the MERN stack.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my projects <span aria-hidden="true">↘</span></a>
            <ExternalLink className="button button-secondary" href={siteConfig.links.fiverrReact}>
              Hire me on Fiverr <span aria-hidden="true">↗</span>
            </ExternalLink>
            <a className="button button-secondary" href="#contact">
              Contact me <span aria-hidden="true">↘</span>
            </a>
          </div>
          <div className="hero-socials" aria-label="Profile links">
            <ExternalLink href={siteConfig.links.github}>GitHub <span aria-hidden="true">↗</span></ExternalLink>
            <span className="social-divider" />
            {siteConfig.links.linkedin ? (
              <ExternalLink href={siteConfig.links.linkedin}>LinkedIn <span aria-hidden="true">↗</span></ExternalLink>
            ) : (
              <span className="placeholder-label">{siteConfig.placeholders.linkedin}</span>
            )}
          </div>
        </div>
        <div className="hero-art" aria-label="Decorative code editor illustration">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="editor-window">
            <div className="editor-topbar">
              <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
              <span>portfolio.jsx</span>
              <span className="editor-status">●</span>
            </div>
            <div className="editor-body" aria-hidden="true">
              <div className="line-numbers">01<br />02<br />03<br />04<br />05<br />06<br />07<br />08</div>
              <div className="code-lines">
                <p><span className="code-purple">const</span> <span className="code-blue">developer</span> = {"{"}</p>
                <p className="indent"><span className="code-aqua">name</span>: <span className="code-orange">&quot;Vishal&quot;</span>,</p>
                <p className="indent"><span className="code-aqua">focus</span>: <span className="code-orange">&quot;React.js&quot;</span>,</p>
                <p className="indent"><span className="code-aqua">builds</span>: [</p>
                <p className="indent double-indent"><span className="code-orange">&quot;websites&quot;</span>,</p>
                <p className="indent double-indent"><span className="code-orange">&quot;web apps&quot;</span></p>
                <p className="indent">],</p>
                <p>{"};"}<span className="cursor" /></p>
              </div>
            </div>
            <div className="editor-footer"><span>JavaScript React</span><span>UTF-8&nbsp;&nbsp; Ln 08, Col 3</span></div>
          </div>
          <div className="floating-chip chip-react"><span>⚛</span> React.js</div>
          <div className="floating-chip chip-code"><span aria-hidden="true">{"</>"}</span> Clean code</div>
          <div className="art-caption"><span className="caption-line" /> A little thought, a lot of care.</div>
        </div>
      </div>
      <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
    </section>
  );
}

function About() {
  return (
    <section className="section-shell section-about" id="about">
      <div className="container">
        <SectionHeading
          eyebrow="A little about me"
          title={<>Curious by nature.<br /><span className="text-muted">Developer by choice.</span></>}
          number="01"
        />
        <div className="about-grid">
          <p className="about-lead">
            I enjoy turning ideas into web experiences that feel simple to use and work beautifully across devices.
          </p>
          <div className="about-copy">
            <p>
              With a B.Tech in Computer Science, I&apos;ve been building my skills across frontend and full-stack development. I work with JavaScript, React.js, and the MERN stack, with an interest in responsive design, usability, and solving practical problems through code.
            </p>
            <p>
              I&apos;m currently looking for full-time developer opportunities and am also open to suitable freelance projects.
            </p>
            <a className="text-link" href="#contact">A bit more? Let&apos;s connect <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="about-facts">
          <div><span className="fact-label">Based in</span><strong>{siteConfig.location}</strong></div>
          <div><span className="fact-label">Education</span><strong>{siteConfig.education}</strong></div>
          <div><span className="fact-label">Graduated</span><strong>{siteConfig.graduationYear}</strong></div>
          <div><span className="fact-label">Currently</span><strong>Open to opportunities</strong></div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section-shell section-skills" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="What I work with"
          title={<>My toolkit<span className="text-accent">.</span></>}
          description="A practical set of technologies for building and shipping modern web experiences."
          number="02"
        />
        <div className="skills-grid">
          {skills.map((group) => (
            <article className="skill-card" key={group.name}>
              <div className="skill-card-top"><span>{group.number}</span><span aria-hidden="true">↗</span></div>
              <h3>{group.name}</h3>
              <ul>
                {group.items.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectPreview({ kind }) {
  if (kind === "rides") {
    return (
      <div className="preview preview-rides" aria-hidden="true">
        <div className="preview-map"><span className="map-road road-one" /><span className="map-road road-two" /><span className="map-road road-three" /><span className="map-pin pin-one" /><span className="map-pin pin-two" /></div>
        <div className="preview-panel"><span className="preview-kicker">TRIP OVERVIEW</span><strong>Ride request</strong><div className="preview-route"><i /><span /><i /></div><div className="preview-row"><span>Passenger</span><b>Driver</b></div></div>
      </div>
    );
  }
  if (kind === "holi") {
    return (
      <div className="preview preview-holi" aria-hidden="true">
        <span className="holi-spark spark-one">✳</span><span className="holi-spark spark-two">✦</span><span className="holi-spark spark-three">✳</span>
        <div className="holi-card"><span>HAPPY</span><strong>Holi!</strong><i>Spread a little color</i><div className="color-dots"><b /><b /><b /><b /></div></div>
        <span className="preview-caption">A FESTIVE REACT EXPERIENCE</span>
      </div>
    );
  }
  return (
    <div className="preview preview-landing" aria-hidden="true">
      <div className="landing-top"><span className="landing-logo" /><span /><span /><span /></div>
      <div className="landing-content"><span className="landing-overline" /><strong /><strong className="short-line" /><span className="landing-copy" /><span className="landing-button" /></div>
      <div className="landing-shape shape-large" /><div className="landing-shape shape-small" />
      <span className="preview-caption">RESPONSIVE LAYOUT STUDY</span>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <ProjectPreview kind={project.kind} />
      <div className="project-details">
        <div className="project-meta"><span>{project.category}</span><span>/{project.number}</span></div>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="project-highlights">
          {project.highlights.map((highlight) => <li key={highlight}><span aria-hidden="true">↗</span>{highlight}</li>)}
        </ul>
        <div className="tag-list" aria-label={`${project.name} technologies`}>
          {project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
        </div>
        <div className="project-actions">
          {project.links.map((link) => (
            <ExternalLink
              className={`button ${link.kind === "primary" ? "button-primary" : "button-secondary"}`}
              href={link.href}
              key={link.href}
            >
              {link.label} <span aria-hidden="true">↗</span>
            </ExternalLink>
          ))}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section className="section-shell section-projects" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Selected work"
          title={<>Things I&apos;ve <span className="text-accent">built.</span></>}
          description="A selection of personal projects exploring frontend craft and full-stack application workflows."
          number="03"
        />
        <p className="preview-note"><span aria-hidden="true">✳</span> Project illustrations are CSS previews, not product screenshots.</p>
        <div className="projects-grid">
          {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section-shell section-services" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="Freelance services"
          title={<>Good work starts<br /><span className="text-muted">with a good conversation.</span></>}
          description="Thoughtful frontend help for a clear, agreed scope—alongside my search for full-time work."
          number="04"
        />
        <div className="services-list">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div className="service-copy"><h3>{service.title}</h3><p>{service.description}</p></div>
              <ExternalLink className="service-link" href={service.href}>
                {service.action} <span aria-hidden="true">↗</span>
              </ExternalLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessAndEducation() {
  const steps = [
    ["01", "Discuss requirements", "Align on the goal, audience, and what the work needs to do."],
    ["02", "Plan and implement", "Break the scope into clear pieces and build with care."],
    ["03", "Test and refine", "Check the details, responsiveness, and expected behavior."],
    ["04", "Deliver and explain", "Share the finished work and explain how to use or maintain it."],
  ];

  return (
    <section className="section-shell section-process" id="education">
      <div className="container process-grid">
        <div>
          <SectionHeading eyebrow="How I work" title={<>A clear path<br /><span className="text-muted">from idea to done.</span></>} number="05" />
          <div className="process-list">
            {steps.map(([number, title, description]) => (
              <article className="process-step" key={number}>
                <span>{number}</span><div><h3>{title}</h3><p>{description}</p></div>
              </article>
            ))}
          </div>
        </div>
        <aside className="education-card">
          <p className="eyebrow">Education &amp; projects</p>
          <div className="education-mark" aria-hidden="true">B.Tech</div>
          <div className="education-rule" />
          <h3>Computer Science</h3>
          <p>{siteConfig.education}</p>
          <div className="education-bottom"><span>Graduated</span><strong>{siteConfig.graduationYear}</strong></div>
        </aside>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section-shell section-contact" id="contact">
      <div className="container">
        <div className="contact-card">
          <p className="eyebrow"><span>06</span> / Get in touch</p>
          <div className="contact-content">
            <div>
              <h2>Have something<br />good in mind<span className="text-accent">?</span></h2>
              <p>I&apos;m open to full-time developer roles and suitable freelance projects. Reach out through a profile below.</p>
            </div>
            <div className="contact-links">
              <ExternalLink href={siteConfig.links.github} className="contact-link">
                <span><small>01 / PROFILE</small>GitHub</span><span aria-hidden="true">↗</span>
              </ExternalLink>
              <ExternalLink href={siteConfig.links.fiverrReact} className="contact-link">
                <span><small>02 / FREELANCE</small>React.js on Fiverr</span><span aria-hidden="true">↗</span>
              </ExternalLink>
              <ExternalLink href={siteConfig.links.fiverrBugFixing} className="contact-link">
                <span><small>03 / FREELANCE</small>Bug fixing on Fiverr</span><span aria-hidden="true">↗</span>
              </ExternalLink>
              {siteConfig.links.linkedin ? (
                <ExternalLink href={siteConfig.links.linkedin} className="contact-link">
                  <span><small>04 / PROFILE</small>LinkedIn</span><span aria-hidden="true">↗</span>
                </ExternalLink>
              ) : (
                <div className="contact-link contact-placeholder"><span><small>04 / PROFILE</small>{siteConfig.placeholders.linkedin}</span></div>
              )}
              {siteConfig.links.email ? (
                <a className="contact-link" href={`mailto:${siteConfig.links.email}`}>
                  <span><small>05 / EMAIL</small>{siteConfig.links.email}</span><span aria-hidden="true">↗</span>
                </a>
              ) : (
                <div className="contact-link contact-placeholder"><span><small>05 / EMAIL</small>{siteConfig.placeholders.email}</span></div>
              )}
            </div>
          </div>
          <p className="contact-note">Email and LinkedIn links will be enabled once you add the real details in the site configuration.</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
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

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <ProcessAndEducation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
