import React, { useState, useEffect } from "react";

const DisplayName = ({ messages, first }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  let arrayContainer = [];

  first.map((letter, i) => {
    arrayContainer.push([]);
    arrayContainer[i].push(messages.concat(first[i]));
    return arrayContainer;
  });

  const fullList = arrayContainer.map((letterArr, j) => {
    return letterArr.map((char, k) => {
      console.log(char[k])
      return (
          <div key={j}>
            {letterArr[k][messageIndex]}
          </div>
      )
    })
  });

  useEffect(() => {
    let timeout;

    if (messageIndex < messages.length) {
      timeout = setTimeout(() => {
        setMessageIndex(messageIndex + 1)
      }, 75)
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [messageIndex, messages, arrayContainer.length]);

  return (
    <div>{fullList}</div>
  )
};

export default DisplayName;
