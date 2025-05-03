import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeLayout from './home/Layout';
import ExerciseLayout from './exercise/Layout';
import HealthLayout from './health/Layout';
import ProfileLayout from './profile';
import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'HomeScreenTab') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'ProfileScreenTab') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'ExerciseScreenTab') {
            iconName = focused ? 'barbell' : 'barbell-outline';
          } else if (route.name === 'HealthScreenTab') {
            iconName = focused ? 'document-text' : 'document-text-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0088CC',
        tabBarInactiveTintColor: 'gray'
      })}
    >
      <Tab.Screen
        name='HomeScreenTab'
        component={HomeLayout}
        options={{ headerTitleAlign: 'center', title: t('home', { ns: 'navigation' }) }}
      />
      <Tab.Screen
        name='ExerciseScreenTab'
        component={ExerciseLayout}
        options={{ headerTitleAlign: 'center', title: t('exercise', { ns: 'navigation' }) }}
      />
      <Tab.Screen
        name='HealthScreenTab'
        component={HealthLayout}
        options={{ headerShown: false, title: t('health', { ns: 'navigation' }) }}
      />
      <Tab.Screen
        name='ProfileScreenTab'
        component={ProfileLayout}
        options={{ headerShown: false, title: t('profile', { ns: 'navigation' }) }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
