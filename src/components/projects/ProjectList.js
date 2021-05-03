import React from 'react';
import ProjectItem from './ProjectItem';
import './ProjectList.css';


const ProjectList = ({ projects }) => {
  console.log(projects);
   const allProjects = projects.map((project, index) => {
     return (
       <ProjectItem key={index} project={project} />
     );
   });

  return (
    <div>
     {allProjects}
    </div>
  )
}

export default ProjectList;
