import React from 'react';

const WeatherForm = ({handleChange, handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    <input onChange={handleChange} />
    <button type='submit'>Search</button>
  </form>
);

export default WeatherForm;