import { View, Text, Image, Modal, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '@/i18n';

export default function LanguageScreen() {
  const { t } = useTranslation();

  const languages = [
    {
      label: t('vietnam', { ns: 'settingsScreen' }),
      value: 'vi',
      src: require('@assets/images/FlagVietNam.png')
    },
    {
      label: t('english', { ns: 'settingsScreen' }),
      value: 'en',
      src: require('@assets/images/FlagEngland.png')
    }
  ];
  const [language, setLanguage] = useState('vi');
  const [showModal, setShowModal] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  useEffect(() => {
    const getCurrentLanguage = async () => {
      try {
        const savedLanguage = await AsyncStorage.getItem('user-language');
        if (savedLanguage) {
          setLanguage(savedLanguage);
        }
      } catch (error) {
        console.log('Error reading language', error);
      }
    };
    getCurrentLanguage();
  }, []);
  const handleLanguageSelect = value => {
    setSelectedLanguage(value);
    setShowModal(true);
  };

  const handleConfirm = async () => {
    try {
      await AsyncStorage.setItem('user-language', selectedLanguage);
      i18n.changeLanguage(selectedLanguage);
      setLanguage(selectedLanguage);
      setShowModal(false);
    } catch (error) {
      console.log('Error saving language', error);
    }
  };

  return (
    <View className='flex-1 bg-white px-[30px]'>
      {languages.map((item, index) => (
        <TouchableOpacity
          key={index}
          className='flex-row justify-between items-center mt-[35px]'
          onPress={() => handleLanguageSelect(item.value)}
        >
          <View className='flex-row items-center gap-3'>
            <Image source={item.src} style={{ width: 24, height: 24 }} />
            <Text className='text-base'>{item.label}</Text>
          </View>
          <View
            className={classNames('w-[24px] h-[24px] rounded-full border-2 border-black', {
              'bg-brand': language === item.value
            })}
          />
        </TouchableOpacity>
      ))}

      {/* Confirmation Modal */}
      <Modal
        animationType='fade'
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View className='flex-1 justify-center items-center bg-black/50'>
          <View className='bg-white p-6 rounded-2xl w-[80%]'>
            <Text className='text-xl font-semibold text-center mb-4'>
              {t('titleConfirmChangeLanguage', { ns: 'settingsScreen' })}
            </Text>
            <Text className='text-center mb-6'>
              {t('languageConfirmation', { ns: 'settingsScreen' })}{' '}
              {languages.find(lang => lang.value === selectedLanguage)?.label}?
            </Text>

            <View className='flex-row justify-center gap-4'>
              <TouchableOpacity
                className='px-6 py-3 rounded-full bg-gray-200'
                onPress={() => {
                  setSelectedLanguage(language);
                  setShowModal(false);
                }}
              >
                <Text className='text-base'>{t('cancel', { ns: 'common' })}</Text>
              </TouchableOpacity>

              <TouchableOpacity className='px-6 py-3 rounded-full bg-brand' onPress={handleConfirm}>
                <Text className='text-base text-white'>{t('confirm', { ns: 'common' })}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
