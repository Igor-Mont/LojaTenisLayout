import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { Feather } from '@expo/vector-icons'

import Home from './pages/Home';
import Detail from './pages/Detail';
import { TouchableOpacity } from 'react-native';

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
          options={{
            headerRight: () => (
              <TouchableOpacity style={{marginRight: 15}}>
                <Feather
                  name="shopping-cart"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            )
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}