import React from 'react';
import { View, Text, Image } from 'react-native';

// import { Container } from './styles';

import { firstLetterUpperCase } from '../../../../helper';

import useConfig from '../../../../hooks/configHook';

const Today: React.FC<any> = ({ data }) => {
  const {
    weather, temp, feels_like, wind_speed, humidity,
  } = data;
  const { icon, description } = weather[0];

  const { tempValue } = useConfig();

  return (
    <View style={{
      justifyContent: 'space-around', alignItems: 'center', marginVertical: 16, marginHorizontal: 24,
    }}
    >
      <Text style={{ color: 'white', fontSize: 34 }}>HOJE</Text>
      <View style={{
        height: 125, width: 125, alignItems: 'center', justifyContent: 'center',
      }}
      >
        <Image style={{ flex: 1, height: '100%', width: '100%' }} resizeMode="contain" source={{ uri: `https://openweathermap.org/img/wn/${icon}@4x.png` }} />
      </View>
      <View style={{
        width: '100%', flexDirection: 'row', justifyContent: 'space-between',
      }}
      >
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Vento</Text>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>
            {wind_speed}
            m/s
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 20 }}>{firstLetterUpperCase(description)}</Text>
          <Text style={{ color: 'white', fontSize: 44 }}>
            {tempValue(temp)}
            °
          </Text>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Umidade</Text>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>
            {humidity}
            %
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Today;
