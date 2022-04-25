import React from 'react';
import { Text, View, Image } from 'react-native';

import { firstLetterUpperCase, epochToDate } from '../../../../helper';

import useConfig from '../../../../hooks/configHook';

import {
  Container,
  DayContainer,
  DateDayContainer,
  DateText,
  DayText,
  WeatherDescriptionContainer,
  WeatherDesciptionText,
  WeatherTempContainer,
  IconTempContainer,
  TempText,
} from './styles';

const NextDays: React.FC<any> = ({ data }) => {
  const { tempValue } = useConfig();

  return (
    <Container>
      {data.map((day: any, index: number) => {
        const {
          weather, temp, dt,
        } = day;
        const { icon, description } = weather[0];
        const date = epochToDate(dt);

        if (index !== 0) {
          return (
            <DayContainer
              key={dt}
            >
              <DateDayContainer>
                <DateText>
                  {date.date}
                </DateText>
                <Text style={{ color: 'white' }}>
                  —
                </Text>
                <DayText>
                  {index === 1 ? 'Amanhã' : date.day}
                </DayText>
              </DateDayContainer>
              <WeatherDescriptionContainer>
                <WeatherDesciptionText>{firstLetterUpperCase(description)}</WeatherDesciptionText>
              </WeatherDescriptionContainer>
              <WeatherTempContainer>
                <IconTempContainer>
                  <Image style={{ height: 50, width: 50 }} source={{ uri: `https://openweathermap.org/img/wn/${icon}@2x.png` }} />
                  <TempText>
                    {tempValue(temp.day)}
                    °
                  </TempText>
                </IconTempContainer>
              </WeatherTempContainer>
            </DayContainer>
          );
        }

        return <View key={0} />;
      })}
    </Container>
  );
};

export default NextDays;
