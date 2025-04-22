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
import { AntDesign } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import { format } from 'date-fns';
import DateTimePicker from '@react-native-community/datetimepicker';
import className from 'classnames';

import Toast from 'react-native-toast-message';
type MetricType = {
  unit: string;
  value: number;
};
type FormDataType = {
  nameDisplay: string;
  email: string;
  phone: string;
  height: MetricType;
  weight: MetricType;
  gender: 'male' | 'female' | 'other';
  dateOfBirth: string;
};
type Gender = 'male' | 'female' | 'other';
export default function EditProfile({ navigation }) {
  const [formData, setFormData] = useState<FormDataType>({
    nameDisplay: 'A',
    email: '',
    phone: '',
    height: {
      unit: 'cm',
      value: 0
    },
    weight: {
      unit: 'kg',
      value: 0
    },
    gender: 'male',
    dateOfBirth: new Date().toISOString()
  });
  console.log(formData);
  const [open, setOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState(formData.gender);
  // console.log(selectedGender);
  const [heightInput, setHeightInput] = useState(String(formData.height.value) || '');
  const [weightInput, setWeightInput] = useState(String(formData.weight.value) || '');
  const [genders, setGenders] = useState([
    { label: 'Nam', value: 'male' },
    { label: 'Nữ', value: 'female' },
    { label: 'Khác', value: 'other' }
  ]);
  const [dob, setDob] = useState(new Date(formData.dateOfBirth));
  const [showDatePicker, setShowDatePicker] = useState(false);
  const onDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setDob(selectedDate);
      setFormData({
        ...formData,
        dateOfBirth: format(selectedDate, 'yyyy-MM-dd')
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
  const handleEditProfile = async () => {
    if (!parseFloat(heightInput) || !parseFloat(weightInput)) {
      Toast.show({
        type: 'error',
        text1: 'Lỗi',
        text2: 'Vui lòng nhập đúng định dạng số'
      });
      return;
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
            <CustomHeader title='Chỉnh sửa thông tin' />
            <View className='w-[112px] h-[112px] justify-center items-center rounded-full bg-gray-300 mt-[35px]'>
              <AntDesign name='user' size={70} color='black' />
              <AntDesign name='camerao' size={24} color='black' />
            </View>
            <View className='px-[35px] mt-[16px]'>
              <Text className='font-bold text-[20px] my-[8px]'>Tên hiển thị</Text>
              <TextInput
                className='border border-gray-300 rounded-[8px] p-[10px]'
                placeholder='Tên hiển thị'
                value={formData.nameDisplay}
                onChangeText={text =>
                  setFormData({
                    ...formData,
                    nameDisplay: text
                  })
                }
              />
              <Text className='font-bold text-[20px] my-[8px]'>Số điện thoại</Text>
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
              <Text className='font-bold text-[20px] my-[8px]'>Email</Text>
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
                <Text className='font-bold text-[20px]'>Chiều cao</Text>
                <View className='flex-row bg-brand p-1 gap-2 rounded-lg'>
                  <TouchableOpacity
                    className={className('p-2 rounded-lg', {
                      'bg-white': formData.height.unit === 'cm'
                    })}
                    onPress={() =>
                      setFormData({
                        ...formData,
                        height: {
                          ...formData.height,
                          unit: 'cm'
                        }
                      })
                    }
                  >
                    <Text>CM</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className={className('p-2 rounded-lg', {
                      'bg-white': formData.height.unit === 'm'
                    })}
                    onPress={() =>
                      setFormData({
                        ...formData,
                        height: {
                          ...formData.height,
                          unit: 'm'
                        }
                      })
                    }
                  >
                    <Text>M</Text>
                  </TouchableOpacity>
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
                <Text className='font-bold text-[20px]'>Cân nặng</Text>
                <View className='flex-row bg-brand p-1 gap-2 rounded-lg'>
                  <TouchableOpacity
                    className={className('p-2 rounded-lg', {
                      'bg-white': formData.weight.unit === 'kg'
                    })}
                    onPress={() =>
                      setFormData({
                        ...formData,
                        weight: {
                          ...formData.weight,
                          unit: 'kg'
                        }
                      })
                    }
                  >
                    <Text>KG</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className={className('p-2 rounded-lg', {
                      'bg-white': formData.weight.unit === 'bound'
                    })}
                    onPress={() =>
                      setFormData({
                        ...formData,
                        weight: {
                          ...formData.weight,
                          unit: 'bound'
                        }
                      })
                    }
                  >
                    <Text>Bound</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TextInput
                className='border border-gray-300 rounded-[8px] p-[10px]'
                placeholder='Cân nặng'
                keyboardType='numeric'
                value={weightInput}
                onChangeText={setWeightInput}
              />
              <Text className='font-bold text-[20px] my-[8px]'>Giới tính</Text>
              <View style={{ zIndex: 1000 }} className=''>
                <DropDownPicker
                  open={open}
                  value={selectedGender}
                  items={genders}
                  setOpen={setOpen}
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
              <Text className='font-bold text-[20px] my-[8px]'>Ngày sinh</Text>
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
              <TouchableOpacity
                className='bg-primary rounded-full py-4 mt-8'
                onPress={handleEditProfile}
              >
                <Text className='text-white font-bold text-3xl text-center'>Lưu</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
