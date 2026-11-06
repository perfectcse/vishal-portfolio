import React from "react";
import { projects } from "../data/projects.js";
import ExternalLink from "../components/ExternalLink.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Experience() {
  const projectWork = projects.filter((project) =>
    ["AutoService", "Cricket Blog", "Contact Book"].includes(project.name),
  );

  return (
    <section className="section-shell section-experience" id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="Hands-on development"
          title={<>Project-based <span className="text-accent">experience.</span></>}
          description="Selected applications that document my practical work across frontend and full-stack development."
          number="04"
        />
        <div className="experience-list">
          {projectWork.map((project) => (
            <article className="experience-entry" key={project.name}>
              <span className="experience-marker" aria-hidden="true" />
              <div className="experience-content">
                <p className="eyebrow">{project.category} <span>/ {project.number}</span></p>
                <h3>{project.name}</h3>
                <p className="experience-description">{project.description}</p>
                <ul className="experience-highlights">
                  {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
                <div className="tag-list" aria-label={`${project.name} technologies`}>
                  {project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
                </div>
                <div className="experience-links">
                  {project.links
                    .filter((link) => link.href.includes("github.com"))
                    .map((link) => (
                      <ExternalLink className="text-link" href={link.href} key={link.href}>
                        {link.label} <span aria-hidden="true">↗</span>
                      </ExternalLink>
                    ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
