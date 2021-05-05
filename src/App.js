import React from 'react';
// import * as THREE from 'three';
// import { Canvas } from 'react-three-fiber';
import Test from './components/Test'
import Technologies from './components/Technologies';
// import Fireflies from './components/Fireflies';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const name = 'andrea frank'.split('');
  const funChars = ['⏀', '⍣', '↹', '⋙', '⊠', 'Ҵ'];
     //  '⎳', '⎷', '⍼','╈', '╳', '☀', '★', '☍', 'ↂ', '▅',
     // '♥', '⌮', 'Ҵ', 'ζ', '▞', '⎲', '⌬', '	⎸'];

  const technologyList = ['ReactJS', 'Javascript', 'Ruby', 'Rails', 'ThreeJS/react-three-fiber', 'figma'];

// TODO:
// NETLIFY
// bring fireflies in
// make project files (3 code, 2 ux)
// GET THE WIREFRAMES
// parse out project files - this doesn't need to be in sidebar
// write About
// write contact (keep in sidenav?)
// fix rectangle
// don't center name
// maybe animate the secondary text with tailwind

  return (
    <div className="container">
      <div className="mt-36">
        <div className="glow font text-center mb-12">
          <span style={{ letterSpacing: 12 }}><Test name={name} characters={funChars}/></span>
        </div>
        <div className="secondary_text delay font text-center ml-36 z-10">front-end developer &</div>
        <div className="rectangle delay relative m-auto -mt-4 z-0" />
        <div className="tertiary_text delay font mb-12 text-center ml-48">creative technologist</div>
        <div className="text-center px-12"><Technologies technologies={technologyList} /></div>
      </div>
      <Navbar />
    </div>
  );
}

export default App;
