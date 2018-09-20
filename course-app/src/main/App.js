import React, { Component } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

class App extends Component {



  render() {
    return (
      <div>
        <Form/>
        <TodoList todoList={['Sample Todo']}/>
      </div>
    );
  }
}

export default App;