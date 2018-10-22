import React from 'react';

const WeatherResultsTable = props => (
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
        <td>{props.data.main.temp}</td>
      </tr>
    </tbody>
  </table>
);

export default WeatherResultsTable;