import React from 'react';
import { View, Text } from 'react-native';

import { Container, Text1, Text2 } from './styles';

import colors from '../../../utils/styles/colors';

// import { Container } from './styles';

const EmptyList: React.FC = () => (
  <Container>
    <Text1>
      Parece que você ainda não adicionou uma cidade
    </Text1>
    <Text2>
      Tente adicionar uma cidade usando o botão de busca
    </Text2>
  </Container>
);

export default EmptyList;
