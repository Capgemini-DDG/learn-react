import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({todoList}) => {

  const todoListItems = todoList.map(item => {
    return <TodoListItem key={item.id} todoItem={item.todoItem}/>
  })

  return (
    <ul>
      {todoListItems}
    </ul>
  )
};

export default TodoList;