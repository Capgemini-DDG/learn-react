import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './main/App';
import registerServiceWorker from './registerServiceWorker';
import Layout from './main/layout/Layout';

ReactDOM.render(
  <Router>
    <Layout>
      <App />
    </Layout>
  </Router>, 
  document.getElementById('root')
);
registerServiceWorker();
