import React, {Component} from 'react';
import Title from '../Title';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class TodoContainer extends Component {
  state = {
    items: [],
    itemCounter: 0,
    text: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let enteredText = this.state.text;

    if(!enteredText.length) {
      return;
    }

    const newTodo = {
      text: enteredText,
      id: this.state.itemCounter
    };

    this.setState(prevState => ({
      items: prevState.items.concat(newTodo),
      itemCounter: ++prevState.itemCounter,
      text: ''   
    }));
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleDelete = itemId => {
    this.setState(prevState => {
      return {
        items: prevState.items.filter(item => item.id !== itemId),
        itemCounter: --prevState.itemCounter
      }
    });
  };

  render() {
    return (
      <div className='main-container'>
        <Title titleText='Todo Example'/>
        <p>
          In this example were going to build up a stateful todo list application.          
        </p>
        <TodoList 
          items={this.state.items}
          handleDelete={this.handleDelete}  
        />
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