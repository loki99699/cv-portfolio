import React from "react";

function SectionWrapper({ title, children, id }) {
  return (
    <section id={id}>
      <div>
        <h2>{title}</h2>
        <div>{children}</div>
      </div>
    </section>
  );
}

export default SectionWrapper;