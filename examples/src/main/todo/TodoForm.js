import React from 'react'

const TodoForm = props => {

  const {handleSubmit, handleChange, text} = props;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='new-todo'>
        What needs to be done?
      </label><br/>
      <input 
        id='new-todo'
        onChange={handleChange}
        value={text}  
      /><br/>
      <button>Add Todo</button>
    </form>
  );
}

export default TodoForm;