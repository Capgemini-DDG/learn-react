import React, {Component} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {

  state = {
    todoItems: [],
    text: ''
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {    
    event.preventDefault();

    const todoText = this.state.text;

    if(!todoText) {
      return;
    }

    const newTodo = {
      todoItem: todoText,
      id: Date.now()
    }

    this.setState(prevState => ({            
      todoItems: prevState.todoItems.concat(newTodo),
      text: ''
    }))
  }

  render() {
    return (
      <div>
        <TodoForm 
          todoText={this.state.text}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TodoList todoList={this.state.todoItems}/>
      </div>
    )
  }
}

export default App;