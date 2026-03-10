import React from "react";
import portfolioData from "../data/portfolioData";
import "./Education.css";

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">

        {/* ── Section title (CSS adds italic "Curriculum Vitae" label above) ── */}
        <h2 className="education-title">Education</h2>

        {/* ── Timeline list ── */}
        <div className="education-list">
          {portfolioData.education.map((edu, index) => (
            <div
              className="education-card"
              key={index}
              /* data-index feeds the wax-seal node via CSS content: attr() */
              data-index={String(index + 1).padStart(2, "0")}
            >

              {/* ── Card header: degree + year badge ── */}
              <div className="education-card-header">
                <h3 className="education-degree">{edu.degree}</h3>
                <span className="education-year">{edu.year}</span>
              </div>

              {/* ── Card body: institution + description ── */}
              <div className="education-card-body">

                <p className="education-institution">
                  {edu.institution}
                </p>

                {/* Only render description if the field exists */}
                {edu.description && (
                  <p className="education-description">
                    {edu.description}
                  </p>
                )}

              </div>

            </div>
          ))}
        </div>

        {/* ── Ornamental closing rule ── */}
        <div className="education-footer-ornament" aria-hidden="true">
          <span className="ornament-symbol">✦ ✦ ✦</span>
        </div>

      </div>
    </section>
  );
}

export default Education;