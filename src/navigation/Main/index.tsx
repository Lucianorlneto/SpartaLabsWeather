import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, TouchableOpacity, View } from 'react-native';
import { Cities, Details } from '../../screens';

const Main: React.FC = () => {
  const MainStack = createStackNavigator();

  return (
    <MainStack.Navigator
      initialRouteName=""
      screenOptions={{
        headerStyle: {
          backgroundColor: '#00aaf2',
        },
        headerTitleStyle: {
          color: 'white',
        },
      }}
    >
      <MainStack.Screen
        name="Cities"
        component={Cities}
      />
      <MainStack.Screen name="Details" component={Details} options={{ title: 'Detalhes' }} />
    </MainStack.Navigator>
  );
};

export default Main;
