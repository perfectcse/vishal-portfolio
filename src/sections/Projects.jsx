import React from "react";
import { projects } from "../data/projects.js";
import ExternalLink from "../components/ExternalLink.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

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

export default function Projects() {
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
