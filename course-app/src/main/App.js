import React from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherResultsTable from './components/WeatherResultsTable';
import { getWeatherByCityName } from './ApiUtils';

class App extends React.Component {

  state = {
    searchText: '',
    searching: false,
    data: null
  }

  handleChange = event => {
    this.setState({
      searchText: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    
    this.setState({
      searching: true
    })

    const searchText = this.state.searchText;
    getWeatherByCityName(searchText, result => {
      this.setState({ 
        data: result,
        searching: false
      })
    })
  }

  render() {
    return (    
      <div>
        {this.state.searching && <p>Searching...</p>}
        {!this.state.searching && 
          <WeatherForm 
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        }
        {!this.state.searching && this.state.data ? 
          <WeatherResultsTable 
            data={this.state.data}
          />
          :
          <p>Please do a search</p>
        }
      </div>
    )
  }
}

export default App;