import React from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import NasaImage from './project_files/NasaImage';
import Weather from './project_files/Weather';
import Bus from './project_files/Bus';
import Community from './project_files/Community';
import Personal from './project_files/Personal';
import './ProjectItem.css';

// TODO: Refactor. This is too repetitive. Split into programming and UX sections.
// responsive small screen

const ProjectItem = () => {
  return (
    <div className="flex flex-col-3" >
      <BrowserRouter>
        <nav>
          <ul>

          <li className="ontainer my-4 px-8">
              <div className="bg-red-400 hover:bg-red-300 rounded-xl p-6">
                <Link to="/weather">
                  <div className="text-white 2xl font-bold mb-2">
                    Weather from PROJECT ITEM
                  </div>
                  <div className="text-gray-800 leading-relaxed">
                    Weather teaser
                  </div>
                </Link>
              </div>
          </li>

            <li className="container my-4 px-8">
                <div className="bg-red-400 hover:bg-red-300 rounded-xl p-6">
                  <Link to="/nasa">
                    <div className="text-white 2xl font-bold mb-2">
                      Nasa Image Search from PROJECT ITEM
                    </div>
                    <div className="text-gray-800 leading-relaxed">
                      Here is some teaser text about NASA image search.
                    </div>
                  </Link>
                </div>
            </li>

            <li className="container my-4 px-8">
                <div className="bg-red-400 hover:bg-red-300 rounded-xl p-6">
                  <Link to="/personal">
                    <div className="text-white 2xl font-bold mb-2">
                      Personal
                    </div>
                    <div className="text-gray-800 leading-relaxed">
                      More about this website you're viewing. Meta!
                    </div>
                  </Link>
                </div>
            </li>

            <li className="container my-4 px-8">
                <div className="bg-red-400 hover:bg-red-300 rounded-xl p-6">
                  <Link to="/bus">
                    <div className="text-white 2xl font-bold mb-2">
                      Bus thing
                    </div>
                    <div className="text-gray-800 leading-relaxed">
                      More bus thing
                    </div>
                  </Link>
                </div>
            </li>

            <li className="container my-4 px-8">
                <div className="bg-red-400 hover:bg-red-300 rounded-xl p-6">
                  <Link to="/community">
                    <div className="text-white 2xl font-bold mb-2">
                      describe this community
                    </div>
                    <div className="text-gray-800 leading-relaxed">
                      Weather teaser
                    </div>
                  </Link>
              </div>
            </li>

          </ul>
        </nav>

        <Switch>
          <Route path="/nasa">
            <NasaImage />
          </Route>
          <Route path="/weather">
            <Weather />
          </Route>
          <Route path="/personal">
            <Personal />
          </Route>
          <Route path="/community">
            <Community />
          </Route>
          <Route path="/bus">
            <Bus />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default ProjectItem;
