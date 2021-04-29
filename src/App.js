import React from 'react';
import * as THREE from 'three';
import { Canvas } from 'react-three-fiber';
import Test from './Test'
import Fireflies from './Fireflies';
import './App.css';

function App() {
    const name = 'andrea frank'.split('');
    const funChars = ['⏀', '⍣', '↹', '⋙', '⊠', 'Ҵ'];
     //  '⎳', '⎷', '⍼','╈', '╳', '☀', '★', '☍', 'ↂ', '▅',
     // '♥', '⌮', 'Ҵ', 'ζ', '▞', '⎲', '⌬', '	⎸'];


  return (
    <div>
      <div className="glow">
        <span style={{ letterSpacing: 12}}>I'm <Test name={name} characters={funChars}/></span>
      </div>
      <div className="secondary_text">jr. front-end developer &</div>
      <div className="tertiary_text">creative technologist</div>
    </div>
  );
}

export default App;
