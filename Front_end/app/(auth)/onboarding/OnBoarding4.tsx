import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import CircleProgress from '@/components/OnBoarding/CircleProgress';

export default function OnBoarding4({ navigation }) {
  return (
    <View className='flex-1 bg-white'>
      <Image source={require('@assets/images/OnBoarding4.png')} className='w-full h-[400px]' />
      <View className='flex-1 mt-[40px] mx-[40px]'>
        <Text className='text-3xl font-bold mb-2'>Cải thiện giấc ngủ</Text>
        <Text className=' text-gray-500'>
          Cải thiện chế độ giấc ngủ của bạn, mang đến cho bạn những giấc ngủ chất lượng, mỗi sáng
          thức dậy bạn tràn đầy sức sống.
        </Text>
      </View>
      <View className='items-end mb-10 mx-[40px]'>
        <CircleProgress progress={80}>
          <View className='absolute'>
            <TouchableOpacity
              className='w-[50px] h-[50px] bg-brand items-center justify-center rounded-full'
              onPress={() => navigation.navigate('boarding5')}
            >
              <MaterialIcons name='navigate-next' size={24} color='white' />
            </TouchableOpacity>
          </View>
        </CircleProgress>
      </View>
    </View>
  );
}
