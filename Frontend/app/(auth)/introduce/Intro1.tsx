import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Intro1 = ({ navigation }) => {
  return (
    <View className='flex-1 items-center justify-between bg-white'>
      <View className='mt-[40px] items-center'>
        <Text className='font-bold text-2xl'>Mục đích của bạn là gì ?</Text>
        <Text className='text-center w-[150px]'>Tôi sẽ xây dựng chương trình phù hợp cho bạn</Text>
      </View>
      <View className='flex-row justify-content-between'>
        <View className='bg-[#97B8FE] w-[275px] h-[478px] rounded-3xl items-center justify-center'>
          <Image
            style={{ width: 183, height: 290 }}
            source={require('@assets/images/Picture1IntroPage.png')}
          ></Image>
          <View className='gap-4 mt-4'>
            <Text className='text-white font-bold text-xl text-center'>Cải thiện dáng</Text>
            <Text className='text-white text-center w-[200px]'>
              Tôi có lượng mỡ cơ thể thấp và cần tăng thêm cơ bắp
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('intro2')}
        className='bg-blue-400 mb-[40px]  rounded-full w-[90%] py-4 mt-8 flex-row gap-1 items-center justify-center'
      >
        <Text className='text-white text-center font-2xl font-bold'>Tiếp tục</Text>
        <MaterialIcons name='navigate-next' size={24} color='white' />
      </TouchableOpacity>
    </View>
  );
};

export default Intro1;
