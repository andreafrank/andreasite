import React from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import NasaImage from './project_files/NasaImage';
import Weather from './project_files/Weather';
import './ProjectItem.css';

// TODO: onProjectSelect: either mouseover a small blurb or click for a project pop up
const ProjectItem = ({ project }) => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/nasa">Nasa Image Search</Link></li>
            <li><Link to="/weather">Weather</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/nasa">
            <NasaImage />
          </Route>
          <Route path="/weather">
            <Weather />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default ProjectItem;
