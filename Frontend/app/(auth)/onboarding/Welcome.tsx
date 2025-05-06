import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Welcome({ navigation }) {
  useEffect(() => {
    // Kiểm tra xem người dùng đã từng vào app chưa
    checkFirstTime();
  }, []);
  const checkFirstTime = async () => {
    try {
      const isActive = await AsyncStorage.getItem('isActive');

      if (isActive === 'true') {
        // Nếu đã từng vào app, chuyển thẳng đến màn hình đăng nhập
        navigation.replace('LoginScreen');
      } else {
        // Nếu lần đầu vào app, hiển thị màn hình giới thiệu
        await AsyncStorage.setItem('isActive', 'true');
      }
    } catch (error) {
      console.error('Lỗi khi kiểm tra trạng thái:', error);
    }
  };
  return (
    <View className='flex-1'>
      {/* Khối chữ ở giữa màn hình */}
      <View className='flex-1 items-center justify-center'>
        <View className='flex-row items-center'>
          <Text className='text-[30px] font-bold'>Fitnest</Text>
          <Text className='text-[40px] font-bold text-brand'>X</Text>
        </View>
        <Text>Everybody Can Train</Text>
      </View>

      {/* Nút ở dưới cùng */}
      <View className='px-4 mb-10'>
        <TouchableOpacity
          onPress={() => navigation.navigate('boarding1')}
          className='bg-blue-400 rounded-full w-full py-4 flex-row gap-1 items-center justify-center'
        >
          <Text className='text-white text-center font-2xl font-bold'>Tiếp tục</Text>
          <MaterialIcons name='navigate-next' size={24} color='white' />
        </TouchableOpacity>
      </View>
    </View>
  );
}
