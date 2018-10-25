import React from 'react';

const WeatherResultsTable = ({data}) => (

  <table>
    <thead>
      <tr>
        <th>Key</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Temperature</td>
        <td>{data.main.temp}</td>
      </tr>
    </tbody>
  </table>
);

export default WeatherResultsTable;