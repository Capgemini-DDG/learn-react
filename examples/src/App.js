import React  from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './main/Home';
import TodoContainer from './main/todo/TodoContainer';
import WeatherContainer from './main/weather/WeatherContainer';
import WorldCoinContainer from './main/worldcoin/WorldCoinContainer';
import './App.css';

const App = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/todo' component={TodoContainer}/>
    <Route path='/weather' component={WeatherContainer}/>
    <Route path='/worldcoin' component={WorldCoinContainer}/>
  </Switch>
)

export default App;
