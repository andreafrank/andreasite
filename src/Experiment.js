import React, { useState, useEffect } from "react";

const Experiment = ({ messages, first }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [lastChar, setLastChar] = useState('');

  useEffect(() => {
    let timeout;
      first.map((letter, index) => {
        setLastChar(letter[index])
        console.log(letter, index)

        if (messageIndex < messages.length - 1) {
          timeout = setTimeout(() => {
            setLastChar(first[index]);
            setMessageIndex(messageIndex + 1)
            messages.push(lastChar);
          }, 75)
        }
    })

    return () => {
      clearTimeout(timeout);
    };
  }, [messages, messageIndex]);

  return (
    <div>
    {messages[messageIndex]}
    </div>)
};

export default Experiment;
