import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import HealthMetric from '../HealthOverviewScreen/components/HealthMetric';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { ScrollView } from 'react-native-gesture-handler';
import AnimatedToggleButton from '@/components/ui/AnimatedToggleButton';
import Card from '@/components/ui/Card';
const dataMetric = [
  {
    label: 'Chiều cao',
    value: '180cm'
  },
  {
    label: 'Cân nặng',
    value: '75kg'
  },
  {
    label: 'Tuổi',
    value: '22'
  }
];
const ProfileScreen = ({ navigation }) => {
  const [isOnNotification, setOnNotification] = useState(false);
  return (
    <ScrollView className='flex-1 px-[30px]  bg-white' showsVerticalScrollIndicator={false}>
      <View>
        <Text className='font-bold text-2xl text-center'>Thông tin cá nhân</Text>
      </View>
      <View className='flex-row justify-between items-center mt-[35px]'>
        <View className='flex-row gap-3'>
          <View className='w-[40px] h-[40px] bg-brand rounded-full justify-center items-center'>
            <AntDesign name='user' size={24} color='black' />
          </View>
          <View>
            <Text className='font-semibold'>Stefani Wong</Text>
            <Text>Lose a Fat Program</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            className='px-4 py-2 w-[100px] rounded-full bg-brand'
            onPress={() => navigation.navigate('EditProfile')}
          >
            <Text className='text-white text-center'>Chỉnh sửa</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className='flex-row justify-between mt-[30px]'>
        {dataMetric.map((item, index) => (
          <HealthMetric key={index} item={item} />
        ))}
      </View>
      <Card className='mt-[40px]'>
        <Text className='font-bold text-xl'>Tài khoản</Text>
        <View className='flex-row justify-between items-center'>
          <View className='flex-row gap-2 items-center'>
            <AntDesign name='user' size={24} color='#92A3FD' />
            <Text>Thông tin cá nhân</Text>
          </View>
          <MaterialIcons name='navigate-next' size={24} color='black' />
        </View>
        <View className='flex-row justify-between items-center'>
          <View className='flex-row gap-2 items-center'>
            <MaterialCommunityIcons name='podium-gold' size={24} color='#92A3FD' />
            <Text>Thành tích</Text>
          </View>
          <MaterialIcons name='navigate-next' size={24} color='black' />
        </View>
        <View className='flex-row justify-between items-center'>
          <View className='flex-row gap-2 items-center'>
            <Ionicons name='analytics' size={24} color='#92A3FD' />
            <Text>Lịch sử luyện tập</Text>
          </View>
          <MaterialIcons name='navigate-next' size={24} color='black' />
        </View>
        <View className='flex-row justify-between items-center'>
          <View className='flex-row gap-2 items-center'>
            <Feather name='watch' size={24} color='#92A3FD' />
            <Text>Dữ liệu sức khỏe từ đồng hồ thông minh</Text>
          </View>
          <MaterialIcons name='navigate-next' size={24} color='black' />
        </View>
      </Card>
      <Card className='mt-[35px]'>
        <Text className='text-xl font-bold'>Thông báo</Text>
        <View className='flex-row justify-between items-center'>
          <View className='flex-row gap-2 items-center'>
            <Feather name='bell' size={24} color='black' />
            <Text>Lịch luyện tập</Text>
          </View>
          <AnimatedToggleButton
            isEnabled={isOnNotification}
            onToggle={() => setOnNotification(!isOnNotification)}
          />
        </View>
      </Card>
      <Card className='mt-[35px] mb-[30px]'>
        <Text className='text-xl font-bold'>Khác</Text>
        <View className='flex-row justify-between items-center'>
          <View className='flex-row gap-2 items-center'>
            <Feather name='watch' size={24} color='#92A3FD' />
            <Text>Kết nối đồng hồ thông minh</Text>
          </View>
          <MaterialIcons name='navigate-next' size={24} color='black' />
        </View>
        <View className='flex-row justify-between items-center'>
          <TouchableOpacity
            onPress={() => navigation.navigate('SettingIndex')}
            className='flex-row justify-between w-full items-center'
          >
            <View className='flex-row gap-2 items-center'>
              <Feather name='settings' size={24} color='#92A3FD' />
              <Text>Cài đặt</Text>
            </View>
            <MaterialIcons name='navigate-next' size={24} color='black' />
          </TouchableOpacity>
        </View>
      </Card>
    </ScrollView>
  );
};

export default ProfileScreen;
