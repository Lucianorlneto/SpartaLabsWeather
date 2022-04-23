import axios from 'axios';

const GooglePlacesAPI = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/place/',
});

export default GooglePlacesAPI;
