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
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { useTranslation } from 'react-i18next';
const ProfileScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [isOnNotification, setOnNotification] = useState(false);
  const { height, weight, date_of_birth, first_name, last_name, email, profile_img_url } =
    useSelector((state: RootState) => state.auth.detailUser);
  const dataMetric = [
    {
      label: t('height', { ns: 'profileScreen' }),
      value: `${height}cm`
    },
    {
      label: t('weight', { ns: 'profileScreen' }),
      value: `${weight}kg`
    },
    {
      label: t('age', { ns: 'profileScreen' }),
      value: `${new Date().getFullYear() - new Date(date_of_birth).getFullYear() || 1}`
    }
  ];
  return (
    <ScrollView className='flex-1 px-[30px]  bg-white' showsVerticalScrollIndicator={false}>
      <View>
        <Text className='font-bold text-2xl text-center'>
          {t('personalInfo', { ns: 'profileScreen' })}
        </Text>
      </View>
      <View className='flex-row justify-between items-center mt-[35px]'>
        <View className='flex-row gap-3'>
          <View className='w-[40px] h-[40px] bg-gray-300 rounded-full justify-center items-center'>
            <Image source={{ uri: profile_img_url }} className='w-full h-full rounded-full' />
          </View>
          <View>
            <Text className='font-semibold'>{`${first_name} ${last_name}`}</Text>
            <Text className='text-[12px]'>{email}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            className='px-4 py-2 w-[100px] rounded-full bg-brand'
            onPress={() => navigation.navigate('EditProfile')}
          >
            <Text className='text-white text-center'>{t('edit', { ns: 'common' })}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className='flex-row justify-between mt-[30px]'>
        {dataMetric.map((item, index) => (
          <HealthMetric key={index} item={item} />
        ))}
      </View>
      <Card className='mt-[40px]'>
        <Text className='font-bold text-xl'>{t('account', { ns: 'profileScreen' })}</Text>
        <View className='flex-row justify-between items-center'>
          <View className='flex-row gap-2 items-center'>
            <AntDesign name='user' size={24} color='#92A3FD' />
            <Text>{t('personalInfo', { ns: 'profileScreen' })}</Text>
          </View>
          <MaterialIcons name='navigate-next' size={24} color='black' />
        </View>
        <View className='flex-row justify-between items-center'>
          <View className='flex-row gap-2 items-center'>
            <MaterialCommunityIcons name='podium-gold' size={24} color='#92A3FD' />
            <Text>{t('achivement', { ns: 'profileScreen' })}</Text>
          </View>
          <MaterialIcons name='navigate-next' size={24} color='black' />
        </View>
        <View className='flex-row justify-between items-center'>
          <View className='flex-row gap-2 items-center'>
            <Ionicons name='analytics' size={24} color='#92A3FD' />
            <Text>{t('history', { ns: 'profileScreen' })}</Text>
          </View>
          <MaterialIcons name='navigate-next' size={24} color='black' />
        </View>
        <View className='flex-row justify-between items-center'>
          <View className='flex-row gap-2 items-center'>
            <Feather name='watch' size={24} color='#92A3FD' />
            <Text>{t('datafromWatch', { ns: 'profileScreen' })}</Text>
          </View>
          <MaterialIcons name='navigate-next' size={24} color='black' />
        </View>
      </Card>
      <Card className='mt-[35px]'>
        <Text className='text-xl font-bold'>{t('notification', { ns: 'profileScreen' })}</Text>
        <View className='flex-row justify-between items-center'>
          <View className='flex-row gap-2 items-center'>
            <Feather name='bell' size={24} color='#92A3FD' />
            <Text>{t('schedule', { ns: 'profileScreen' })}</Text>
          </View>
          <AnimatedToggleButton
            isEnabled={isOnNotification}
            onToggle={() => setOnNotification(!isOnNotification)}
          />
        </View>
      </Card>
      <Card className='mt-[35px] mb-[30px]'>
        <Text className='text-xl font-bold'>{t('other', { ns: 'profileScreen' })}</Text>
        <View className='flex-row justify-between items-center'>
          <View className='flex-row gap-2 items-center'>
            <Feather name='watch' size={24} color='#92A3FD' />
            <Text>{t('connectWatch', { ns: 'profileScreen' })}</Text>
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
              <Text>{t('setting', { ns: 'profileScreen' })}</Text>
            </View>
            <MaterialIcons name='navigate-next' size={24} color='black' />
          </TouchableOpacity>
        </View>
      </Card>
    </ScrollView>
  );
};

export default ProfileScreen;
