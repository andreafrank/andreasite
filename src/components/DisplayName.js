import React, { useState, useEffect } from "react";

const DisplayName = ({ characters, name }) => {
  const [charIndex, setCharIndex] = useState(0);
  const [arrayIndex, setArrayIndex] = useState(0);

  let arrayContainer = [];

  name.map((letter, i) => {
    arrayContainer.push([]);
    arrayContainer[i].push(characters.concat(name[i]));
    return arrayContainer;
  });

// I can't figure out how to attach arrayIndex here. I am
// also not using j currently, but kept it for now in case I need
// a key for the return statements.
  const fullList = arrayContainer.map((letterArr, j) => {
    return letterArr.map(char => {
        return (char[charIndex])
      })
  });

  useEffect(() => {
    let timer;
    // let secondTimer;

    if (charIndex < characters.length) {
      timer = setTimeout(() => {
        setCharIndex(charIndex + 1)
      }, 100)
    }

    // if (arrayIndex < first.length - 1) {
    //   secondTimer = setTimeout(() => {
    //     setArrayIndex(arrayIndex + 1)
    //   }, 75)
    // }

    return () => {
      clearTimeout(timer);
      // clearTimeout(secondTimer);
    };
  }, [charIndex, characters, arrayIndex, name]);

  return (
    <div>{fullList}</div>
  )
};

export default DisplayName;
