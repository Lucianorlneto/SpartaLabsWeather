import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

// import { Container } from './styles';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import ActionButton from '../ActionButton/index';
import colors from '../../utils/styles/colors';

import { getCities, deleteCity, updateCityFav } from '../../database/SQLite';

import Api from '../../services/Api';

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
      }}
      >
        <Text>{name}</Text>
        <ActionButton
          title={favorite ? 'unfav' : 'fav'}
          submit={() => {
            updateCityFav(id, !favorite).then(() => {
              setFavorite(!favorite);
              getCities().then((data) => {
                console.log(data);
              });
            });
          }}
        />
        <ActionButton
          title="delete"
          submit={() => deleteCity(id).then(() => {
            updateList();
          })}
        />
        {loading && <ActivityIndicator size="small" color={colors.AZURE} />}
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
