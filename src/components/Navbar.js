import React, { useState } from 'react';
import About from './About.js';
import Home from './Home.js';
import ProjectList from './projects/ProjectList';
import Footer from './Footer';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { WiStars, WiDust, WiDirectionLeft, WiMeteor } from 'react-icons/wi';
import './Navbar.css';

// TODO:
// Add state for current page: https://www.youtube.com/watch?v=BHC-ll9PFe0
// Ease in display on all navbar elements
// separation of concerns in tailwind elements

const projectList = ['one']
const name = 'andrea frank'.split('');
const funChars = ['⏀', '⍣', '↹', '⋙', '⊠', 'Ҵ'];
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
    path: "/projects",
    main: () => <div className="text-pink-500"><ProjectList projects={projectList} /></div>
  },
  {
    path: "/contact",
    main: () => <div className="text-pink-500"><Footer /></div>
  }
]

const Navbar = () => {
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [projects, setProjects] = useState(false);
  const [contact, setContact] = useState(false);
  const [active, setActive] = useState(false);

  const toggleContact = () => {
    setActive(!active);
  }

  return (
    <Router>
    {active && (<div><Footer /></div>)}
      <nav>
          <ul className="w-full lg:w-24 h-full lg:h-26 lg:h-full top-0 bg-black border-b-2 lg:border-b-0 lg:border-l-2 lg:fixed border-pink-600 lg:right-0 z-20 flex items-center justify-between flex-wrap">
            <li>
              <div>
                <Link to="/">
                  <div
                    className="icon_style text-pink-500 hover:text-pink-300"
                    onMouseEnter = {() => setHome(true)}
                    onMouseLeave = {() => setHome(false)}>
                      <WiDirectionLeft />
                  </div>
                  {home && (<div className="hover_text">main</div>)}
                </Link>
              </div>
            </li>

            <li>
              <Link to="/about">
                <div
                  className="icon_style text-pink-500 hover:text-pink-300"
                  onMouseEnter = {() => setAbout(true)}
                  onMouseLeave = {() => setAbout(false)}>
                    <WiStars />
                </div>
                {about && (<div className="hover_text">about</div>)}
              </Link>
            </li>

            <li>
              <Link to="/projects">
                <div
                  className="icon_style text-pink-500 hover:text-pink-300"
                  onMouseEnter = {() => setProjects(true)}
                  onMouseLeave = {() => setProjects(false)}>
                    <WiDust />
                </div>
                {projects && (<div className="hover_text">projects</div>)}
              </Link>
            </li>

            <li>
              <div
                className="icon_style text-pink-500 pad"
                onMouseEnter = {() => setContact(true)}
                onMouseLeave = {() => setContact(false)}
                onClick={toggleContact}
              >
                <WiMeteor />
              </div>
              {contact && (<div className="hover_text">contact</div>)}
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
      </nav>
    </Router>
  );
}

export default Navbar;
