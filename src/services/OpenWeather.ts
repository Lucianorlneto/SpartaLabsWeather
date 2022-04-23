import axios from 'axios';

const OpenWeather = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/',
});

export default OpenWeather;
