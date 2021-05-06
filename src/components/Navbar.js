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
// Add state for current page: https://www.youtube.com/watch?v=BHC-ll9PFe0
// Ease in display on all navbar elements

const projectList = ['one']
const name = 'andrea frank'.split('');
const funChars = ['⏀', '⍣', '↹', '⋙', '⊠', 'Ҵ'];
   //  '⎳', '⎷', '⍼','╈', '╳', '☀', '★', '☍', 'ↂ', '▅',
   // '♥', '⌮', 'Ҵ', 'ζ', '▞', '⎲', '⌬', '	⎸'];


const routes = [
  {
    path: "/",
    exact: true,
    main: () => <div className="unica"><span><Home name={name} characters={funChars}/></span></div>
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

  return (
    <Router>
      <div>
          <ul className="sidenav z-20">
            <li>

            <li>
              <div className="pad">
                <Link to="/">
                  <div
                    className="icon_style text-pink-500"
                    onMouseEnter = {() => setHome(true)}
                    onMouseLeave = {() => setHome(false)}>
                      <WiDirectionLeft />
                  </div>
                  {home && (<div className="hover_text">home</div>)}
                </Link>
              </div>
            </li>

              <Link to="/about">
                <div
                  className="icon_style text-pink-500 pad"
                  onMouseEnter = {() => setAbout(true)}
                  onMouseLeave = {() => setAbout(false)}>
                    <WiStars />
                </div>
                {about && (<div className="hover_text">about</div>)}
              </Link>
            </li>

            <li>
              <Link to="/contact">
                <div
                  className="icon_style text-pink-500 pad"
                  onMouseEnter = {() => setContact(true)}
                  onMouseLeave = {() => setContact(false)}>
                    <WiMeteor />
                </div>
                {contact && (<div className="hover_text">contact</div>)}
              </Link>
            </li>

            <li>
              <Link to="/projects">
                <div
                  className="icon_style text-pink-500"
                  onMouseEnter = {() => setProjects(true)}
                  onMouseLeave = {() => setProjects(false)}>
                    <WiDust />
                </div>
                {projects && (<div className="hover_text">projects</div>)}
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
    </Router>
  );
}

export default Navbar;
