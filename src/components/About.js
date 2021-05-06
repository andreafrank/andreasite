import React from 'react';

const About = () => {
  return (
    <div className="container p-10" style={{ color: 'white' }}>
      <div className="font-bold text-2xl">Nice to meet you! I'm Andrea.</div>
      <br />
      I'm a creative front-end developer and looking to shift careers into tech. I’m looking forward to refining my skills and deepening my understanding of what makes successful, aesthetic, and meaningful products. I’m consistent, engaged, and naturally curious.
      <br />
      <br />
      A few years ago, I embarked on a trajectory that would allow me to combine two of my interests: tech and design. I attended Dev Bootcamp Chicago (DBC), a software engineering intensive, where I learned full-stack web development. Shortly after, an opportunity opened for me to work at the School of the Art Institute of Chicago to become part of a team dedicated to building sustainable community, academic, and corporate partnerships with the aim of making art and design innovations useful to both local communities and international businesses.
      <br />
      <br />
      Though I recently completed an MPS in UX Design from Maryland Institute College of Art, my interest and intention lie in front-end development. I use what I've learned in UX to inform my process, and if you need a developer who can easily interface with your design team, look no further. 
      <br />
      <br />
      As you can likely tell, this is still a very drafty work in progress. Contact me on {' '}
      <a
        href="https://www.linkedin.com/in/andrea-frank/"
        className="text-yellow-500"
        target="_blank"
        rel="noopener noreferrer"
      >
          LinkedIn
      </a>
        {' '} while I'm building out my contact page.
       <br />
       <br />
       I'm values-driven, and care deeply about racial and gender equity, data privacy, and sustainability. Outside of development, I like to sew and pattern draft, garden, cook, and I'm really looking forward to traveling again.

    </div>
  )
}

export default About;
