import { View, Image, TouchableOpacity } from 'react-native';
import { Text } from '@/components/ui/Text';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import CircleProgress from '@/components/OnBoarding/CircleProgress';

export default function OnBoarding2({ navigation }) {
  return (
    <View className='flex-1 bg-white'>
      <Image source={require('@assets/images/OnBoarding2.png')} className='w-full h-[400px]' />
      <View className='flex-1 mt-[40px] mx-[40px]'>
        <Text className='text-3xl font-bold mb-2'>Đốt cháy</Text>
        <Text className=' text-gray-500'>Hãy tập luyện để đạt được các mục tiêu của bạn</Text>
      </View>
      <View className='items-end mb-10 mx-[40px]'>
        <CircleProgress progress={40}>
          <View className='absolute'>
            <TouchableOpacity
              className='w-[50px] h-[50px] bg-brand items-center justify-center rounded-full'
              onPress={() => navigation.navigate('boarding3')}
            >
              <MaterialIcons name='navigate-next' size={24} color='white' />
            </TouchableOpacity>
          </View>
        </CircleProgress>
      </View>
    </View>
  );
}
