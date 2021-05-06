import React from 'react';


const NasaImage = () => {
  return (
    <div className="secondary-font p-8 lg:w-3/4 w-full lg:pr-3" style={{ color: 'white' }}>
      <h2 className="font-bold text-xl">Nasa Image Search</h2>
      <br />
      <div>
        <a
          className="hover:text-yellow-300"
          href="https://github.com/andreafrank/nasa-photos"
          target="_blank"
          rel="noopener noreferrer"
        >
            Github source code
        </a>
        <br />
        <br />
        NASA Image API search. Interesting that it works without an API key, but it does not with an API key. A quick search revealed others have also had this problem, which is interesting. Future iterations will show a dynamic rather than a static grid.
        <br />
        <br />
        NASA Image and Video Library (Video search to come in future iterations.)
        <br />
        TailwindCSS styling
      </div>
      <img
        src={"/nasa1.png"}
        alt="example search for bobcat"
        className="p-8 pr-24"
      />
    </div>
  )
}

export default NasaImage;
