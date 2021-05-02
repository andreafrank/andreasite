import React from 'react';
import './Technologies.css';

const Technologies = ({technologies}) => {
  const techList = technologies.map(tech => {
    return tech;
  });

 return (
      <button className="bg" onMouseOver={e => e.preventDefault()} >
        {techList}
       </button>
 )
}

export default Technologies;
