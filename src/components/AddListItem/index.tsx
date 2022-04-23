import React from 'react';
import { View, Text } from 'react-native';
import { makeMutable } from 'react-native-reanimated';

// import { Container } from './styles';
import ActionButton from '../ActionButton/index';

interface newCity{
    name: string,
    country: string,
    placeId: string,
    setSearching: (boolean: boolean) => void,
    addCity: (name: string, country: string, placeId: string) => Awaited,
}

const AddListItem: React.FC<newCity> = ({
  name, country, placeId, setSearching, addCity,
}) => {
  const a = 'a';

  return (
    <View style={{
      marginVertical: 8,
      height: 130,
      borderRadius: 6,
      backgroundColor: 'white',
      elevation: 3,
    }}
    >
      <Text>{name}</Text>
      <Text>{country}</Text>
      <ActionButton
        title="ADICIONAR"
        submit={() => {
          addCity(name, country, placeId).then(() => {
            setSearching(false);
          });
        }}
      />
    </View>
  );
};

export default AddListItem;
