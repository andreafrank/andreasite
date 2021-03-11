import React from 'react';
import './App.css';

function App() {
  const spookyName = () => {
    const first = 'andrea'.split('');
    const last = 'frank'.split('');
    const funChars = [
      '⏀', '⎷', '⌮', '⋙', '⊠', '⎳', '⍼',
     '⍣', '╈', '╳', '☀', '★', '☍', '♥', '▅',
     '↹', 'ↂ', 'Ҵ', 'ζ', '▞', '⎲', '	⎸'
   ];

  const output = document.querySelector("#output");
  const display = s => output.innerText = s;

   const loopy = funChars.forEach((name, i) => {
     setTimeout(() => {
       display(name);
     }, i * 1000);
   });

    return (
      <div>
        {loopy}
      </div>
    )
  };


  return (
    <div className="glow" style={{ minHeight: '100vh'}}>
      <span style={{ letterSpacing: 12}}>{spookyName()}</span>
    </div>
  );
}

export default App;
