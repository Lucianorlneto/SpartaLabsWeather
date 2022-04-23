import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../../utils/styles/colors';

interface Props {
    searching: boolean,
    setSearching: (boolean: boolean) => void,
    text: string,
    setText: (text: string) => void,
}

const Header: React.FC<Props> = ({
  searching, setSearching, text, setText,
}) => {
  if (!searching) {
    return (
      <View style={{
        justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row',
      }}
      >
        <TouchableOpacity onPress={() => setSearching(true)}>
          <MaterialCommunityIcons name="cogs" color="white" size={22} />
        </TouchableOpacity>
        <Text style={{
          color: 'white', fontFamily: 'Roboto', fontSize: 22,
        }}
        >
          Cidades
        </Text>
        <TouchableOpacity onPress={() => setSearching(true)}>
          <Ionicons name="search" color="white" size={22} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{
      justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row',
    }}
    >
      <TouchableOpacity style={{ marginRight: 12 }} onPress={() => setSearching(false)}>
        <Ionicons name="close" color="white" size={24} />
      </TouchableOpacity>
      <TextInput autoFocus style={{ color: 'white', fontSize: 16 }} placeholder="nome da cidade" placeholderTextColor="white" onChangeText={(newText) => setText(newText)} value={text} />
    </View>
  );
};

export default Header;
