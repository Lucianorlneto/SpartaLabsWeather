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

import { ListItem, AddListItem } from '../../components';

const Cities: React.FC<any> = ({ navigation }) => {
  const [searching, setSearching] = useState(0);
  const [text, setText] = useState('');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // console.log(initialCities);
    // setCities(initialCities);
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Header searching={searching} setSearching={(boolean) => setSearching(boolean)} text={text} setText={(newText) => setText(newText)} />,
    });

    if (text !== '' && searching) {
      Api.GoogleAutoComplete(text).then((response) => {
        setCities(response);
        // console.log(response);
      });
    }

    if (!searching) {
      setText('');
      setCities([]);
    }
  }, [searching, text]);

  if (!searching) {
    if (cities.length > 0) {
      return (
        <View>
          {cities.map((city) => (
            <ListItem
              key={city.name}
              country={city.country}
              name={city.name}
              temp={city.temp}
              weather={city.weather}
              tempRange={city.tempRange}
            />
          ))}
        </View>
      );
    }

    return <EmptyList />;
  }

  return (
    <ScrollView>
      {cities.map((city) => (
        <AddListItem
          key={city.name}
          country={city.country}
          name={city.name}
          placeId={city.placeId}
        />
      ))}
    </ScrollView>
  );
};

export default Cities;
