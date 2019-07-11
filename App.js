import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { Home, Onboarding } from './src/Screens';

const AppNavigator = createStackNavigator({
  Onboarding: {
    screen: Onboarding,
  },
  Home: {
    screen: Home,
  },
});

export default createAppContainer(AppNavigator);
