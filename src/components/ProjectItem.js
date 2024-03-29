import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(name)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {technologies.map((tech, index) => (
          // The key prop is required if you enable react's warning mode, which you should always do
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
