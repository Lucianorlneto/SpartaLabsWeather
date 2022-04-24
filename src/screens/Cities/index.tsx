import React, { useEffect, useState, useLayoutEffect } from 'react';
import {
  Text, View, Button, TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { ScrollView } from 'react-native-gesture-handler';
import Api from '../../services/Api';
import Header from './components/Header';
import EmptyList from './components/EmptyList';
import colors from '../../utils/styles/colors';

// import { initialCities } from '../../utils/constants';

import { addCity, getCities } from '../../database/SQLite';

import { ListItem, AddListItem } from '../../components';

const Cities: React.FC<any> = ({ navigation }) => {
  const [searching, setSearching] = useState(0);
  const [text, setText] = useState('');
  const [cities, setCities] = useState([]);
  const [newCities, setNewCities] = useState([]);

  function updateList() {
    console.log('updateList');
    getCities().then((data) => {
      console.log('updateList2');
      console.log(data);
      setCities(data);
    });
  }

  useEffect(() => {
    updateList();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Header searching={searching} setSearching={(boolean) => setSearching(boolean)} text={text} setText={(newText) => setText(newText)} />,
    });

    if (text !== '' && searching) {
      Api.GoogleAutoComplete(text).then((response) => {
        setNewCities(response);
        // console.log(response);
      });
    }

    if (text === '' && searching) {
      setNewCities([]);
    }

    if (!searching) {
      setText('');
      setNewCities([]);
      updateList();
    }
  }, [searching, text]);

  if (!searching) {
    if (cities.length > 0) {
      return (
        <ScrollView contentContainerStyle={{ paddingVertical: 8, paddingHorizontal: 16 }}>
          {cities.map((city) => (
            <ListItem
              key={city.id}
              id={city.id}
              placeId={city.place_id}
              country={city.country}
              name={city.name}
              fav={city.fav}
              updateList={() => updateList()}
            />
          ))}
        </ScrollView>
      );
    }

    return <EmptyList />;
  }

  return (
    <ScrollView contentContainerStyle={{ paddingVertical: 8, paddingHorizontal: 16 }}>
      {newCities.map((newCity) => {
        const currentCities = cities.map((city) => city.place_id);

        if (!currentCities.includes(newCity.placeId)) {
          return (
            <AddListItem
              key={newCity.placeId}
              country={newCity.country}
              name={newCity.name}
              placeId={newCity.placeId}
              setSearching={(boolean) => setSearching(boolean)}
              addCity={(name, country, placeId) => addCity(name, country, placeId)}
            />
          );
        }
      })}
    </ScrollView>
  );
};

export default Cities;
