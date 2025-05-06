import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import React, { useState } from 'react';
import CustomHeader from '@/components/ui/CustomHeader';

import DropDownPicker from 'react-native-dropdown-picker';
import { format } from 'date-fns';
import DateTimePicker from '@react-native-community/datetimepicker';

import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import AvatarPicker from './Components/AvatarPicker';
import { updateUser } from 'redux/AuthSlice';
import { useTranslation } from 'react-i18next';
type FormDataType = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  height: string;
  weight: string;
  gender: string;
  fitness_level: string;
  date_of_birth: string;
};
type Gender = 'male' | 'female' | 'other';
export default function EditProfile({ navigation }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { id } = useSelector((state: RootState) => state.auth.user);
  const {
    first_name,
    last_name,
    email,
    phone,
    height,
    weight,
    fitness_level,
    gender,
    date_of_birth,
    profile_img_url
  } = useSelector((state: RootState) => state.auth.detailUser);
  console.log(typeof date_of_birth, date_of_birth);
  const [formData, setFormData] = useState<FormDataType>({
    first_name: first_name || '',
    last_name: last_name || '',
    email: email || '',
    phone: phone || '',
    height: String(height) || '',
    weight: String(weight) || '',
    fitness_level: fitness_level || 'beginner',
    gender: gender || 'male',

    date_of_birth: format(new Date(date_of_birth), 'yyyy-MM-dd')
  });
  console.log(formData);
  const [openGender, setOpenGender] = useState(false);
  const [openFitness, setOpenFitness] = useState(false);
  const [selectedGender, setSelectedGender] = useState(formData.gender);
  // console.log(selectedGender);
  const [heightInput, setHeightInput] = useState(formData.height);
  const [weightInput, setWeightInput] = useState(formData.weight);
  const [genders, setGenders] = useState([
    { label: t('male', { ns: 'common' }), value: 'male' },
    { label: t('female', { ns: 'common' }), value: 'female' },
    { label: t('other', { ns: 'common' }), value: 'other' }
  ]);
  const [fitnessLevel, setFitnessLevel] = useState([
    { label: t('beginner', { ns: 'common' }), value: 'beginner' },
    { label: t('intermediate', { ns: 'common' }), value: 'intermediate' },
    { label: t('advanced', { ns: 'common' }), value: 'advanced' },
    { label: t('professional', { ns: 'common' }), value: 'professional' }
  ]);
  const [selectedFitnessLevel, setSelectedFitnessLevel] = useState(formData.fitness_level);
  const [dob, setDob] = useState(new Date(formData.date_of_birth));
  const [showDatePicker, setShowDatePicker] = useState(false);
  const onDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setDob(selectedDate);
      setFormData({
        ...formData,
        date_of_birth: format(selectedDate, 'yyyy-MM-dd')
      });
    }
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };
  const handleGenderChange = (value: any) => {
    if (value) {
      setSelectedGender(value);
      setFormData(prev => ({
        ...prev,
        gender: value()
      }));
    }
  };
  const handleFitnessLevelChange = (value: any) => {
    if (value) {
      setSelectedFitnessLevel(value);
      setFormData(prev => ({
        ...prev,
        fitness_level: value()
      }));
    }
  };
  const handleEditProfile = async () => {
    if (!parseFloat(heightInput) || !parseFloat(weightInput)) {
      Toast.show({
        type: 'error',
        text1: t('failed', { ns: 'errors' }),
        text2: t('invalidNumber', { ns: 'errors' })
      });
      return;
    }
    try {
      await dispatch(
        updateUser({
          userId: id,
          updatedData: {
            ...formData,
            height: parseFloat(heightInput),
            weight: parseFloat(weightInput)
          }
        })
      ).unwrap();
      Toast.show({
        type: 'success',
        text1: t('success', { ns: 'errors' }),
        text2: 'Cập nhật thông tin thành công'
      });
      navigation.goBack();
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: t('failed', { ns: 'errors' }),
        text2: t('updateFailed', { ns: 'errors' })
      });
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView className='flex-1 bg-white'>
          <View className='mt-[16px] items-center'>
            <CustomHeader title={t('editProfile', { ns: 'profileScreen' })} />
            <AvatarPicker avatarURL={profile_img_url} />
            <View className='px-[35px] mt-[16px]'>
              <Text className='font-bold text-[20px] my-[8px]'>
                {t('firstName', { ns: 'common' })}
              </Text>
              <TextInput
                className='border border-gray-300 rounded-[8px] p-[10px]'
                placeholder='Tên hiển thị'
                value={formData.first_name}
                onChangeText={text =>
                  setFormData({
                    ...formData,
                    first_name: text
                  })
                }
              />
              <Text className='font-bold text-[20px] my-[8px]'>
                {t('lastName', { ns: 'common' })}
              </Text>
              <TextInput
                className='border border-gray-300 rounded-[8px] p-[10px]'
                placeholder='Tên hiển thị'
                value={formData.last_name}
                onChangeText={text =>
                  setFormData({
                    ...formData,
                    last_name: text
                  })
                }
              />
              <Text className='font-bold text-[20px] my-[8px]'>{t('phone', { ns: 'common' })}</Text>
              <TextInput
                className='border border-gray-300 rounded-[8px] p-[10px]'
                placeholder='Số điện thoại'
                value={formData.phone}
                onChangeText={text =>
                  setFormData({
                    ...formData,
                    phone: text
                  })
                }
              />
              <Text className='font-bold text-[20px] my-[8px]'>{t('email', { ns: 'common' })}</Text>
              <TextInput
                className='border border-gray-300 rounded-[8px] p-[10px]'
                placeholder='Email'
                value={formData.email}
                onChangeText={text =>
                  setFormData({
                    ...formData,
                    email: text
                  })
                }
              />
              <View className='flex-row justify-between my-[8px] items-center'>
                <Text className='font-bold text-[20px]'>{t('height', { ns: 'common' })}</Text>
                <View className='w-[30px] bg-brand p-1 rounded-lg'>
                  <Text className='text-center'>CM</Text>
                </View>
              </View>
              <TextInput
                className='border border-gray-300 rounded-[8px] p-[10px]'
                placeholder='Chiều cao'
                value={heightInput}
                keyboardType='numeric'
                onChangeText={setHeightInput}
              />
              <View className='flex-row justify-between my-[8px] items-center'>
                <Text className='font-bold text-[20px]'>{t('weight', { ns: 'common' })}</Text>
                <View className='w-[30px] bg-brand p-1 rounded-lg'>
                  <Text className='text-center'>KG</Text>
                </View>
              </View>
              <TextInput
                className='border border-gray-300 rounded-[8px] p-[10px]'
                placeholder='Cân nặng'
                keyboardType='numeric'
                value={weightInput}
                onChangeText={setWeightInput}
              />
              <Text className='font-bold text-[20px] my-[8px]'>
                {t('gender', { ns: 'common' })}
              </Text>
              <View style={{ zIndex: 1000 }} className=''>
                <DropDownPicker
                  open={openGender}
                  value={selectedGender}
                  items={genders}
                  setOpen={setOpenGender}
                  setValue={handleGenderChange}
                  setItems={setGenders}
                  placeholder='Choose Gender'
                  style={{
                    borderColor: '#e5e7eb',
                    borderRadius: 12,
                    paddingHorizontal: 16,
                    paddingVertical: 12
                  }}
                  textStyle={{
                    color: '#000'
                  }}
                  dropDownContainerStyle={{
                    borderColor: '#e5e7eb',
                    borderRadius: 12
                  }}
                  theme='LIGHT'
                />
              </View>
              <Text className='font-bold text-[20px] my-[8px]'>
                {t('dateOfBirth', { ns: 'common' })}
              </Text>
              <TouchableOpacity
                onPress={showDatePickerModal}
                className='border border-gray-200 rounded-xl p-4'
              >
                <Text className=''>{format(dob, 'yyyy-MM-dd')}</Text>
              </TouchableOpacity>

              {showDatePicker && (
                <DateTimePicker
                  value={dob}
                  mode='date'
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  onChange={onDateChange}
                  maximumDate={new Date()}
                />
              )}
              <Text className='font-bold text-[20px] my-[8px]'>
                {t('fitnessLevel', { ns: 'common' })}
              </Text>
              <View style={{ zIndex: 1000 }} className=''>
                <DropDownPicker
                  open={openFitness}
                  value={selectedFitnessLevel}
                  items={fitnessLevel}
                  setOpen={setOpenFitness}
                  setValue={handleFitnessLevelChange}
                  setItems={setFitnessLevel}
                  placeholder='Choose Fitness Level'
                  style={{
                    borderColor: '#e5e7eb',
                    borderRadius: 12,
                    paddingHorizontal: 16,
                    paddingVertical: 12
                  }}
                  textStyle={{
                    color: '#000'
                  }}
                  dropDownContainerStyle={{
                    borderColor: '#e5e7eb',
                    borderRadius: 12
                  }}
                  theme='LIGHT'
                />
              </View>
              <TouchableOpacity
                className='bg-brand rounded-full py-4 mt-8'
                onPress={handleEditProfile}
              >
                <Text className='text-white font-bold text-3xl text-center'>
                  {t('save', { ns: 'common' })}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
