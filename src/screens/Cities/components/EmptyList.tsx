import React from 'react';
import { View, Text } from 'react-native';

import colors from '../../../utils/styles/colors';

// import { Container } from './styles';

const EmptyList: React.FC = () => (
  <View style={{
    flex: 1, marginHorizontal: 16, marginVertical: 140,
  }}
  >
    <Text style={{
      color: colors.BLACK_60_87, fontSize: 22, textAlign: 'center', marginBottom: 16, marginHorizontal: 14, letterSpacing: 0.25,
    }}
    >
      Parece que você ainda não adicionou uma cidade
    </Text>
    <Text style={{
      color: colors.BLACK_60, fontSize: 18, textAlign: 'center', marginBottom: 16,
    }}
    >
      Tente adicionar uma cidade usando o botão de busca
    </Text>
  </View>
);

export default EmptyList;
