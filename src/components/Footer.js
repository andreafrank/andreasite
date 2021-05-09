import React from 'react';
import { AiOutlineGithub, AiFillLinkedin, AiFillTwitterCircle, AiTwotoneMail } from 'react-icons/ai'


const Footer = () => {
  return (
    <footer className="fixed h-16 bg-black w-full bottom-0 flex items-center justify-center border-t-2 border-pink-600 text-3xl text-pink-500">
      <div className="p-12 lg:p-24 justify-center hover:text-pink-300">
        <a
          href="https://github.com/andreafrank/"
          target="_blank"
          rel="noreferrer"
        >
            <AiOutlineGithub />
        </a>
      </div>
      <div className="p-12 lg:p-24 hover:text-pink-300">
        <a
          href="https://www.linkedin.com/in/andrea-frank/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </div>
      <div className="p-12 lg:p-24 hover:text-pink-300">
        <a
          href="https://twitter.com/andreajfrank"
          target="_blank"
          rel="noreferrer"
        >
            <AiFillTwitterCircle />
        </a>
        </div>
      <div className="hidden">
          <AiTwotoneMail />
      </div>
    </footer>
  )
}

export default Footer;
