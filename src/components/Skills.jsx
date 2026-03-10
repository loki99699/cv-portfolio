import React from "react";
import SectionWrapper from "../sections/SectionWrapper";
import portfolioData from "../data/portfolioData";
import "./Skills.css"; // ← adjust path if your styles folder differs

// ================================================================
// portfolioData.skills can be either:
//
// A) A flat array of strings — simplest format:
//    skills: ["React", "Node.js", "Python", ...]
//
// B) A categorised array of objects — enables category labels:
//    skills: [
//      { category: "Frontend", items: ["React", "CSS", "TypeScript"] },
//      { category: "Backend",  items: ["Node.js", "Python", "PostgreSQL"] },
//    ]
//
// This component handles BOTH formats automatically.
// ================================================================

function Skills() {
  const raw = portfolioData.skills;

  // Detect format
  const isCategorised =
    Array.isArray(raw) &&
    raw.length > 0 &&
    typeof raw[0] === "object" &&
    raw[0] !== null &&
    "category" in raw[0];

  // Normalise to [{ category: string|null, items: string[] }]
  const groups = isCategorised
    ? raw
    : [{ category: null, items: raw }];

  // Total skill count for the status bar
  const totalCount = groups.reduce((acc, g) => acc + g.items.length, 0);

  return (
    <SectionWrapper title="Skills" id="skills">
      <div className="skills-inner">

        {/* ── System status header bar ── */}
        <div className="skills-status-bar">
          <div className="status-bar-left">
            <div className="status-indicator">
              <span className="status-dot" aria-hidden="true" />
              System online
            </div>
            <div className="status-divider" aria-hidden="true" />
            <span className="status-count">
              <span>{String(totalCount).padStart(2, "0")}</span> modules loaded
            </span>
          </div>
          {/* ✏️ CHANGE: Replace with your own stack tagline */}
          <span className="status-bar-right">stack :: v2025.1</span>
        </div>

        {/* ── Skills grid ── */}
        <ul className="skills-grid" role="list">
          {groups.map((group, gIdx) => (
            <React.Fragment key={gIdx}>

              {/* Category divider label (only if categorised data) */}
              {group.category && (
                <li
                  className="skills-category-label"
                  role="presentation"
                  aria-hidden="true"
                >
                  <span>{group.category}</span>
                </li>
              )}

              {/* Skill items */}
              {group.items.map((skill, sIdx) => {
                // Global index across all groups for the item number
                const globalIdx =
                  groups
                    .slice(0, gIdx)
                    .reduce((acc, g) => acc + g.items.length, 0) + sIdx;

                return (
                  <li className="skill-item" key={`${gIdx}-${sIdx}`}>
                    {/* Scan-line shimmer (CSS-triggered on hover) */}
                    <div className="skill-scan" aria-hidden="true" />

                    {/* Top row: index + live dot */}
                    <div className="skill-top-row">
                      <span className="skill-index">
                        {String(globalIdx + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="skill-live-dot"
                        aria-hidden="true"
                        title="Active"
                      />
                    </div>

                    {/* Skill name */}
                    <span className="skill-name">{skill}</span>

                    {/* Animated fill bar — fills on hover via CSS */}
                    <div className="skill-bar-track" aria-hidden="true">
                      <div className="skill-bar-fill" />
                    </div>
                  </li>
                );
              })}

            </React.Fragment>
          ))}
        </ul>

        {/* ── Terminal footer ── */}
        <div className="skills-terminal-footer" aria-hidden="true">
          <div className="terminal-line">
            <span className="terminal-prompt">›</span>
            <span>
              {/* ✏️ CHANGE: Replace with your name or brand */}
              portfolio.skills.render() — {totalCount} items compiled
            </span>
            <span className="terminal-cursor" />
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}

export default Skills;