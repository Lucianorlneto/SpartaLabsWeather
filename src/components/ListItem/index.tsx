import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

import ActionButton from '../ActionButton/index';

interface City{
    name: string,
    country: string,
    temp: string,
    weather: string,
    tempRange: string,
}

const ListItem: React.FC<City> = ({
  name, country, temp, weather, tempRange,
}) => {
  const a = 'a';

  return (
    <View style={{
      // borderWidth: 2,
      // margin: 16,
      marginVertical: 8,
      height: 130,
      borderRadius: 6,
      // shadowColor: '#171717',
      // shadowOffset: { width: -2, height: 40 },
      // shadowOpacity: 0.2,
      backgroundColor: 'white',
      elevation: 3,
      // shadowRadius: 3,
    }}
    >
      <Text>{name}</Text>
      <ActionButton title="fav" submit={() => console.log('aa')} />
      <ActionButton title="delete" submit={() => console.log('aa')} />
    </View>
  );
};

export default ListItem;
