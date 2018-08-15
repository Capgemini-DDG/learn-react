import React from 'react';
import WeatherDataTable from './WeatherDataTable';

const WeatherData = ({data}) => {

  const convertTemperature = () => {
    let kelvinToCelcius = data.main.temp - 273.15;
    return Math.floor(kelvinToCelcius * 100) / 100;
  }

  return (
    <div className='weather-data'>
      <p>Weather data for {data.name}</p>
      <p>Temperature: {convertTemperature()} &deg;C</p> 
      <p>Outlook: {data.weather[0].description}</p>
      
      <WeatherDataTable data={data}/>
    </div>
  )
};

export default WeatherData;