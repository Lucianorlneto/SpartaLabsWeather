import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator, ScrollView,
} from 'react-native';

// import { Container } from './styles';
import Api from '../../services/Api';

import { FadeInView } from '../../components';
import { NextDays, Today } from './components';

import { LoadingContainer, Container } from './styles';

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
      <LoadingContainer>
        <ActivityIndicator size="large" color="white" />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <FadeInView>
        <ScrollView>
          <Today data={forecast.current} />
          <NextDays data={forecast.daily} />
        </ScrollView>
      </FadeInView>
    </Container>
  );
};

export default Details;
