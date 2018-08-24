import React, { Component } from 'react'
import Title from '../Title';
import { getWeatherByCityName } from './ApiUtils';
import WeatherSearchForm from './WeatherSearchForm';
import WeatherData from './WeatherData';

class WeatherContainer extends Component {

  state = {
    cityName: '',
    weatherData: null,
    searching: false
  }


  searchByCityName= event => {
    event.preventDefault();

    const cityName = this.state.cityName;

    if(cityName) {
      
      this.setState({
        searching: true
      })

      getWeatherByCityName(cityName, response => {
        this.setState({
          weatherData: response,
          searching: false
        })
      })

      
    }
  }

  handleChange = event => {
    this.setState({
      cityName: event.target.value
    })
  }

  render() {
    return (
      <div className='main-container'>
        <Title titleText='Weather App'/>
        <p>
          This example is showing asynchronous data fetching in React.
        </p>
        {!this.state.searching
          ? 
          <div>
            <WeatherSearchForm 
              cityName={this.state.cityName}
              handleChange={this.handleChange}
              handleSubmit={this.searchByCityName}
            />
          </div>
          :
          <p>Searching...</p>
        }
        {this.state.weatherData &&
          <WeatherData data={this.state.weatherData}/>
        }
      </div>
    );
  }
}

export default WeatherContainer;