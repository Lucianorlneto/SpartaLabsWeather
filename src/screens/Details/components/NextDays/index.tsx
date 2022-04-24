import React from 'react';
import { Text, View, Image } from 'react-native';

// import { Container } from './styles';

const NextDays: React.FC = ({ data }) => {
  const a = 'a';

  return (
    <View style={{ margin: 8 }}>
      {data.map((day) => {
        const {
          weather, temp, feels_like, wind_speed, humidity, dt,
        } = day;
        const { icon, description } = weather[0];

        return (
          <View
            key={dt}
            style={{
              flexDirection: 'row', elevation: 3, alignItems: 'center', padding: 4, borderTopWidth: 1, justifyContent: 'space-around',
            }}
          >
            <Text style={{ color: 'white' }}>{dt}</Text>
            <Image style={{ height: 40, width: 40 }} source={{ uri: `http://openweathermap.org/img/wn/${icon}@2x.png` }} />
          </View>
        );
      })}
    </View>
  );
};

export default NextDays;
