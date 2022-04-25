import React, { useState, useEffect } from 'react';
import {
  View, Text, ActivityIndicator, Alert,
} from 'react-native';

// import { Container } from './styles';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ActionButton from '../ActionButton/index';
import colors from '../../utils/styles/colors';

import { getCities, deleteCity, updateCityFav } from '../../database/SQLite';

import Api from '../../services/Api';

import { firstLetterUpperCase } from '../../helper/index';

import useConfig from '../../hooks/configHook';

interface City{
    updateList: () => void,
    id: number,
    placeId: string,
    name: string,
    country: string,
    lat: string,
    lon: string,
    fav: boolean
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

  return (
    <TouchableOpacity onPress={() => navigation.push('Details', { title: name, lat, lon })}>
      <View style={{
      // borderWidth: 2,
      // margin: 16,
        marginVertical: 8,
        height: 130,
        borderRadius: 6,
        // shadowColor: '#171717',
        // shadowOffset: { width: -2, height: 40 },
        // shadowOpacity: 0.2,
        backgroundColor: 'white',
        elevation: 3,
        // shadowRadius: 3,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
      >
        <View>
          <View style={{
            height: 55, width: 197, marginBottom: 8,
          }}
          >
            <Text style={{ color: colors.BLACK_60_87, fontSize: 24, letterSpacing: 0 }}>{name}</Text>
            <Text style={{
              color: colors.BLACK_60_87, fontSize: 14, letterSpacing: 0.25, lineHeight: 20,
            }}
            >
              {country}
            </Text>
          </View>
          <View>
            {loading ? <ActivityIndicator size="small" color={colors.AZURE} /> : (
              <View>
                <Text style={{
                  color: '#f28200', fontSize: 14, letterSpacing: 0.25, lineHeight: 20, marginBottom: 2,
                }}
                >
                  {firstLetterUpperCase(weather.weather[0].description)}
                </Text>
                <Text style={{
                  color: colors.BLACK_60_87, letterSpacing: 0.4, lineHeight: 16, fontSize: 12,
                }}
                >
                  {tempValue(weather.main.temp_min)}
                  °
                  {' '}
                  -
                  {' '}
                  {tempValue(weather.main.temp_max)}
                  °
                </Text>
              </View>
            )}
          </View>
        </View>
        <View>
          {loading ? <ActivityIndicator size="small" color={colors.AZURE} /> : (
            <Text style={{
              color: '#f28200', fontSize: 34, letterSpacing: 0.25, marginTop: 8, marginBottom: 11, textAlign: 'center',
            }}
            >
              {tempValue(weather.main.temp)}
              °
            </Text>
          )}
          <View style={{
            flexDirection: 'row', width: 70, justifyContent: 'space-around',
          }}
          >
            <TouchableOpacity onPress={() => {
              Alert.alert(
                'Remover cidade',
                `Deseja realmente remover a cidade ${name}?`,
                [
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
                ],
              );
            }}
            >
              <FontAwesome name="trash-o" size={25} color={colors.BLACK_60_87} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              updateCityFav(id, !favorite).then(() => {
                setFavorite(!favorite);
              });
            }}
            >
              <FontAwesome name={favorite ? 'heart' : 'heart-o'} colors="#ed0952" size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
