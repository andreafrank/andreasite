import React from 'react';
import './ProjectList\.css';


const ProjectList = ({projects}) => {
   const allProjects = projects.map((project, index) => {
     return (
       <li key={index}>
        {project}
       </li>
     );
   });

  return (
    <ul>
     {allProjects}
    </ul>
  )
}

export default ProjectList;
