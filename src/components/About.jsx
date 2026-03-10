import React from "react";
import SectionWrapper from "../sections/SectionWrapper";
import portfolioData from "../data/portfolioData";
import "./About.css"; // ← import the stylesheet (adjust path if needed)

function About() {
  return (
    <SectionWrapper title="About Me" id="about">

      {/* Inner layout grid */}
      <div className="about-inner">

        {/* Main paragraph — portfolioData.about goes here */}
        <p>{portfolioData.about}</p>

        {/* Right vertical decoration column */}
        <div className="about-side">
          <span className="about-side-label">About</span>
        </div>

      </div>

      {/* Bottom ornament line */}
      <div className="about-footer-line">
        <span className="about-footer-dot" />
      </div>

    </SectionWrapper>
  );
}

export default About;