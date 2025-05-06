import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding1 from './OnBoarding1';
import Welcome from './Welcome';
import OnBoarding2 from './OnBoarding2';
import OnBoarding3 from './OnBoarding3';
import OnBoarding4 from './OnBoarding4';
import OnBoarding5 from './OnBoarding5';

const Stack = createStackNavigator();

const StackNavigatorOnBoarding = () => {
  return (
    <Stack.Navigator
      initialRouteName='welcome'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='welcome' component={Welcome} />
      <Stack.Screen name='boarding1' component={OnBoarding1} />
      <Stack.Screen name='boarding2' component={OnBoarding2} />
      <Stack.Screen name='boarding3' component={OnBoarding3} />
      <Stack.Screen name='boarding4' component={OnBoarding4} />
      <Stack.Screen name='boarding5' component={OnBoarding5} />
    </Stack.Navigator>
  );
};
export default StackNavigatorOnBoarding;
