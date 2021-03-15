import React, { useState, useEffect, useRef } from "react";

const Test = ({ characters, first }) => {
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

  if (arrayIndex < first.length) {
    timerId = setTimeout(() => {
      setArrayIndex((i) => i + 1);
    }, 1000);
  } else {
    cleanupTimerRef();
  }

  return () => {
    clearTimeout(timerId);
    cleanupTimerRef();
  };
}, [arrayIndex, first]);

const fullList =
  first.toString().substring(0, arrayIndex) +
  (charIndex ? characters[charIndex % characters.length] : "");

return <div>{fullList}</div>;
};

export default Test;
