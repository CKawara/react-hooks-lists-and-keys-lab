import React from "react";
import { nanoid } from 'nanoid';

function ProjectItem({ name, about, technologies }) {

  const techList = technologies.map(technology =>{
    return <span key={nanoid()}>{technology}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techList}
      </div>
    </div>
  );
}

export default ProjectItem;
