import React, {useState} from "react";

const Mapping = ({ first, spicyArray }) => {
  const arrayContainer = [];

  const loopy = first.map((letter, i) => {
    arrayContainer.push(new Array);
    arrayContainer[i].push(first[i]);
    arrayContainer[i].unshift(spicyArray);

    return(<div>{arrayContainer[0]}</div>)

  })
  
  return (
    <div>
    {loopy}
    </div>
  )
}

export default Mapping;
