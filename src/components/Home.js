import React, { useState, useEffect, useRef } from "react";
import Technologies from './Technologies';
import './Home.css';

// TODO: Delay css isn't working

const technologyList = ['ReactJS', 'Javascript', 'Ruby', 'Rails', 'ThreeJS/react-three-fiber', 'figma'];

const Home = ({ characters, name }) => {
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
      }, 50);
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
    (charIndex ? characters[charIndex] : '');

  return (
    <>
      <div className="mt-36">
        <div className="glow font text-center mb-12">
          <div>{fullList}</div>
        </div>
      </div>
        <div className="secondary_text delay font text-center ml-36 z-10">front-end developer &</div>
        <div className="rectangle delay relative m-auto -mt-4 z-0" />
        <div className="tertiary_text delay font mb-12 text-center ml-48">creative technologist</div>
        <div className="text-center px-12"><Technologies technologies={technologyList} /></div>
    </>
    )
};

export default Home;
