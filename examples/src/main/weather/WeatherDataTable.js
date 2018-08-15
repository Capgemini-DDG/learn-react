import React from 'react';

const WeatherDataTable = ({data}) => {

  const convertEpochTime = epochTime => {
    let newDate = new Date(0);
    newDate.setSeconds(epochTime);
    
    return `${newDate.getHours()}:${newDate.getMinutes()}`;
  }

  const convertWindSpeed = () => {
    let windSpeed = data.wind.speed * 2.5;
    return Math.round(windSpeed);
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