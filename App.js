import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Homescreen from './components/HomeScreen';
import Contactscreen from './components/ContactScreen';
import Aboutscreen from './components/AboutScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Homescreen} />
        <Tab.Screen name="About" component={Aboutscreen} />
        <Tab.Screen name="Contact" component={Contactscreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}