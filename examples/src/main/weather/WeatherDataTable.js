import React from 'react';

const WeatherDataTable = ({data}) => {

  const convertEpochTime = epochTime => {
    let newDate = new Date(0);
    newDate.setSeconds(epochTime);
    
    let minutes = newDate.getMinutes() < 10 ? `0${newDate.getMinutes()}` : newDate.getMinutes();
    let hours = newDate.getHours() < 10 ? `0${newDate.getHours()}` : newDate.getHours();

    return `${hours}:${minutes}`;
  }

  const convertWindSpeed = () => {
    let windSpeed = data.wind.speed * 2.24;
    return windSpeed.toFixed(2);
  }

  return (
    <table>
      <tbody>
        <tr>
          <td>Humidity</td>
          <td>{data.main.humidity}%</td>
        </tr>
        <tr>
          <td>Wind Speed</td>
          <td>{convertWindSpeed()} mph</td>
        </tr>
        <tr>
          <td>Sunrise</td>
          <td>{convertEpochTime(data.sys.sunrise)}</td>
        </tr>
        <tr>
          <td>Sunset</td>
          <td>{convertEpochTime(data.sys.sunset)}</td>
        </tr>
      </tbody>
    </table>
  )
};

export default WeatherDataTable;