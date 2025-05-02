import LoginScreen from '@/screens/LoginScreen/LoginScreen';
import RegisterScreen from '@/screens/RegisterScreen/RegisterScreen';
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigatorOnBoarding from './onboarding/StackNavigationOnBoarding';
import StackNavigatorIntroduction from './introduce/StackNavigatorIntroduction';

const Stack = createStackNavigator();
const AuthLayout = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='StackOnBoardingScreen' component={StackNavigatorOnBoarding} />
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
      <Stack.Screen name='StackIntroductionScreen' component={StackNavigatorIntroduction} />
    </Stack.Navigator>
  );
};
export default AuthLayout;
