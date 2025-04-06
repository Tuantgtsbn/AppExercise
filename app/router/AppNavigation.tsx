import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './TabNavigator';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import HealthOverviewScreen from '@/screens/HealthOverviewScreen/HealthOverviewScreen';
import HealthMetricScreen from '@/screens/HealthMetricScreen/HealthMetricScreen';
import HealthCompareScreen from '@/screens/HealthCompareScreen/HealthCompareScreen';
import HealthCompareResultScreen from '@/screens/HealthCompareResultScreen/HealthCompareResultScreen';
import HealthUpdateScreen from '@/screens/HealthUpdateScreen/HealthUpdateScreen';
import WorkoutProgressScreen from '@/screens/WorkoutProgressScreen/workoutProgressScreen';

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
      <Stack.Screen
        name='HealthOverview'
        component={HealthOverviewScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='HealthMetric'
        component={HealthMetricScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='HealthCompare'
        component={HealthCompareScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='HealthCompareResult'
        component={HealthCompareResultScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='HealthUpdate'
        component={HealthUpdateScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='WorkoutProgress'
        component={WorkoutProgressScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
