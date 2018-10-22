import React from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherResultsTable from './components/WeatherResultsTable';
import { getWeatherByCityName } from './ApiUtils';

class App extends React.Component {

  state = {
    searchText: '',
    data: {}
  }

  handleChange = event => {
    this.setState({
      searchText: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    
    const searchText = this.state.searchText;
    getWeatherByCityName(searchText, result => {
      this.setState({ data: result })
    })
  }

  render() {
    return (    
      <div>
        <WeatherForm 
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <WeatherResultsTable 
          data={this.state.data}
        />
      </div>
    )
  }
}

export default App;