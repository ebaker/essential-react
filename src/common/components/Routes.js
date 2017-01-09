import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
// import LoginPage from '../../pages/login/page';
import HomePage from '../../pages/home/page';
import AboutPage from '../../pages/about/page';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="home" component={HomePage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
