import React from 'react';
import { View } from 'react-native';

// import { Container, AddButton } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

import colors from '../../utils/styles/colors';

import {
  Container, NamesContainer, CityName, CountryName, TextButton,
} from './styles';

interface newCity{
    name: string,
    country: string,
    placeId: string,
    setSearching: (boolean: boolean) => void,
    addCity: (name: string, country: string, placeId: string) => Awaited,
}

const AddListItem: React.FC<newCity> = ({
  name, country, placeId, setSearching, addCity,
}) => (
  <Container>
    <View>
      <NamesContainer>
        <CityName>{name}</CityName>
        <CountryName>
          {country}
        </CountryName>
      </NamesContainer>
    </View>
    <TouchableOpacity
      style={{
        width: 124, height: 36, justifyContent: 'center', padding: 8, borderWidth: 1, borderColor: colors.AZURE,
      }}
      onPress={() => {
        addCity(name, country, placeId).then(() => {
          setSearching(false);
        });
      }}
    >
      <TextButton>
        ADICIONAR
      </TextButton>
    </TouchableOpacity>
  </Container>
);

export default AddListItem;
