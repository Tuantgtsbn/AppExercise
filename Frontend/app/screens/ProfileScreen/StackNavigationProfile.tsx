import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';
import EditProfile from './EditProfile';
import LanguageScreen from './LanguageScreen';
import ThemeScreen from './ThemeScreen';
import { useTranslation } from 'react-i18next';
import PersonalInformation from './PersonalInformation';
import PersonalInformationScreen from './PersonalInformation';
import ConnectSmartWatchScreen from './ConnectSmartWatch';
import DataHealthFromSmartWatch from './DataHealthFromSmartWatch';

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
      <stack.Screen
        name='PersonalInformation'
        component={PersonalInformationScreen}
        options={{ headerTitle: t('personalInfo', { ns: 'navigation' }) }}
      />
      <stack.Screen
        name='ConnectSmartWatch'
        component={ConnectSmartWatchScreen}
        options={{ headerTitle: t('connectWatch', { ns: 'navigation' }) }}
      />
      <stack.Screen
        name='DataHealthFromSmartWatch'
        component={DataHealthFromSmartWatch}
        options={{ headerTitle: t('datafromWatch', { ns: 'navigation' }) }}
      />
    </stack.Navigator>
  );
};
export default StackNavigationProfile;
