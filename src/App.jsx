import React, { useEffect } from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { siteConfig } from "./data/siteConfig.js";
import { services, skills } from "./data/projects.js";
import ExternalLink from "./components/ExternalLink.jsx";
import SectionHeading from "./components/SectionHeading.jsx";
import { Footer, Navbar } from "./components/SiteChrome.jsx";
import Projects from "./sections/Projects.jsx";
import Experience from "./sections/Experience.jsx";
import Education from "./sections/Education.jsx";

const pageMetadata = {
  "/": {
    title: "Vishal Mishra — React.js & MERN Stack Developer",
    description: "Vishal Mishra is a React.js and MERN stack developer building responsive web applications. Explore projects, skills, experience, and contact details.",
  },
  "/about": {
    title: "About Vishal Mishra — React.js Developer",
    description: "Learn about Vishal Mishra's computer science background, frontend interests, and project-based web development experience.",
  },
  "/skills": {
    title: "Technical Skills — Vishal Mishra",
    description: "Explore Vishal Mishra's frontend, backend, database, and development tools skills.",
  },
  "/projects": {
    title: "Projects — Vishal Mishra",
    description: "Browse Vishal Mishra's React.js and MERN stack projects, including AutoService, Cricket Blog, and Contact Book.",
  },
  "/experience": {
    title: "Experience — Vishal Mishra",
    description: "Explore Vishal Mishra's documented project-based development experience and working process.",
  },
  "/education": {
    title: "Education — Vishal Mishra",
    description: "Vishal Mishra's education: B.Tech in Computer Science from AKTU, graduated in 2024.",
  },
  "/services": {
    title: "Services — Vishal Mishra",
    description: "React.js development, responsive landing pages, and frontend bug-fixing services from Vishal Mishra.",
  },
  "/contact": {
    title: "Contact Vishal Mishra",
    description: "Contact Vishal Mishra about React.js developer roles and suitable freelance projects.",
  },
};

function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[pathname] || pageMetadata["/"];
    document.title = metadata.title;

    for (const [selector, value] of [
      ['meta[name="description"]', metadata.description],
      ['meta[property="og:title"]', metadata.title],
      ['meta[property="og:description"]', metadata.description],
      ['meta[name="twitter:title"]', metadata.title],
      ['meta[name="twitter:description"]', metadata.description],
    ]) {
      document.querySelector(selector)?.setAttribute("content", value);
    }

    const canonicalUrl = `${window.location.origin}${pathname}`;
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", canonicalUrl);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", canonicalUrl);
  }, [pathname]);

  return null;
}

function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-grid container">
        <div className="hero-copy">
          <p className="availability"><span className="status-dot" /> Open to full-time opportunities</p>
          <p className="eyebrow hero-label">Hello, I&apos;m {siteConfig.name}</p>
          <h1>Building modern, responsive web experiences <span>with React.js.</span></h1>
          <p className="hero-description">
            I focus on building responsive websites and practical web applications using JavaScript, React.js, and the MERN stack.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/projects">View my projects <span aria-hidden="true">↘</span></Link>
            <ExternalLink className="button button-secondary" href={siteConfig.links.fiverrReact}>
              Hire me on Fiverr <span aria-hidden="true">↗</span>
            </ExternalLink>
            <Link className="button button-secondary" to="/contact">
              Contact me <span aria-hidden="true">↘</span>
            </Link>
          </div>
          <nav className="hero-socials" aria-label="Profile links">
            <ExternalLink href={siteConfig.links.github}>GitHub <span aria-hidden="true">↗</span></ExternalLink>
            <span className="social-divider" />
            {siteConfig.links.linkedin ? (
              <ExternalLink href={siteConfig.links.linkedin}>LinkedIn <span aria-hidden="true">↗</span></ExternalLink>
            ) : (
              <span className="placeholder-label">{siteConfig.placeholders.linkedin}</span>
            )}
          </nav>
        </div>
        <div className="hero-art">
          <div className="portrait-orbits" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
          </div>
          <div className="portrait-frame">
            <img
              src="/images/vishal-profile.jpeg"
              alt="Vishal Mishra - React.js Developer"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="floating-chip chip-react"><span>⚛</span> React.js</div>
          <div className="floating-chip chip-code"><span aria-hidden="true">{"</>"}</span> MERN stack</div>
          <div className="art-caption"><span className="caption-line" /> A little thought, a lot of care.</div>
        </div>
      </div>
      <Link className="scroll-cue" to="/about"><span /> Meet the developer</Link>
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
              With a B.Tech in Computer Science from {siteConfig.educationInstitution}, I focus on frontend and full-stack development. I work with JavaScript, React.js, and the MERN stack, with an interest in responsive design, usability, and solving practical problems through code.
            </p>
            <p>
              My hands-on experience comes from building practical web applications, exploring complete user flows, and refining interfaces across screen sizes. I&apos;m currently looking for developer opportunities and suitable freelance projects.
            </p>
            <Link className="text-link" to="/contact">A bit more? Let&apos;s connect <span aria-hidden="true">↗</span></Link>
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
              <div className="skill-card-top"><span>{group.number}</span><span className="skill-icon" aria-hidden="true">{group.icon}</span></div>
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

function Services() {
  return (
    <section className="section-shell section-services" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="Freelance services"
          title={<>Good work starts<br /><span className="text-muted">with a good conversation.</span></>}
          description="Thoughtful frontend help for a clear, agreed scope—alongside my search for full-time work."
          number="07"
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

function WorkingProcess() {
  const steps = [
    ["01", "Discuss requirements", "Align on the goal, audience, and what the work needs to do."],
    ["02", "Plan and implement", "Break the scope into clear pieces and build with care."],
    ["03", "Test and refine", "Check the details, responsiveness, and expected behavior."],
    ["04", "Deliver and explain", "Share the finished work and explain how to use or maintain it."],
  ];

  return (
    <section className="section-shell section-process">
      <div className="container">
        <SectionHeading eyebrow="How I work" title={<>A clear path<br /><span className="text-muted">from idea to done.</span></>} number="05" />
        <div className="process-list">
          {steps.map(([number, title, description]) => (
            <article className="process-step" key={number}>
              <span>{number}</span><div><h3>{title}</h3><p>{description}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section-shell section-contact" id="contact">
      <div className="container">
        <div className="contact-card">
          <p className="eyebrow"><span>08</span> / Get in touch</p>
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
        </div>
      </div>
    </section>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <RouteMetadata />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<><Experience /><WorkingProcess /></>} />
          <Route path="/education" element={<Education />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
