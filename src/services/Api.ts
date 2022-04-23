import axios from 'axios';
import { Alert } from 'react-native';
import GooglePlacesAPI from './GooglePlacesAPI';
import OpenWeather from './OpenWeather';

const TOKENS = {
  GooglePlacesAPIKey: '',
  OpenWeatherKey: '',
};

function handleReponse(status: number, data: any) {
  if (status !== 200) {
    return Alert.alert('Erro ao conectar-se', 'Ocorreu uma falha de conexão com a API.');
  }

  return data;
}

const Api = {
  async GoogleAutoComplete(term: string) {
    const response = await GooglePlacesAPI.get(
      `autocomplete/json?input=${term}&language=pt-BR&key=${TOKENS.GooglePlacesAPIKey}&types=(cities)`,
    );

    const parsedData = response.data.predictions.map((item: any) => (
      {
        name: item.structured_formatting.main_text,
        country: item.structured_formatting.secondary_text,
        placeId: item.place_id,
      }
    ));
    return handleReponse(response.status, parsedData);
  },

  async GoogleDetails(placeID: string) {
    const response = await GooglePlacesAPI.get(
      `/details/json?fields=name%2Cgeometry%2Caddress_component&place_id=${placeID}&key=${TOKENS.GooglePlacesAPIKey}&language=pt-BR`,
    );

    return handleReponse(response.status, response.data);
  },
};

export default Api;
