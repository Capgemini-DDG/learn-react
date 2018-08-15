import React from 'react';

const WeatherSearchForm = props => {

  const {cityName, handleChange, handleSubmit} = props;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='city-name'>City Name</label><br/>
      <input 
        id='city-name'
        onChange={handleChange}
        value={cityName}
      />
      <button>Search!</button>
    </form>
  )
}

export default WeatherSearchForm;