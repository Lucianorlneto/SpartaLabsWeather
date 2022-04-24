import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator, Image, Text, View, Animated,
} from 'react-native';

// import { Container } from './styles';
import Api from '../../services/Api';

import colors from '../../utils/styles/colors';

import { FadeInView } from '../../components';

const Details: React.FC = ({ route }) => {
  const [loading, setLoading] = useState(true);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const { params: { lat, lon } } = route;

    Api.get5DaysForecast(lat, lon).then((data) => {
      setForecast(data);
      setLoading(false);
    });
  }, []);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  if (loading) {
    return (
      <View style={{
        flex: 1, backgroundColor: colors.AZURE_60, justifyContent: 'center',
      }}
      >
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  return (
    <View style={{ backgroundColor: colors.AZURE_60, flex: 1 }}>

      <FadeInView>
        <View style={{
          flex: 1,
        }}
        >
          <Text>DETAILS</Text>
          <Image style={{ width: 200, height: 200 }} source={{ uri: 'http://openweathermap.org/img/wn/10d@4x.png' }} />
        </View>
      </FadeInView>
    </View>
  );
};

export default Details;
