import React, { useEffect, useState, useLayoutEffect } from 'react';
import {
  Text, View, Button, TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Api from '../../services/Api';
import Header from './components/Header';
import colors from '../../utils/styles/colors';

const Cities: React.FC<any> = ({ navigation }) => {
  const [searching, setSearching] = useState(0);
  const [text, setText] = useState('');
  const [cities, setCities] = useState([]);

  async function a() {
    // const response = await Api.GoogleAutoComplete('na');
    // const response1 = await Api.GoogleAutoComplete('nat');
    // const response2 = await Api.GoogleAutoComplete('nata');

    // console.log(response);
    // console.log(response1);
    // console.log(response2);
  }

  console.log(cities);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Header searching={searching} setSearching={(boolean) => setSearching(boolean)} text={text} setText={(newText) => setText(newText)} />,
    });

    if (!searching) {
      setText('');
      setCities([]);
    }

    if (text !== '') {
      Api.GoogleAutoComplete(text).then((response) => {
        setCities(response.predictions);
      });
    }
  }, [searching, text]);

  if (cities.length > 0) {
    return (
      <View>
        {cities.map((city) => <Text>{city.description}</Text>)}
      </View>
    );
  }
  return (
    <View style={{
      flex: 1, marginHorizontal: 16, marginVertical: 140,
    }}
    >
      <Text style={{
        color: colors.BLACK_60_87, fontSize: 22, textAlign: 'center', marginBottom: 16, marginHorizontal: 14, letterSpacing: 0.25,
      }}
      >
        Parece que você ainda não adicionou uma cidade
      </Text>
      <Text style={{
        color: colors.BLACK_60, fontSize: 18, textAlign: 'center', marginBottom: 16,
      }}
      >
        Tente adicionar uma cidade usando o botão de busca
      </Text>
    </View>
  );
};

export default Cities;
