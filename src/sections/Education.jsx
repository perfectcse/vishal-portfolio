import React from "react";
import { siteConfig } from "../data/siteConfig.js";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Education() {
  return (
    <section className="section-shell section-education" id="education">
      <div className="container">
        <SectionHeading
          eyebrow="Academic background"
          title={<>Education<span className="text-accent">.</span></>}
          description="My computer science education informs my approach to building practical web applications."
          number="06"
        />
        <article className="education-card education-page-card">
          <p className="eyebrow">Bachelor of Technology</p>
          <div className="education-mark" aria-hidden="true">B.Tech</div>
          <div className="education-rule" />
          <h3>Computer Science</h3>
          <p>{siteConfig.educationInstitution}</p>
          <div className="education-bottom">
            <span>Graduated</span>
            <strong>{siteConfig.graduationYear}</strong>
          </div>
        </article>
      </div>
    </section>
  );
}
