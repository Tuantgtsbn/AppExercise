import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from '../(tabs)/user/Layout';

import { AppWrapper } from '@/components/AppWrapper';

import AuthLayout from '@/(auth)/Layout';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <AppWrapper>
      <Stack.Navigator initialRouteName='AuthSection' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='AuthSection' component={AuthLayout} />
        <Stack.Screen name='MainApp' component={BottomTabNavigator} />
      </Stack.Navigator>
    </AppWrapper>
  );
};

export default AppNavigator;
