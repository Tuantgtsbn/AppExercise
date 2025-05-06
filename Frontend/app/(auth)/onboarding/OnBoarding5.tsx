import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import CircleProgress from '@/components/OnBoarding/CircleProgress';

export default function OnBoarding5({ navigation }) {
  return (
    <View className='flex-1 bg-white'>
      <Image source={require('@assets/images/OnBoarding1.png')} className='w-full h-[400px]' />
      <View className='flex-1 mt-[40px] mx-[40px]'>
        <Text className='text-3xl font-bold mb-2'>Đặc biệt, rất tiện lợi</Text>
        <Text className=' text-gray-500'>
          Chúng tôi mang đến nhiều bài tập với nhiệp cấp độ khác nhau để bạn có thể tập luyện tại
          nhà hiệu quả.
        </Text>
      </View>
      <View className='items-end mb-10 mx-[40px]'>
        <CircleProgress progress={100}>
          <View className='absolute'>
            <TouchableOpacity
              className='w-[50px] h-[50px] bg-brand items-center justify-center rounded-full'
              onPress={() => navigation.navigate('LoginScreen')}
            >
              <MaterialIcons name='navigate-next' size={24} color='white' />
            </TouchableOpacity>
          </View>
        </CircleProgress>
      </View>
    </View>
  );
}
