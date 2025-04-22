import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);
  console.log(navigation);
  const handleNavigateLogin = () => {
    // Xử lý đăng nhập
    navigation.navigate('LoginScreen');
  };

  const handleRegister = () => {
    navigation.navigate('StackIntroductionScreen');
  };

  return (
    <View className='flex-1 justify-between items-center bg-white'>
      <View className='items-center mt-[40px]'>
        <Text className='text-xl'>Thân mến</Text>
        <Text className='text-2xl font-bold w-[160px] text-center'>Tạo tài khoản</Text>
        <View className='gap-4 mt-[40px]'>
          <View className='flex-row gap-2 px-2 py-2 bg-[#F7F8F8] rounded-lg w-90 items-center'>
            <AntDesign name='user' size={24} color='black' />
            <TextInput
              placeholder='First Name'
              value={firstName}
              onChangeText={setFirstName}
              keyboardType='default'
              autoCapitalize='none'
              className='px-2 py-2 w-80'
            />
          </View>
          <View className='flex-row gap-2 px-2 py-2 bg-[#F7F8F8] rounded-lg w-90 items-center'>
            <AntDesign name='user' size={24} color='black' />
            <TextInput
              placeholder='Last name'
              value={lastName}
              onChangeText={setLastName}
              keyboardType='default'
              autoCapitalize='none'
              className='px-2 py-2 w-80'
            />
          </View>
          <View className='flex-row gap-2 px-2 py-2 bg-[#F7F8F8] rounded-lg w-90 items-center'>
            <Fontisto name='email' size={24} color='black' />
            <TextInput
              placeholder='Email'
              value={email}
              onChangeText={setEmail}
              keyboardType='email-address'
              autoCapitalize='none'
              className='px-2 py-2 w-80'
            />
          </View>
          <View className='flex-row gap-2 px-2 py-2 bg-[#F7F8F8] rounded-lg w-90 items-center'>
            <AntDesign name='lock' size={24} color='black' />
            <TextInput
              placeholder='Password'
              value={password}
              onChangeText={setPassword}
              keyboardType='default'
              autoCapitalize='none'
              className='px-2 py-2 w-80'
              secureTextEntry={!isShowPassword}
            />
            {isShowPassword ? (
              <Feather
                name='eye'
                size={24}
                color='black'
                onPress={() => setIsShowPassword(!isShowPassword)}
              />
            ) : (
              <Feather
                name='eye-off'
                size={24}
                color='black'
                onPress={() => setIsShowPassword(!isShowPassword)}
              />
            )}
          </View>
          <View className='flex-row gap-2 px-2 py-2 bg-[#F7F8F8] rounded-lg w-90 items-center'>
            <AntDesign name='lock' size={24} color='black' />
            <TextInput
              placeholder='Confirm Password'
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              keyboardType='default'
              autoCapitalize='none'
              className='px-2 py-2 w-80'
            />
          </View>
        </View>
        <View className='mt-4'>
          <Text className='text-center w-80'>
            Bạn sẽ phải chấp nhận điều khoản và chính sách của chúng tôi
          </Text>
        </View>
      </View>

      <View className='mb-[40px]'>
        <View className='w-80'>
          <TouchableOpacity
            className='bg-[#97B8FE] px-2 py-4 rounded-full mt-4 w-full flex-row gap-4 justify-center'
            onPress={handleRegister}
          >
            <MaterialIcons name='login' size={24} color='white' />
            <Text className='text-center text-white font-bold text-xl'>Đăng ký</Text>
          </TouchableOpacity>
        </View>
        <View className='flex-row gap-2 justify-center items-center w-80 mt-6'>
          <View className='flex-1 h-[1px] bg-gray-400'></View>
          <Text className=''>Hoặc</Text>
          <View className='flex-1 h-[1px] bg-gray-400'></View>
        </View>
        <View className='mt-4'>
          <View className='flex-row gap-20 justify-center'>
            <TouchableOpacity className='border border-solid border-gray-400 rounded-2xl justify-center items-center p-4'>
              <Image
                className='w-[30px] h-[30px]'
                source={require('@assets/images/google-logo.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity className='border border-solid border-gray-400 rounded-2xl justify-center items-center p-4'>
              <Image
                className='w-[30px] h-[30px]'
                source={require('@assets/images/facebook-logo.png')}
              />
            </TouchableOpacity>
          </View>
          <View className='mt-4 flex-row gap-2 justify-center items-center'>
            <Text className='text-center'>Bạn đã có tài khoản ?</Text>
            <TouchableOpacity className='' onPress={handleNavigateLogin}>
              <Text className='text-center underline text-brand'>Đăng nhập ngay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
