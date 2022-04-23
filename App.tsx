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

import { initDatabase, testDb, testDb2 } from './src/database/SQLite';

const App = () => {
  useEffect(() => {
    initDatabase();
    // testDb();
    // testDb2();

    SplashScreen.hide();
  });

  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};

export default App;
