import React, { useState, useEffect, useRef } from "react";

const Test = ({ characters, name }) => {
  const charTimerRef = useRef(null);
  const [charIndex, setCharIndex] = useState(null);
  const [arrayIndex, setArrayIndex] = useState(0);

  useEffect(() => {
    let timerId;
    const cleanupTimerRef = () => {
      setCharIndex(null);
      clearInterval(charTimerRef.current);
      charTimerRef.current = null;
    };

  if (!charTimerRef.current) {
    setCharIndex(0);
    charTimerRef.current = setInterval(() => {
      setCharIndex((i) => i + 1);
    }, 75);
  }

  if (arrayIndex < name.length + 1) {
    timerId = setTimeout(() => {
      setArrayIndex((i) => i + 1);
    }, 250);
  } else {
    cleanupTimerRef();
  }

  return () => {
    clearTimeout(timerId);
    cleanupTimerRef();
  };
}, [arrayIndex, name]);

const fullList =
  JSON.stringify(name.join('')).substring(1, arrayIndex) +
  (charIndex ? characters[charIndex] : "");

  console.log(JSON.stringify(name.join('')).substring(1, arrayIndex));

return <div>{fullList}</div>;
};

export default Test;
