// AppNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './login'; 
import CadastroScreen from './CadastroScreen'; 
const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="CadastroScreen" component={CadastroScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
