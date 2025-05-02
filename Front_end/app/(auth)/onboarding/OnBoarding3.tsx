import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import CircleProgress from '@/components/OnBoarding/CircleProgress';

export default function OnBoarding3({ navigation }) {
  return (
    <View className='flex-1 bg-white'>
      <Image source={require('@assets/images/OnBoarding2.png')} className='w-full h-[400px]' />
      <View className='flex-1 mt-[40px] mx-[40px]'>
        <Text className='text-3xl font-bold mb-2'>Ăn uống khoa học</Text>
        <Text className=' text-gray-500'>
          Hãy bắt đầu một chế độ ăn tốt cho sức khỏe. Chúng tôi sẽ cung cấp cho bạn các chế độ ăn
          phù hợp mỗi ngày.
        </Text>
      </View>
      <View className='items-end mb-10 mx-[40px]'>
        <CircleProgress progress={60}>
          <View className='absolute'>
            <TouchableOpacity
              className='w-[50px] h-[50px] bg-brand items-center justify-center rounded-full'
              onPress={() => navigation.navigate('boarding4')}
            >
              <MaterialIcons name='navigate-next' size={24} color='white' />
            </TouchableOpacity>
          </View>
        </CircleProgress>
      </View>
    </View>
  );
}
