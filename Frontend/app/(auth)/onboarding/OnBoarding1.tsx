import { View, Image, TouchableOpacity } from 'react-native';
import { Text } from '@/components/ui/Text';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import CircleProgress from '@/components/OnBoarding/CircleProgress';

export default function OnBoarding1({ navigation }) {
  return (
    <View className='flex-1 bg-white'>
      <Image source={require('@assets/images/OnBoarding1.png')} className='w-full h-[400px]' />
      <View className='flex-1 mt-[40px] mx-[40px]'>
        <Text className='text-3xl font-bold mb-2'>Theo dõi mục tiêu cá nhân</Text>
        <Text className=' text-gray-500'>
          Đừng lo nếu bạn có vấn đề về sức khỏe. Chúng tôi có thể giúp bạn đạt được mục tiêu và theo
          dõi mục tiêu của bạn.
        </Text>
      </View>
      <View className='items-end mb-10 mx-[40px]'>
        <CircleProgress progress={20}>
          <View className='absolute'>
            <TouchableOpacity
              className='w-[50px] h-[50px] bg-brand items-center justify-center rounded-full'
              onPress={() => navigation.navigate('boarding2')}
            >
              <MaterialIcons name='navigate-next' size={24} color='white' />
            </TouchableOpacity>
          </View>
        </CircleProgress>
      </View>
    </View>
  );
}
