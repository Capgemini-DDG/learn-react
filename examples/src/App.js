import React  from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './main/Home';
import './App.css';
import TodoContainer from './main/todo/TodoContainer';

const App = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/todo' component={TodoContainer}/>
  </Switch>
)

export default App;
