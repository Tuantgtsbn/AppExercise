import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './TabNavigator';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import HealthOverviewScreen from '@/screens/HealthOverviewScreen/HealthOverviewScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Register' component={RegisterScreen} />
      <Stack.Screen
        name='MainApp'
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='HealthOverview' component={HealthOverviewScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
