import React from 'react';
import './Technologies.css';

const Technologies = ({technologies}) => {
  const techList = technologies.map((tech, index) => {
    return (
      <li key={index} className="tag">
       {tech}
      </li>
    );
  });

 return (
   <ul className="tags">
    {techList}
   </ul>
 )
}

export default Technologies;
