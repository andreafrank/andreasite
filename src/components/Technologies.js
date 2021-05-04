import React from 'react';
import './Technologies.css';

const Technologies = ({technologies}) => {
  const techList = technologies.map((tech, index) => {
    return (
      <li key={index} className="secondary_font inline-block py-1 px-2 rounded-full text-white bg-gray-500 last:mr-0 mr-2 mb-2">
       {tech}
      </li>
    );
  });

 return (
   <ul>
    {techList}
   </ul>
 )
}

export default Technologies;
