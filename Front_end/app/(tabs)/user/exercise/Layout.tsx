import ExerciseScreen from '@/screens/ExerciseScreen/ExerciseScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const ExerciseLayout = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='ExerciseScreenIndex' component={ExerciseScreen} />
    </Stack.Navigator>
  );
};
export default ExerciseLayout;
