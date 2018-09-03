import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import SectionContainer from './containers/SectionContainer';
import './styles/styles.css';

const App = () => (
  <Switch>
    <Route exact path ='/' component={HomeContainer}/>
    <Route path ='/survey' component={SectionContainer}/>    
  </Switch>
);

export default App;
