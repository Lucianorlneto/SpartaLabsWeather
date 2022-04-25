import React from 'react';
import { View, Text } from 'react-native';
import { makeMutable } from 'react-native-reanimated';

// import { Container } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ActionButton from '../ActionButton/index';

import colors from '../../utils/styles/colors';

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
      padding: 16,
      // flexDirection: 'row',
      justifyContent: 'space-between',
    }}
    >
      <View>
        <View style={{
          height: 55, width: 197, marginBottom: 16,
        }}
        >
          <Text style={{ color: colors.BLACK_60_87, fontSize: 24, letterSpacing: 0 }}>{name}</Text>
          <Text style={{
            color: colors.BLACK_60_87, fontSize: 14, letterSpacing: 0.25, lineHeight: 20,
          }}
          >
            {country}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: 124, height: 36, justifyContent: 'center', padding: 8, borderWidth: 1, borderColor: colors.AZURE,
        }}
        onPress={() => {
          addCity(name, country, placeId).then((data) => {
            setSearching(false);
          });
        }}
      >
        <Text style={{
          color: '#0078be', fontSize: 14, lineHeight: 16, letterSpacing: 1.25, textAlign: 'center',
        }}
        >
          ADICIONAR
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddListItem;
