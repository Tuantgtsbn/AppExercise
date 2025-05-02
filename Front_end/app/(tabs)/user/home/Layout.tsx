import HomeScreen from '@/screens/HomeScreen/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const HomeLayout = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeLayout;
