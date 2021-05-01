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

// TODO: set timer for secondary and tertiary text

  return (
    <div>
      <div className="glow">
        I'm
        <span style={{ letterSpacing: 12}}><Test name={name} characters={funChars}/></span>
      </div>
      <div className="secondary_text">jr. front-end developer &</div>
      <div className="rectangle" />
      <div className="tertiary_text">creative technologist</div>
      <div className="sidenav" />
    </div>
  );
}

export default App;
