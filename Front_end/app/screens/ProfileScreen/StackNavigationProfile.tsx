import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';
import EditProfile from './EditProfile';
import LanguageScreen from './LanguageScreen';
import ThemeScreen from './ThemeScreen';
import { useTranslation } from 'react-i18next';

const stack = createStackNavigator();

const StackNavigationProfile = () => {
  const { t } = useTranslation();
  return (
    <stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <stack.Screen name='Index' component={ProfileScreen} options={{ headerShown: false }} />
      <stack.Screen name='EditProfile' component={EditProfile} options={{ headerShown: false }} />
      <stack.Screen
        name='SettingIndex'
        component={SettingScreen}
        options={{ headerTitle: t('settings', { ns: 'navigation' }) }}
      />
      <stack.Screen
        name='SettingLanguage'
        component={LanguageScreen}
        options={{ headerTitle: t('language', { ns: 'navigation' }) }}
      />
      <stack.Screen
        name='SettingTheme'
        component={ThemeScreen}
        options={{ headerTitle: t('theme', { ns: 'navigation' }) }}
      />
    </stack.Navigator>
  );
};
export default StackNavigationProfile;
