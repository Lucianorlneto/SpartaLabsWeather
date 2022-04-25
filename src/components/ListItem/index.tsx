import React, { useState, useEffect } from 'react';
import {
  View, Text, ActivityIndicator, Alert,
} from 'react-native';

// import { Container, ContainerButton, DeleteButton } from './styles';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../utils/styles/colors';

import { deleteCity, updateCityFav } from '../../database/SQLite';

import Api from '../../services/Api';

import { firstLetterUpperCase } from '../../helper/index';

import {
  ContainerButton,
  Container,
  NamesContainer,
  CityName,
  CountryName,
  WeatherDescription,
  WeatherRange,
  WeatherTemp,
  DeleteButton,
  FavoriteButton,
} from './styles';

import useConfig from '../../hooks/configHook';

interface City {
  updateList: () => void;
  id: number;
  placeId: string;
  name: string;
  country: string;
  lat: string;
  lon: string;
  fav: boolean;
}

const ListItem: React.FC<City> = ({
  updateList, id, placeId, name, country, lat, lon, fav,
}) => {
  const [favorite, setFavorite] = useState(fav);
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const { tempValue } = useConfig();

  useEffect(() => {
    Api.getWeather(lat, lon).then((data) => {
      setWeather(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (weather.length > 0) {
      setLoading(false);
    }
  }, [weather]);

  return (
    <ContainerButton onPress={() => navigation.push('Details', { title: name, lat, lon })}>
      <Container>
        <View>
          <NamesContainer>
            <CityName>{name}</CityName>
            <CountryName>{country}</CountryName>
          </NamesContainer>
          <View>
            {loading ? (
              <ActivityIndicator size="small" color={colors.AZURE} />
            ) : (
              <View>
                <WeatherDescription>
                  {firstLetterUpperCase(weather.weather[0].description)}
                </WeatherDescription>
                <WeatherRange>
                  {tempValue(weather.main.temp_min)}
                  ° -
                  {tempValue(weather.main.temp_max)}
                  °
                </WeatherRange>
              </View>
            )}
          </View>
        </View>
        <View>
          {loading ? (
            <ActivityIndicator size="small" color={colors.AZURE} />
          ) : (
            <WeatherTemp>
              {tempValue(weather.main.temp)}
              °
            </WeatherTemp>
          )}
          <View
            style={{
              flexDirection: 'row',
              width: 70,
              justifyContent: 'space-around',
            }}
          >
            <DeleteButton
              onPress={() => {
                Alert.alert('Remover cidade', `Deseja realmente remover a cidade ${name}?`, [
                  {
                    text: 'NÂO',
                    style: 'cancel',
                  },
                  {
                    text: 'SIM',
                    onPress: () => deleteCity(id).then(() => {
                      updateList();
                    }),
                  },
                ]);
              }}
            >
              <FontAwesome name="trash-o" size={25} color={colors.BLACK_60_87} />
            </DeleteButton>
            <FavoriteButton
              onPress={() => {
                updateCityFav(id, !favorite).then(() => {
                  setFavorite(!favorite);
                });
              }}
            >
              <FontAwesome name={favorite ? 'heart' : 'heart-o'} colors="#ed0952" size={25} />
            </FavoriteButton>
          </View>
        </View>
      </Container>
    </ContainerButton>
  );
};

export default ListItem;
