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

  const technologies = ['ReactJS', 'Javascript', 'Ruby', 'Rails', 'ThreeJS/react-three-fiber', 'figma']

// TODO: set timer for secondary and tertiary text

  return (
    <div>
      <div className="glow">
        I'm
        <span style={{ letterSpacing: 12 }}><Test name={name} characters={funChars}/></span>
      </div>
      <div className="secondary_text">front-end developer &</div>
      <div className="rectangle" />
      <div className="tertiary_text">creative technologist</div>
      <div><Technologies technologies={technologies} /></div>
      <div><Projects /></div>
      <div><Navbar /></div>
    </div>
  );
}

export default App;
