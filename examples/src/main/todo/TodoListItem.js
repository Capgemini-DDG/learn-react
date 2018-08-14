import React from 'react'

const TodoListItem = ({item, handleDelete}) => (
  <li>
    {item.text}
    <button onClick={() => handleDelete(item.id)}>Delete Todo</button>
  </li>
);

export default TodoListItem;