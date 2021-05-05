import React, { useState } from 'react';
import About from './About.js';
import ProjectList from './projects/ProjectList';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
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

const projectList = ['Nasa', 'Weather']

const Navbar = () => {
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);
  const [projects, setProjects] = useState(false);

  return (
    <div className="sidenav text-pink-500">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/about">
                <div
                  className="icon_style"
                  onMouseEnter = {() => setAbout(true)}
                  onMouseLeave = {() => setAbout(false)}>
                    <WiStars />
                </div>
                {about && (
                  <div className="">about</div>
                )}
              </Link>
            </li>

            <div
              className="icon_style"
              onMouseEnter = {() => setContact(true)}
              onMouseLeave = {() => setContact(false)}>
                <WiMeteor />
            </div>
            {contact && (
              <div>contact</div>
            )}

            <li>
              <Link to="/projects">
                <div
                  className="icon_style"
                  onMouseEnter = {() => setProjects(true)}
                  onMouseLeave = {() => setProjects(false)}>
                    <WiDust />
                </div>
                {projects && (
                  <div className="">projects</div>
                )}
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <ProjectList projects={projectList} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

  )
}

export default Navbar;
