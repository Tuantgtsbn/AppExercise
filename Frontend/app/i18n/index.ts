import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';

import en from './translations/en';
import vi from './translations/vi';

const LANGUAGES = {
  en,
  vi
};

const LANG_CODES = Object.keys(LANGUAGES);

const LANGUAGE_DETECTOR = {
  type: 'languageDetector',
  async: true,
  detect: async callback => {
    try {
      // Đọc ngôn ngữ đã lưu từ AsyncStorage
      const savedLanguage = await AsyncStorage.getItem('user-language');

      if (savedLanguage) {
        // Nếu đã lưu ngôn ngữ, sử dụng ngôn ngữ đó
        return callback(savedLanguage);
      }

      // Nếu chưa lưu, sử dụng ngôn ngữ mặc định của thiết bị
      const deviceLanguage = Localization.getLocales()[0].languageCode || 'vi';
      console.log('Device language:', deviceLanguage);
      const supportedLanguage = LANG_CODES.includes(deviceLanguage) ? deviceLanguage : 'vi';

      return callback(supportedLanguage);
    } catch (error) {
      console.log('Error reading language', error);
      return callback('vi');
    }
  },
  init: () => {},
  cacheUserLanguage: async language => {
    try {
      // Lưu ngôn ngữ đã chọn vào AsyncStorage
      await AsyncStorage.setItem('user-language', language);
    } catch (error) {
      console.log('Error saving language', error);
    }
  }
};

i18n
  .use(LANGUAGE_DETECTOR)
  .use(initReactI18next)
  .init({
    resources: LANGUAGES,
    react: {
      useSuspense: false
    },
    interpolation: {
      escapeValue: false
    },
    ns: [
      'common',
      'settingsScreen',
      'navigation',
      'homeScreen',
      'exerciseScreen',
      'mealPlanScreen',
      'profileScreen',
      'historyScreen',
      'authScreen',
      'errors'
    ],
    defaultNS: 'common',
    fallbackLng: 'vi',
    debug: __DEV__
  });

export default i18n;
