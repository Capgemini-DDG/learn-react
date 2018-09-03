import React, {Component} from 'react';
import Title from '../Title';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class TodoContainer extends Component {

  state = {
    items: [],
    text: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let textToAdd = this.state.text;

    if(!textToAdd.length) {
      return;
    }

    const newTodo = {
      text: textToAdd,
      id: Date.now()
    };

    this.setState(prevState => ({
      items: prevState.items.concat(newTodo),
      text: ''   
    }));
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value      
    })
  }

  render() {
    return (
      <div className='main-container'>
        <Title titleText='Todo Example'/>
        <p>In this example were going to build up a stateful todo list application.</p>
        <TodoList items={this.state.items}/>
        <TodoForm 
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          text={this.state.text}
        />
      </div>
    );
  }
}

export default TodoContainer;