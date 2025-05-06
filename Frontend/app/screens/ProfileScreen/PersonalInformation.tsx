import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import classNames from 'classnames';
export default function PersonalInformationScreen({ navigation }) {
  const { t } = useTranslation();
  const {
    first_name,
    last_name,
    email,
    phone,
    height,
    weight,
    gender,
    fitness_level,
    date_of_birth
  } = useSelector((state: RootState) => state.auth.detailUser);

  const formattedDate = date_of_birth ? format(new Date(date_of_birth), 'dd/MM/yyyy') : '';

  return (
    <ScrollView className='flex-1 bg-white' showsVerticalScrollIndicator={false}>
      <View className='px-[30px] py-[20px]'>
        <View className='mt-[20px]'>
          <InfoItem label={t('firstName', { ns: 'common' })} value={first_name} />
          <InfoItem label={t('lastName', { ns: 'common' })} value={last_name} />
          <InfoItem label='Email' value={email} />
          <InfoItem label={t('phone', { ns: 'common' })} value={phone} />
          <InfoItem className='capitalize' label={t('gender', { ns: 'common' })} value={gender} />
          <InfoItem label={t('dateOfBirth', { ns: 'common' })} value={formattedDate} />
          <InfoItem label={t('height', { ns: 'profileScreen' })} value={`${height} cm`} />
          <InfoItem label={t('weight', { ns: 'profileScreen' })} value={`${weight} kg`} />
          <InfoItem
            className='capitalize'
            label={t('fitnessLevel', { ns: 'common' })}
            value={fitness_level}
          />
        </View>
      </View>
      <TouchableOpacity
        className='bg-brand rounded-full py-4 mb-4'
        onPress={() => navigation.navigate('EditProfile')}
      >
        <Text className='text-center text-2xl font-bold text-white'>
          {t('edit', { ns: 'common' })}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const InfoItem = ({
  label,
  value,
  className = ''
}: {
  label: string;
  value: string;
  className?: string;
}) => (
  <View className='mb-[15px] border-b border-gray-200 pb-[10px]'>
    <Text className='text-gray-500 text-[14px]'>{label}</Text>
    <Text className={classNames('text-[16px] font-semibold mt-[5px]', className)}>
      {value || '-'}
    </Text>
  </View>
);
