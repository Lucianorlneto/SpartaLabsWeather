import React from 'react';
import { Text, View, Image } from 'react-native';

import colors from '../../../../utils/styles/colors';

import { firstLetterUpperCase, epochToDate } from '../../../../helper';

import useConfig from '../../../../hooks/configHook';

// import { Container } from './styles';

const NextDays: React.FC = ({ data }) => {
  const { tempValue } = useConfig();

  return (
    <View style={{ margin: 8 }}>
      {data.map((day, index) => {
        const {
          weather, temp, feels_like, wind_speed, humidity, dt,
        } = day;
        const { icon, description } = weather[0];
        const date = epochToDate(dt);

        if (index !== 0) {
          return (
            <View
              key={dt}
              style={{
                flexDirection: 'row', elevation: 3, alignItems: 'center', padding: 4, justifyContent: 'space-between', backgroundColor: colors.AZURE_20, paddingHorizontal: 8,
              }}
            >
              <View style={{ flexDirection: 'row', flex: 1 }}>
                <Text style={{ color: 'white', marginRight: 4 }}>
                  {date.date}
                </Text>
                <Text style={{ color: 'white', marginRight: 4 }}>
                  —
                </Text>
                <Text style={{ color: 'white' }}>
                  {index === 1 ? 'Amanhã' : date.day}
                </Text>
              </View>
              <View style={{
                flexDirection: 'row', flex: 1, justifyContent: 'center',
              }}
              >
                <Text style={{ color: 'white' }}>{firstLetterUpperCase(description)}</Text>
              </View>
              <View style={{
                flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
              }}
              >
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image style={{ height: 50, width: 50 }} source={{ uri: `http://openweathermap.org/img/wn/${icon}@2x.png` }} />
                  <Text style={{ color: 'white' }}>
                    {tempValue(temp.day)}
                    °
                  </Text>
                </View>
              </View>
            </View>
          );
        }
      })}
    </View>
  );
};

export default NextDays;
