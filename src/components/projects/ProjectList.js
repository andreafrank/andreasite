import React from 'react';
import ProjectItem from './ProjectItem';
import './ProjectList.css';

const ProjectList = ({ projects }) => {
   const allProjects = projects.map((project, index) => {
     return (
       <ProjectItem key={index} project={project} />
     );
   });

  return (
    <div className="font">
      {allProjects}
    </div>
  )
}

export default ProjectList;
