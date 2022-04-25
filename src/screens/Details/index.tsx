import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator, Image, Text, View, Animated, ScrollView,
} from 'react-native';

// import { Container } from './styles';
import Api from '../../services/Api';

import colors from '../../utils/styles/colors';

import { FadeInView } from '../../components';
import { NextDays, Today } from './components';

const Details: React.FC = ({ route }) => {
  const [loading, setLoading] = useState(true);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const { params: { lat, lon } } = route;

    Api.get7DaysForecast(lat, lon).then((data) => {
      setForecast(data);
      setLoading(false);
    });
  }, []);

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
        <ScrollView>
          <Today data={forecast.current} />
          <NextDays data={forecast.daily} />
        </ScrollView>
      </FadeInView>
    </View>
  );
};

export default Details;
