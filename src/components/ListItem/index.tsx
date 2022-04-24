import React, { useState } from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

import { TouchableOpacity } from 'react-native-gesture-handler';
import ActionButton from '../ActionButton/index';

import { getCities, deleteCity, updateCityFav } from '../../database/SQLite';

interface City{
    updateList: () => void,
    id: number,
    placeId: string,
    name: string,
    country: string,
    fav: boolean
}

const ListItem: React.FC<City> = ({
  updateList, id, placeId, name, country, fav,
}) => {
  const [favorite, setFavorite] = useState(fav);

  return (
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
      {/* <TouchableOpacity onPress={() => deleteCity(id).then(() => {
        console.log('deletando');
        updateList();
      })}
      >
        <Text>aaaa</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default ListItem;
