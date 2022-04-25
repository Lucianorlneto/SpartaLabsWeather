import React from 'react';
import { View, Text, Image } from 'react-native';

import {
  Container,
  Hoje,
  IconContainer,
  InfoContainer,
  ExtraInfoContainer,
  ExtraInfoLabel,
  ExtraInfoValue,
  WeatherContainer,
  WeatherDesciption,
  WeatherTemp,
} from './styles';

import { firstLetterUpperCase } from '../../../../helper';

import useConfig from '../../../../hooks/configHook';

const Today: React.FC<any> = ({ data }) => {
  const {
    weather, temp, wind_speed: windSpeed, humidity,
  } = data;
  const { icon, description } = weather[0];

  const { tempValue } = useConfig();

  return (
    <Container>
      <Hoje>HOJE</Hoje>
      <IconContainer>
        <Image style={{ flex: 1, height: '100%', width: '100%' }} resizeMode="contain" source={{ uri: `https://openweathermap.org/img/wn/${icon}@4x.png` }} />
      </IconContainer>
      <InfoContainer>
        <ExtraInfoContainer>
          <ExtraInfoLabel>Vento</ExtraInfoLabel>
          <ExtraInfoValue>
            {windSpeed}
            m/s
          </ExtraInfoValue>
        </ExtraInfoContainer>
        <WeatherContainer>
          <WeatherDesciption>{firstLetterUpperCase(description)}</WeatherDesciption>
          <WeatherTemp>
            {tempValue(temp)}
            °
          </WeatherTemp>
        </WeatherContainer>
        <ExtraInfoContainer>
          <ExtraInfoLabel>Umidade</ExtraInfoLabel>
          <ExtraInfoValue>
            {humidity}
            %
          </ExtraInfoValue>
        </ExtraInfoContainer>
      </InfoContainer>
    </Container>
  );
};

export default Today;
