import { View, Text, Image, Modal, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import classNames from 'classnames';
const languages = [
  {
    label: 'Tiếng Việt',
    value: 'vi',
    src: require('@assets/images/FlagVietNam.png')
  },
  {
    label: 'Tiếng Anh',
    value: 'en',
    src: require('@assets/images/FlagEngland.png')
  }
];
export default function LanguageScreen() {
  const [language, setLanguage] = useState('vi');
  const [showModal, setShowModal] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageSelect = value => {
    setSelectedLanguage(value);
    setShowModal(true);
  };

  const handleConfirm = () => {
    setLanguage(selectedLanguage);
    setShowModal(false);
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
              Xác nhận thay đổi ngôn ngữ
            </Text>
            <Text className='text-center mb-6'>
              Bạn có chắc chắn muốn thay đổi ngôn ngữ sang{' '}
              {languages.find(lang => lang.value === selectedLanguage)?.label}?
            </Text>

            <View className='flex-row justify-center gap-4'>
              <TouchableOpacity
                className='px-6 py-3 rounded-full bg-gray-200'
                onPress={() => setShowModal(false)}
              >
                <Text className='text-base'>Hủy</Text>
              </TouchableOpacity>

              <TouchableOpacity className='px-6 py-3 rounded-full bg-brand' onPress={handleConfirm}>
                <Text className='text-base text-white'>Xác nhận</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
