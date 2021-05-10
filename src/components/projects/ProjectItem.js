import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import NasaImage from './project_files/NasaImage';
import Weather from './project_files/Weather';
import Bus from './project_files/Bus';
import Community from './project_files/Community';
import Personal from './project_files/Personal';
import Instapost from './project_files/Instapost';

const ProjectItem = () => {

  const getWidth = () => {
    const { innerWidth: width } = window;
    return {
      width
    };
  }

  const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWidth());

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWidth());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  return windowDimensions;
  }

  const { width } = useWindowDimensions();

  return (
    <div className="lg:flex lg:flex-col-3" >
      <BrowserRouter>
        <nav>
          <ul>

          <li className="container my-4 px-8">
              <div className="bg-pink-600 hover:bg-pink-400 rounded-xl p-6">
                <Link to="/weather">
                  <div className="text-white 2xl font-bold mb-2">
                    Weather App
                  </div>
                  <div className="text-gray-800 leading-relaxed text-pink-100">
                    Uses async/await, axios, Promises
                  </div>
                </Link>
              </div>
              { (width < 1024) &&
                  <Route path="/weather">
                    <Weather />
                  </Route>
              }
          </li>

          <li className="container my-4 px-8">
            <div className="bg-pink-600 hover:bg-pink-400 rounded-xl p-6">
              <Link to="/personal">
                <div className="text-white 2xl font-bold mb-2">
                  Personal
                </div>
                <div className="text-gray-800 leading-relaxed text-pink-100">
                  More about this website you're viewing. Meta!
                </div>
              </Link>
            </div>
            { (width < 1024) &&
                <Route path="/personal">
                  <Personal />
                </Route>
            }
          </li>

            <li className="container my-4 px-8">
                <div className="bg-pink-600 hover:bg-pink-400 rounded-xl p-6">
                  <Link to="/nasa">
                    <div className="text-white 2xl font-bold mb-2">
                      Nasa Image Search
                    </div>
                    <div className="text-gray-800 leading-relaxed text-pink-100">
                      Spooky space pictures
                    </div>
                  </Link>
                </div>
                { (width < 1024) &&
                    <Route path="/nasa">
                      <NasaImage />
                    </Route>
                }
            </li>

            <li className="container my-4 px-8">
                <div className="bg-pink-600 hover:bg-pink-400 rounded-xl p-6">
                  <Link to="/instapost">
                    <div className="text-white 2xl font-bold mb-2">
                      Instapost
                    </div>
                    <div className="text-gray-800 leading-relaxed text-pink-100">
                      Rails, React, PostGres
                    </div>
                  </Link>
                </div>
                { (width < 1024) &&
                    <Route path="/instapost">
                      <Instapost />
                    </Route>
                }
            </li>

            <li className="container my-4 px-8">
                <div className="bg-pink-600 hover:bg-pink-400 rounded-xl p-6">
                  <Link to="/bus">
                    <div className="text-white 2xl font-bold mb-2">
                      UX Case Study: Bus Tracker
                    </div>
                    <div className="text-gray-800 leading-relaxed text-pink-100">
                      Because waiting for the bus in the cold is terrible
                    </div>
                  </Link>
                </div>
                { (width < 1024) &&
                    <Route path="/bus">
                      <Bus />
                    </Route>
                }
            </li>

            <li className="container my-4 px-8">
                <div className="bg-pink-600 hover:bg-pink-400 rounded-xl p-6">
                  <Link to="/community">
                    <div className="text-white 2xl font-bold mb-2">
                      UX Case Study: CommUNITY
                    </div>
                    <div className="text-gray-800 leading-relaxed text-pink-100">
                      Mutual-aid focused help in times of natural disaster
                    </div>
                  </Link>
              </div>
              { (width < 1024) &&
                  <Route path="/community">
                    <Community />
                  </Route>
              }
            </li>

          </ul>
        </nav>

        { (width >= 1024) &&
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
          <Route path="/instapost">
            <Instapost />
          </Route>
          <Route path="/community">
            <Community />
          </Route>
          <Route path="/bus">
            <Bus />
          </Route>
        </Switch>}
      </BrowserRouter>

    </div>
  )
}

export default ProjectItem;
