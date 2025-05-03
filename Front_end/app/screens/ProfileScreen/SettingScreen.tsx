import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

export default function SettingScreen({ navigation }) {
  const { t } = useTranslation();
  return (
    <View className='flex-1 px-[30px] bg-white'>
      <View
        style={{
          marginTop: 30,
          paddingHorizontal: 16,
          paddingVertical: 20,
          borderRadius: 16,
          backgroundColor: '#ffffff',
          shadowColor: '#000',
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 0.3,
          shadowRadius: 6,
          elevation: 3,
          gap: 8
        }}
      >
        <TouchableOpacity
          className='flex-row justify-between items-center'
          onPress={() => navigation.navigate('SettingLanguage')}
        >
          <View className='flex-row gap-2 items-center'>
            <Ionicons name='globe-outline' size={24} color='#92A3FD' />
            <Text>{t('language', { ns: 'settingsScreen' })}</Text>
          </View>
          <MaterialIcons name='navigate-next' size={24} color='black' />
        </TouchableOpacity>
        <TouchableOpacity
          className='flex-row justify-between items-center'
          onPress={() => navigation.navigate('SettingTheme')}
        >
          <View className='flex-row gap-2 items-center'>
            <Ionicons name='flashlight-outline' size={24} color='#92A3FD' />
            <Text>{t('theme', { ns: 'settingsScreen' })}</Text>
          </View>
          <MaterialIcons name='navigate-next' size={24} color='black' />
        </TouchableOpacity>
      </View>
    </View>
  );
}
