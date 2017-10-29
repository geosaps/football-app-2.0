import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import './App.css';
import routes from './routes';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('root')
)