import React from 'react';

const Personal = () => {
  return (
    <div className="secondary-font p-8 lg:w-3/4 w-full lg:pr-3 " style={{ color: 'white' }}>
      <h2 className="font-bold text-xl">This website</h2>
      <br />
      <div>
        <a
          className="hover:text-yellow-300"
          href="https://github.com/andreafrank/andreasite"
          target="_blank"
        >
            Github source code
        </a>
        <br />
        <br />
        My personal website, hosted on Netlify. This is really just the bones; I'm planning on smoother transitions, amongst other fun visual changes. Fully responsive design coming in the next iteration.
        <br />
        <br />
        ReactJS
        <br />
        VanillaJS
        <br />
        Custom CSS
        <br />
        TailwindCSS styling
        <br />
        ThreeJS firefly field in process
      </div>
    </div>
  )
}

export default Personal;
