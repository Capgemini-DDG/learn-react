import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({todoList}) => {

  const todoListItems = todoList.map((item, index) => {
    return <TodoListItem key={index} todoItem={item}/>
  });

  return (
    <ul>
      {todoListItems}
    </ul>
  )
}

export default TodoList;