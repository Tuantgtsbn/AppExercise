import { createStackNavigator } from '@react-navigation/stack';
import CompleteProfile from './CompleteProfile';
import Intro1 from './Intro1';
import Intro2 from './Intro2';
import Intro3 from './Intro3';
import FinalIntro from './FinalIntro';

const Stack = createStackNavigator();

const StackNavigatorIntroduction = () => {
  return (
    <Stack.Navigator initialRouteName='completeProfile'>
      <Stack.Screen name='completeProfile' component={CompleteProfile} />
      <Stack.Screen name='intro1' component={Intro1} />
      <Stack.Screen name='intro2' component={Intro2} />
      <Stack.Screen name='intro3' component={Intro3} />
      <Stack.Screen name='intro4' component={FinalIntro} />
    </Stack.Navigator>
  );
};

export default StackNavigatorIntroduction;
