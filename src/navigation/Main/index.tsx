import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Cities, Details } from '../../screens';

const Main: React.FC = () => {
  const MainStack = createNativeStackNavigator();

  return (
    <MainStack.Navigator initialRouteName="">
      <MainStack.Screen name="Cities" component={Cities} options={{ title: 'Cidades' }} />
      <MainStack.Screen name="Details" component={Details} options={{ title: 'Detalhes' }} />
    </MainStack.Navigator>
  );
};

export default Main;
