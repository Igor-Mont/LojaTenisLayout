import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home';
import Detail from './pages/Detail';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Screen
          name="Detail"
          component={Detail}
        />
      </Navigator>
    </NavigationContainer>
  );
}