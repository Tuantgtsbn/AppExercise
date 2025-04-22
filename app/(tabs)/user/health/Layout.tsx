import HealthCompareResultScreen from '@/screens/HealthCompareResultScreen/HealthCompareResultScreen';
import HealthCompareScreen from '@/screens/HealthCompareScreen/HealthCompareScreen';
import HealthMetricScreen from '@/screens/HealthMetricScreen/HealthMetricScreen';
import HealthOverviewScreen from '@/screens/HealthOverviewScreen/HealthOverviewScreen';
import HealthUpdateScreen from '@/screens/HealthUpdateScreen/HealthUpdateScreen';
import WorkoutProgressScreen from '@/screens/WorkoutProgressScreen/workoutProgressScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const HealthLayout = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='HealthOverScreen' component={HealthOverviewScreen} />
      <Stack.Screen name='HealthMetricScreen' component={HealthMetricScreen} />
      <Stack.Screen name='HealthUpdateScreen' component={HealthUpdateScreen} />
      <Stack.Screen name='HealthCompareScreen' component={HealthCompareScreen} />
      <Stack.Screen name='HealthCompareResultScreen' component={HealthCompareResultScreen} />
      <Stack.Screen name='WorkoutProgressScreen' component={WorkoutProgressScreen} />
    </Stack.Navigator>
  );
};
export default HealthLayout;
