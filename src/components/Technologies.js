import React from 'react';

const Technologies = ({technologies}) => {
  const techList = technologies.map((tech) => {
    return tech;
  });

 return (
   <div style={{ color: 'white'}}>
    {techList}
   </div>
 )
}

export default Technologies;
