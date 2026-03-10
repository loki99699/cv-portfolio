import React from "react";
import SectionWrapper from "../sections/SectionWrapper";
import portfolioData from "../data/portfolioData";
import "./Projects.css"; // ← adjust path if your styles folder differs

function Projects() {
  const projects = portfolioData.projects;

  return (
    <SectionWrapper title="Projects" id="projects">

      {/* ── Inner layout container ── */}
      <div className="projects-inner">

        {/* Project count badge sits next to the section title via CSS sibling,
            but we render it separately here for flexibility */}
        <span className="projects-count-badge" aria-label={`${projects.length} projects`}>
          {String(projects.length).padStart(2, "0")} works
        </span>

        {/* ── Projects grid ── */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={index}>

              {/* Inner glow layer (CSS-driven on hover) */}
              <div className="card-glow" aria-hidden="true" />

              {/* ── Card header: index + title + external icon ── */}
              <div className="card-header">
                <span className="card-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="card-title-wrap">
                  <h3 className="card-title">{project.title}</h3>
                  {/* Featured badge only on first project */}
                  {index === 0 && (
                    <span className="card-featured-label">Featured</span>
                  )}
                </div>

                {/* External link arrow — decorative, real link is in footer */}
                <span className="card-ext-icon" aria-hidden="true">↗</span>
              </div>

              {/* ── Description ── */}
              <p className="card-description">{project.description}</p>

              {/* ── Tech stack ── */}
              <div className="card-tech-row">
                {project.tech.map((tech, i) => (
                  <span className="tech-tag" key={i}>{tech}</span>
                ))}
              </div>

              {/* ── Card footer: view link ── */}
              <div className="card-footer">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="card-link"
                  aria-label={`View ${project.title} project`}
                >
                  View Project
                  <span className="card-link-arrow" aria-hidden="true">→</span>
                </a>
              </div>

            </article>
          ))}
        </div>

        {/* ── Footer rule ── */}
        <div className="projects-footer-rule" aria-hidden="true">
          <span className="rule-label">End of projects</span>
        </div>

      </div>

    </SectionWrapper>
  );
}

export default Projects;