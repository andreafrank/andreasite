import React from 'react';
// import * as THREE from 'three';
// import { Canvas } from 'react-three-fiber';
import Test from './components/Test'
import Technologies from './components/Technologies';
import ProjectList from './components/projects/ProjectList';
// import Fireflies from './components/Fireflies';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const name = 'andrea frank'.split('');
  const funChars = ['⏀', '⍣', '↹', '⋙', '⊠', 'Ҵ'];
     //  '⎳', '⎷', '⍼','╈', '╳', '☀', '★', '☍', 'ↂ', '▅',
     // '♥', '⌮', 'Ҵ', 'ζ', '▞', '⎲', '⌬', '	⎸'];

  const technologyList = ['ReactJS', 'Javascript', 'Ruby', 'Rails', 'ThreeJS/react-three-fiber', 'figma'];
  const projectList = ['weather']

  return (
    <div className="">
      <div className="glow font">
        <span style={{ letterSpacing: 12 }}><Test name={name} characters={funChars}/></span>
      </div>
      <div className="secondary_text delay font">front-end developer &</div>
      <div className="rectangle delay" />
      <div className="tertiary_text delay font">creative technologist</div>
      <div className="ml-8"><Technologies technologies={technologyList} /></div>
      <div className="secondary_font"><ProjectList projects={projectList}/></div>
      <div><Navbar /></div>
      <div className="text-pink-500">↕</div>
    </div>
  );
}

export default App;
