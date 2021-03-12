import React from 'react';
import Experiment from './Experiment';
import './App.css';

function App() {
    const first = 'andrez'.split('');
    // const last = 'frank'.split('');
    const funChars = [
      '⏀', '⎷', '⌮', '⋙', '⊠', '⎳', '⍼',
     '⍣', '╈', '╳', '☀', '★', '☍', '♥', '▅'];
     // '↹', 'ↂ', 'Ҵ', 'ζ', '▞', '⎲', '⌬', '	⎸'


  return (
    <div className="glow" style={{ minHeight: '100vh'}}>
      <span style={{ letterSpacing: 12}}><Experiment messages={funChars} first={first} /></span>
    </div>
  );
}

export default App;
