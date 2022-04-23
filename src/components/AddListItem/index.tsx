import React from 'react';
import { View, Text } from 'react-native';
import { makeMutable } from 'react-native-reanimated';

// import { Container } from './styles';
import ActionButton from '../ActionButton/index';

interface newCity{
    name: string,
    country: string,
    placeId: string
}

const AddListItem: React.FC<newCity> = ({ name, country, placeId }) => {
  const a = 'a';

  return (
    <View style={{
      margin: 16,
      height: 130,
      borderRadius: 6,
      backgroundColor: 'white',
      elevation: 3,
    }}
    >
      <Text>{name}</Text>
      <Text>{country}</Text>
      <ActionButton title="ADICIONAR" submit={() => console.log(placeId)} />
    </View>
  );
};

export default AddListItem;
