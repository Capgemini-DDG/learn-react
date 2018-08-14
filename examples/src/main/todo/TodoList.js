import React from 'react'
import TodoListItem from './TodoListItem';

const TodoList = ({items, handleDelete}) => (
  <ul>
    {items.map(item => (
      <TodoListItem
        key={item.id} 
        item={item} 
        handleDelete={handleDelete}
      />
    ))}
  </ul>
);

export default TodoList;