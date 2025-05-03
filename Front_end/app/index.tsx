import React, { useCallback, useEffect, useState } from 'react';
import AppNavigator from './router/AppNavigation';
import '../global.css';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from '../hooks/useFonts';
import Toast from 'react-native-toast-message';

import { ActivityIndicator, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import i18n from './i18n';
SplashScreen.preventAutoHideAsync();
export default function Index() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        // Load fonts
        await useFonts();
        // Thêm các tác vụ khởi tạo khác nếu cần
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='#92A3FD' />
      </View>
    );
  }
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <AppNavigator />
      </View>
      <Toast />
    </Provider>
  );
}
