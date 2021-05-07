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


// TODO: parse the ul out into multiple conceptual divs. This is too long.
// where does that li terminate??

  return (
    <Router>
      <nav>
          <ul className="flex items-center justify-between flex-wrap w-full sm:w-24 h-24 sm:h-full top-0 bg-black border-b-2 sm:border-b-0 sm:border-l-2 sm:fixed border-pink-600 sm:right-0 z-20 p-6 mb-2">
            <div className="flex items-center flex-shrink-0">
              <li>
                  <Link to="/">
                    <div
                      className="icon_style text-6xl text-pink-500 pt-5"
                      onMouseEnter = {() => setHome(true)}
                      onMouseLeave = {() => setHome(false)}>
                        <WiDirectionLeft />
                    </div>
                    {home && (<div className="hover_text">home</div>)}
                  </Link>
              </li>

              <li>
                <Link to="/about">
                  <div
                    className="icon_style text-6xl text-pink-500 m-auto"
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
                    className="icon_style text-6xl text-pink-500 m-auto"
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
                    className="icon_style text-6xl text-pink-500 m-auto col-start-4"
                    onMouseEnter = {() => setProjects(true)}
                    onMouseLeave = {() => setProjects(false)}>
                      <WiDust />
                  </div>
                  {projects && (<div className="hover_text">projects</div>)}
                </Link>
              </li>
</div>
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

      </nav>
    </Router>
  );
}

export default Navbar;
