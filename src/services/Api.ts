import axios from 'axios';
import { Alert } from 'react-native';
import GooglePlacesAPI from './GooglePlacesAPI';
import OpenWeather from './OpenWeather';

const TOKENS = {
  GooglePlacesAPIKey: 'AIzaSyC8epszgqJcjXYRwqmS-tp54BnUIcJj_Ss',
  OpenWeatherKey: 'a98153167bcbc0ca4a3dfe722a4a98a2',
};

function handleReponse(response: any) {
  if (response.status !== 200) {
    return Alert.alert('Erro ao conectar-se', 'Ocorreu uma falha de conexão com a API.');
  }

  return response.data;
}

const Api = {
  async GoogleAutoComplete(term: string) {
    const response = await GooglePlacesAPI.get(
      `autocomplete/json?input=${term}&language=pt-BR&key=${TOKENS.GooglePlacesAPIKey}&types=(cities)`,
    );

    return handleReponse(response);
  },

  async GoogleDetails(placeID: string) {
    const response = await GooglePlacesAPI.get(
      `/details/json?fields=name%2Cgeometry%2Caddress_component&place_id=${placeID}&key=${TOKENS.GooglePlacesAPIKey}&language=pt-BR`,
    );

    return handleReponse(response);
  },
};

export default Api;
