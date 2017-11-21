import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './components/home/home';
import Fixtires from './components/fixtures/fixtures';
import Competition from './components/competition/competition';
import App from './components/App';

export default (
  <Route path={process.env.PUBLIC_URL + '/'} component={App}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/fixtures" component={Fixtires}></Route>
    <Route path="/competition" component={Competition}></Route>
  </Route>
)