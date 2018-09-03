import React from 'react';

const RadioOption = props => (
  <label>
    <input 
      type='radio' 
      name={props.name} 
      value={props.value}
      checked={props.checked}
      onChange={props.onChange}  
    />
    {props.text}
  </label>
);

export default RadioOption;