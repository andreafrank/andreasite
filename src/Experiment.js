import React, { useState, useEffect } from "react";

const Experiment = ({ messages }) => {
 // Default to the first message passed
    const [messageIndex, setMessageIndex] = React.useState(0);

    useEffect(() => {
   // Move on to the next message every `n` milliseconds
   let timeout;
   if (messageIndex < messages.length - 1) {
     timeout = setTimeout(() => setMessageIndex(messageIndex + 1), 75);
   }

   return () => {
     clearTimeout(timeout);
   };
 }, [messages, messageIndex]);

 return <div>{messages[messageIndex]}</div>;
};

export default Experiment;
