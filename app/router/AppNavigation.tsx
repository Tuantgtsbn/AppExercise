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
import MealSearchScreen from '@/screens/MealSearchScreen/MealSearchScreen';
import MealPlanScreen from '@/screens/MealPlanScreen/MealPlanScreen';
import MealSearchResultScreen from '@/screens/MealSearchResultScreen/MealSearchResultScreen';
import MealDetailScreen from '@/screens/MealDetailScreen/MealDetailScreen';
import AddMealScheduleScreen from '@/screens/AddMealScheduleScreen/AddMealScheduleScreen';
import MealScheduleScreen from '@/screens/MealScheduleScreen/MealScheduleScreen';

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

      <Stack.Screen name='MealPlan' component={MealPlanScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name='MealSearch'
        component={MealSearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='MealSearchResult'
        component={MealSearchResultScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='MealDetail'
        component={MealDetailScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>

      <Stack.Screen
        name='AddMealSchedule'
        component={AddMealScheduleScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>

      <Stack.Screen
        name='MealSchedule'
        component={MealScheduleScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AppNavigator;
