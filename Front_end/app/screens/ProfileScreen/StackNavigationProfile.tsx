import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';
import EditProfile from './EditProfile';
import LanguageScreen from './LanguageScreen';
import ThemeScreen from './ThemeScreen';

const stack = createStackNavigator();

const StackNavigationProfile = () => {
  return (
    <stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <stack.Screen name='Index' component={ProfileScreen} options={{ headerShown: false }} />
      <stack.Screen name='EditProfile' component={EditProfile} options={{ headerShown: false }} />
      <stack.Screen
        name='SettingIndex'
        component={SettingScreen}
        options={{ headerTitle: 'Cài đặt' }}
      />
      <stack.Screen
        name='SettingLanguage'
        component={LanguageScreen}
        options={{ headerTitle: 'Ngôn ngữ' }}
      />
      <stack.Screen
        name='SettingTheme'
        component={ThemeScreen}
        options={{ headerTitle: 'Giao diện' }}
      />
    </stack.Navigator>
  );
};
export default StackNavigationProfile;
