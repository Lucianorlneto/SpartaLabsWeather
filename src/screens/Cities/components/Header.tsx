import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useNavigation } from '@react-navigation/native';

import {
  HeaderContainer,
  HeaderTitle,
  ConfigButton,
  SearchButton,
  HeaderSearchContainer,
  CancelButton,
  SearchInput,
} from './styles';

interface Props {
  searching: boolean;
  setSearching: (boolean: boolean) => void;
  text: string;
  setText: (text: string) => void;
}

const Header: React.FC<Props> = ({
  searching, setSearching, text, setText,
}) => {
  const navigation = useNavigation();

  if (!searching) {
    return (
      <HeaderContainer>
        <ConfigButton onPress={() => navigation.push('Configurations')}>
          <MaterialCommunityIcons name="cogs" color="white" size={22} />
        </ConfigButton>
        <HeaderTitle>
          Cidades
        </HeaderTitle>
        <SearchButton onPress={() => setSearching(true)}>
          <Ionicons name="search" color="white" size={22} />
        </SearchButton>
      </HeaderContainer>
    );
  }

  return (
    <HeaderSearchContainer>
      <CancelButton onPress={() => setSearching(false)}>
        <Ionicons name="close" color="white" size={24} />
      </CancelButton>
      <SearchInput
        autoFocus
        placeholder="nome da cidade"
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        onChangeText={(newText: string) => setText(newText)}
        value={text}
      />
    </HeaderSearchContainer>
  );
};

export default Header;
