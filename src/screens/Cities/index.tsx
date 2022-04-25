import React, { useEffect, useState, useLayoutEffect } from 'react';
import {
  Text, View, Button, TouchableOpacity, RefreshControl, ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { ScrollView } from 'react-native-gesture-handler';
import Api from '../../services/Api';
import Header from './components/Header';
import EmptyList from './components/EmptyList';
import colors from '../../utils/styles/colors';

// import { initialCities } from '../../utils/constants';
import { LoadingContainer, Container } from './styles';

import { addCity, getCities } from '../../database/SQLite';

import { ListItem, AddListItem } from '../../components';

const Cities: React.FC<any> = ({ navigation }) => {
  const [searching, setSearching] = useState(false);
  const [text, setText] = useState('');
  const [cities, setCities] = useState(null);
  const [newCities, setNewCities] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  function updateList() {
    if (cities === null) {
      setCities([]);
    }
    getCities().then((data: any) => {
      setCities(data);
      setRefreshing(false);
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
      Api.googleAutoComplete(text).then((response) => {
        setNewCities(response);
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

  if (cities === null) {
    return (
      <LoadingContainer>
        <ActivityIndicator size="large" color={colors.AZURE} />
      </LoadingContainer>
    );
  }

  if (!searching) {
    if (cities.length > 0) {
      return (
        <ScrollView
          contentContainerStyle={{ paddingVertical: 8, paddingHorizontal: 16 }}
          refreshControl={(
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                setRefreshing(true);
                updateList();
              }}
            />
          )}
        >
          {cities.map((city) => (
            <ListItem
              key={city.id}
              id={city.id}
              placeId={city.place_id}
              country={city.country}
              name={city.name}
              fav={city.fav}
              lat={city.lat}
              lon={city.lon}
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
