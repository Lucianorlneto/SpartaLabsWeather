import React from 'react';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, TouchableOpacity, View } from 'react-native';
import { Cities, Details, Configurations } from '../../screens';

const Main: React.FC = () => {
  const MainStack = createStackNavigator();

  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

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
        headerTintColor: 'white',
        // transitionSpec: {
        //   open: config,
        //   close: config,
        // },
      }}
    >
      <MainStack.Screen
        name="Cities"
        component={Cities}
      />
      <MainStack.Screen name="Details" component={Details} options={({ route }) => ({ title: route.params.title, ...TransitionPresets.SlideFromRightIOS })} />
      <MainStack.Screen name="Configurations" component={Configurations} options={{ title: 'Configurações', headerTitleAlign: 'center', ...TransitionPresets.ModalSlideFromBottomIOS }} />
    </MainStack.Navigator>
  );
};

export default Main;
