import React from 'react';
// import DisplayName from './DisplayName';
import Test from './Test'
import './App.css';

function App() {
    const first = 'andrea'.split('');
    const funChars = [
      '⏀', '⎷', '⌮', '⋙', '⊠', ];
      // '⎳', '⍼']'⍣', '╈', '╳', '☀', '★', '☍',  'ↂ','▅'];
     // '↹', '♥', 'Ҵ', 'ζ', '▞', '⎲', '⌬', '	⎸'


  return (
    <div className="glow" style={{ minHeight: '100vh'}}>
      <span style={{ letterSpacing: 12}} style={{display: 'inline-block'}}><Test first={first} characters={funChars}/></span>
    </div>
  );
}

export default App;
