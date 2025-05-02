import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  Image,
  ActivityIndicator
} from 'react-native';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { supabase } from 'config/supabase';
import Toast from 'react-native-toast-message';

export default function CompleteProfile({ navigation, route }) {
  // State cho gender dropdown
  const { firstName, lastName, email, id } = route.params;
  const [loading, setLoading] = useState(false);
  // console.log(firstName, lastName, email);
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState(null);
  const [items, setItems] = useState([
    { label: 'Nam', value: 'male' },
    { label: 'Nữ', value: 'female' },
    { label: 'Khác', value: 'other' }
  ]);
  const [phone, setPhone] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [date, setDate] = useState(new Date());

  // State cho date picker
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };
  const handleSubmitProfile = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from('User').insert({
        user_id: id,
        email,
        first_name: firstName,
        last_name: lastName,
        phone,
        weight,
        height,
        gender,
        date_of_birth: format(date, 'yyyy-MM-dd')
      });
      console.log(data, error);
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigation.replace('intro1');
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Lỗi',
        text2: 'Vui lòng kiểm tra lại thông tin'
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <KeyboardAwareScrollView
      className='bg-white'
      contentContainerStyle={{
        paddingHorizontal: 24,
        paddingTop: 40,
        paddingBottom: 40
      }}
      enableOnAndroid={true}
      enableResetScrollToCoords={false}
      keyboardShouldPersistTaps='handled'
      showsVerticalScrollIndicator={false}
    >
      {/* Placeholder hình vuông đen */}
      <View className='mx-auto mb-6'>
        <Image
          style={{ width: 375, height: 350 }}
          source={require('@assets/images/PictureProfileIntroPage.png')}
        />
      </View>

      <Text className='text-2xl font-semibold text-center mb-2'>Hãy hoàn thành hồ sơ cá nhân</Text>

      <Text className='text-gray-500 text-center mb-8'>Nó sẽ giúp chúng tôi hiểu hơn về bạn!</Text>

      {/* Form inputs */}
      <View className='gap-4'>
        {/* Gender Selection với DropDownPicker */}
        <View style={{ zIndex: 1000 }} className=''>
          <DropDownPicker
            open={open}
            value={gender}
            items={items}
            setOpen={setOpen}
            setValue={setGender}
            setItems={setItems}
            placeholder='Choose Gender'
            style={{
              borderColor: '#e5e7eb',
              borderRadius: 12,
              paddingHorizontal: 16,
              paddingVertical: 12,
              backgroundColor: '#f7f8f8'
            }}
            textStyle={{
              color: '#9ca3af'
            }}
            dropDownContainerStyle={{
              borderColor: '#e5e7eb',
              borderRadius: 12
            }}
            theme='LIGHT'
          />
        </View>
        <View className='flex-row items-center'>
          <View className='flex-1 border border-gray-200 rounded-xl px-4 py-2 bg-[#f7f8f8]'>
            <TextInput
              value={phone}
              onChangeText={setPhone}
              placeholder='Your Phone'
              className='text-gray-400'
              keyboardType='numeric'
            />
          </View>
        </View>

        {/* Date of Birth với DatePicker */}
        <TouchableOpacity
          onPress={showDatePickerModal}
          className='border border-gray-200 rounded-xl p-4 bg-[#f7f8f8]'
        >
          <Text className='text-gray-400'>{format(date, 'dd/MM/yyyy')}</Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode='date'
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={onDateChange}
            maximumDate={new Date()}
          />
        )}

        {/* Weight Input */}
        <View className='flex-row items-center'>
          <View className='flex-1 border border-gray-200 rounded-xl px-4 py-2 bg-[#f7f8f8]'>
            <TextInput
              value={weight}
              onChangeText={setWeight}
              placeholder='Your Weight'
              className='text-gray-400'
            />
          </View>
          <View className='px-4 bg-purple-200 ml-2 rounded-xl items-center justify-center h-[52px]'>
            <Text className='text-purple-500'>KG</Text>
          </View>
        </View>

        {/* Height Input */}
        <View className='flex-row items-center'>
          <View className='flex-1 border border-gray-200 rounded-xl px-4 py-2 bg-[#f7f8f8]'>
            <TextInput
              value={height}
              onChangeText={setHeight}
              placeholder='Your Height'
              className='text-gray-400'
            />
          </View>
          <View className='px-4 bg-purple-200 ml-2 rounded-xl items-center justify-center h-[52px]'>
            <Text className='text-purple-500'>CM</Text>
          </View>
        </View>
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        // disabled={loading}
        onPress={handleSubmitProfile}
        className='bg-blue-400 rounded-full py-4 mt-8 flex-row gap-1 items-center justify-center'
      >
        <Text className='text-white text-center font-2xl font-bold'>Tiếp tục</Text>
        <MaterialIcons name='navigate-next' size={24} color='white' />
        {loading && <ActivityIndicator size='small' color='white' />}
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
}
