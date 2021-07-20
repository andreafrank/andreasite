import React from 'react';

const About = () => {
  return (
    <div className="container p-10" style={{ color: 'white' }}>
      <div className="font-bold text-2xl">Nice to meet you! I'm Andrea.</div>
      <br />
      I'm a creative developer and who recently transitioned into tech.
      I currently work as an Implementation Developer at NationBuilder. I’m looking forward to refining my skills
      and deepening my understanding of what makes successful, aesthetic, and meaningful products and experiences.
      I’m consistent, engaged, and naturally curious. In my free time, I'm currently following the algorithms section in 
        <a className="text-pink-500 hover:text-pink-300 hover:text-pink-300"
          href="https://teachyourselfcs.com/"
          target="_blank"
          rel="noreferrer"
        >
            Teach Yourself CS
        </a>,
      learning ReactJS more deeply, and just beginning to get my feet wet with ThreeJS and Unity.
      <br />
      <br />
      I'm values-driven, and care deeply about racial and gender equity, data privacy, and sustainability. Outside of development, I like acid techno, sewing and pattern drafting, gardening, cooking, and I'm really looking forward to traveling again.
    </div>
  )
}

export default About;
