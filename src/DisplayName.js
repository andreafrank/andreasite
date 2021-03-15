import React, { useState, useEffect } from "react";

const DisplayName = ({ messages, first }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [secondMessageIndex, setSecondMessageIndex] = useState(0);
  let arrayContainer = [];

  first.map((letter, i) => {
    arrayContainer.push([]);
    arrayContainer[i].push(messages.concat(first[i]));
    return arrayContainer;
  });

  const fullList = arrayContainer.map((letterArr, j) => {
    // return (
    //   <div key={j}>
    //     {letterArr[secondMessageIndex]}
    //   </div>
    // )

    return letterArr.map((char, k) => {
      // console.log(arrayContainer[secondMessageIndex])
      return (
        <div key={j}>
          // {char[messageIndex]}
        </div>
      )
    })
  });

  useEffect(() => {
    let timer;
    let timer2;

    if (messageIndex < messages.length) {
      timer = setTimeout(() => {
        setMessageIndex(messageIndex + 1)
      }, 75)
    }

    if (secondMessageIndex < arrayContainer.length) {
      timer2 = setTimeout(() => {
        setSecondMessageIndex(secondMessageIndex + 1)
      }, 75)
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, [messageIndex, messages, secondMessageIndex, arrayContainer.length]);

  return (
    <div>{fullList}</div>
  )
};

export default DisplayName;
