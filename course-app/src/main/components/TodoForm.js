import React from 'react';

const TodoForm = ({todoText, handleChange, handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    <input value={todoText} onChange={handleChange} />
    <button>Add Todo</button>
  </form>
);

export default TodoForm;