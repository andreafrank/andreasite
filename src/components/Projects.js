import React from 'react';

const Projects = ({projects}) => {
   const projectList = projects.map((project, index) => {
     return (
       <li key={index}>
        {project}
       </li>
     );
   });

  return (
    <ul>
     {projectList}
    </ul>
  )
}

export default Projects;
