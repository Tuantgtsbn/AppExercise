import { View, Text, Image, Modal, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

export default function ThemeScreen() {
  const { t } = useTranslation();
  const themes = [
    {
      label: t('light', { ns: 'settingsScreen' }),
      value: 'light'
    },
    {
      label: t('dark', { ns: 'settingsScreen' }),
      value: 'black'
    }
  ];
  const [theme, setLanguage] = useState('light');
  const [showModal, setShowModal] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(null);

  const handleThemeSelect = value => {
    setSelectedTheme(value);
    setShowModal(true);
  };

  const handleConfirm = () => {
    setLanguage(selectedTheme);
    setShowModal(false);
  };

  return (
    <View className='flex-1 bg-white px-[30px]'>
      {themes.map((item, index) => (
        <TouchableOpacity
          key={index}
          className='flex-row justify-between items-center mt-[35px]'
          onPress={() => handleThemeSelect(item.value)}
        >
          <View className='flex-row items-center gap-3'>
            <Text className='text-base'>{item.label}</Text>
          </View>
          <View
            className={classNames('w-[24px] h-[24px] rounded-full border-2 border-black', {
              'bg-brand': theme === item.value
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
              {t('themeChange', { ns: 'settingsScreen' })}
            </Text>
            <Text className='text-center mb-6'>
              {t('themeConfirmation', { ns: 'settingsScreen' })}{' '}
              {themes.find(lang => lang.value === selectedTheme)?.label}?
            </Text>

            <View className='flex-row justify-center gap-4'>
              <TouchableOpacity
                className='px-6 py-3 rounded-full bg-gray-200'
                onPress={() => setShowModal(false)}
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
