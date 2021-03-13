import React, { useState, useEffect } from "react";

const Experiment = ({ messages, first }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const arrayContainer = [];

  first.map((letter, i) => {
    arrayContainer.push([]);
    arrayContainer[i].push(messages.concat(first[i]));
      return(<div>{arrayContainer[i]}</div>)
  })

  useEffect(() => {
    let timeout;

    if (messageIndex < arrayContainer.length - 1) {
      timeout = setTimeout(() => {
        setMessageIndex(messageIndex + 1)
      }, 75)
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [messageIndex, messages]);

  console.log(arrayContainer)

  const fullList = arrayContainer.map((letterArr, j) => {
    return (
        <div>
          {arrayContainer[messageIndex]}
        </div>
      )
  })

  return (
    <div>{fullList}</div>
  )
};

export default Experiment;
