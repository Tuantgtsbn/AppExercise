import * as Font from 'expo-font';

export const useFonts = async () => {
  try {
    await Font.loadAsync({
      'Poppins-Regular': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
      'Poppins-Medium': require('../assets/fonts/Poppins/Poppins-Medium.ttf'),
      'Poppins-SemiBold': require('../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
      'Poppins-Bold': require('../assets/fonts/Poppins/Poppins-Bold.ttf')
    });
  } catch (error) {
    console.warn('Error loading fonts:', error);
    throw error;
  }
};
