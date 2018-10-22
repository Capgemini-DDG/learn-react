import { Stream } from "stream";

const API_KEY = '4ae48aec95308e90f0e2ebe37c00e70a';
const WEATHER_API = 'http://api.openweathermap.org/data/2.5/weather'

export const getWeatherByCityName = (cityName, callback) => {
  
  const url = `${WEATHER_API}?q=${cityName}&APPID=${API_KEY}`;
  
  fetch(url)
    .then(response => {
      if(response.status === 200) {
        return response.json();
      }
    })
    .then(callback)
}