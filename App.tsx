/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import 'react-native-gesture-handler';

import SplashScreen from 'react-native-splash-screen';

import Main from './src/navigation';

import { initDatabase } from './src/database/SQLite';

import { ConfigProvider } from './src/context/config';

const App = () => {
  useEffect(() => {
    initDatabase();

    SplashScreen.hide();
  });

  return (
    <NavigationContainer>
      <ConfigProvider>
        <Main />
      </ConfigProvider>
    </NavigationContainer>
  );
};

export default App;
