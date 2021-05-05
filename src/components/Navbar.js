import React, { useState } from 'react';
import About from './About.js';
import Contact from './Contact.js';
import Home from './Home.js';
import ProjectList from './projects/ProjectList';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { WiStars, WiMeteor, WiDust, WiDirectionLeft } from 'react-icons/wi';
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
// ADD HOME

const projectList = ['one']
const name = 'andrea frank'.split('');
const funChars = ['⏀', '⍣', '↹', '⋙', '⊠', 'Ҵ'];
   //  '⎳', '⎷', '⍼','╈', '╳', '☀', '★', '☍', 'ↂ', '▅',
   // '♥', '⌮', 'Ҵ', 'ζ', '▞', '⎲', '⌬', '	⎸'];


const routes = [
  {
    path: "/",
    exact: true,
    main: () => <div><span><Home name={name} characters={funChars}/></span></div>
  },

  {
    path: "/about",
    main: () => <div className="text-pink-500"><About /></div>
  },

  {
    path: "/contact",
    main: () => <div className="text-pink-500"><Contact /></div>
  },
  {
    path: "/projects",
    main: () => <div className="text-pink-500"><ProjectList projects={projectList} /></div>
  }
]

const Navbar = () => {
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);
  const [projects, setProjects] = useState(false);

  return(
    <Router>
      <div className="text-pink-500" style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "40%",
          }}
        >
          <ul className="sidenav">
            <li>

            <li>
              <Link to="/">
                <div
                  className="icon_style"
                  onMouseEnter = {() => setHome(true)}
                  onMouseLeave = {() => setHome(false)}>
                    <WiDirectionLeft />
                </div>
                {home && (<div className="">home</div>)}
              </Link>
            </li>

              <Link to="/about">
                <div
                  className="icon_style"
                  onMouseEnter = {() => setAbout(true)}
                  onMouseLeave = {() => setAbout(false)}>
                    <WiStars />
                </div>
                {about && (<div className="">about</div>)}
              </Link>
            </li>

            <li>
              <Link to="/contact">
                <div
                  className="icon_style"
                  onMouseEnter = {() => setContact(true)}
                  onMouseLeave = {() => setContact(false)}>
                    <WiMeteor />
                </div>
                {contact && (<div className="">contact</div>)}
              </Link>
            </li>

            <li>
              <Link to="/projects">
                <div
                  className="icon_style"
                  onMouseEnter = {() => setProjects(true)}
                  onMouseLeave = {() => setProjects(false)}>
                    <WiDust />
                </div>
                {projects && (<div className="">projects</div>)}
              </Link>
            </li>
          </ul>

          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default Navbar;
