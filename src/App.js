import React from 'react';
import * as THREE from 'three';
import { Canvas } from 'react-three-fiber';
import Test from './components/Test'
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Fireflies from './components/Fireflies';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const name = 'andrea frank'.split('');
  const funChars = ['⏀', '⍣', '↹', '⋙', '⊠', 'Ҵ'];
     //  '⎳', '⎷', '⍼','╈', '╳', '☀', '★', '☍', 'ↂ', '▅',
     // '♥', '⌮', 'Ҵ', 'ζ', '▞', '⎲', '⌬', '	⎸'];

  const technologyList = ['ReactJS', 'Javascript', 'Ruby', 'Rails', 'ThreeJS/react-three-fiber', 'figma'];
  const projectList = ['Weather', 'Nasa Images']

// TODO:
// projects
// two columns (see css)
// rectangle over text

  return (
    <div>
      <div className="glow">
        I'm
        <span style={{ letterSpacing: 12 }}><Test name={name} characters={funChars}/></span>
      </div>
      <div className="secondary_text delay">front-end developer &</div>
      <div className="rectangle delay" />
      <div className="tertiary_text delay">creative technologist</div>
      <div><Technologies technologies={technologyList} /></div>
      <div><Projects projects={projectList}/></div>
      <div><Navbar /></div>
    </div>
  );
}

export default App;
