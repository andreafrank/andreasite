import React, { useState } from 'react';
import { WiStars } from 'react-icons/wi';
import { WiMeteor } from "react-icons/wi";
import { WiDust } from 'react-icons/wi';
import './Navbar.css';

// TODO:
// contact
//    twitter
//    linkedin
//    email
// about
//    cv
//    blurb
// projects

const Navbar = () => {
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);
  const [projects, setProjects] = useState(false);

  return (
    <div className="sidenav text-pink-500">
      <div
        className="icon_style"
        onMouseEnter = {() => setAbout(true)}
        onMouseLeave={() => setAbout(false)}>
          <WiStars />
      </div>
      {about && (
        <div>about</div>
      )}

      <div
        className="icon_style"
        onMouseEnter = {() => setContact(true)}
        onMouseLeave={() => setContact(false)}>
          <WiMeteor />
      </div>
      {contact && (
        <div>contact</div>
      )}

      <div
        className="icon_style"
        onMouseEnter = {() => setProjects(true)}
        onMouseLeave={() => setProjects(false)}>
          <WiDust />
      </div>
      {projects && (
        <div>projects</div>
      )}

    </div>

  )
}

export default Navbar;
