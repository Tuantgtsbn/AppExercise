import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUp } from 'redux/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
import { RootState } from 'redux/store';
import { useTranslation } from 'react-i18next';

const RegisterScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const schema = useMemo(
    () =>
      yup.object().shape({
        firstName: yup
          .string()
          .required(t('emtyErrorFirstName', { ns: 'authScreen' }))
          .min(2, t('shortErrorFirstName', { ns: 'authScreen' })),
        lastName: yup
          .string()
          .required(t('emptyErrorLastName', { ns: 'authScreen' }))
          .min(2, t('shortErrorLastName', { ns: 'authScreen' })),
        email: yup
          .string()
          .required(t('emptyErrorEmail', { ns: 'authScreen' }))
          .email(t('invalidEmail', { ns: 'authScreen' })),
        password: yup
          .string()
          .required(t('emptyErrorPassword', { ns: 'authScreen' }))
          .min(6, t('passwordTooShort', { ns: 'authScreen' })),
        confirmPassword: yup
          .string()
          .required(t('emptyErrorConfirmPassword', { ns: 'authScreen' }))
          .oneOf([yup.ref('password')], t('passwordsDontMatch', { ns: 'authScreen' }))
      }),
    [t]
  );
  type FormData = yup.InferType<typeof schema>;
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.auth);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });
  const handleNavigateLogin = () => {
    // Xử lý đăng nhập
    navigation.navigate('LoginScreen');
  };

  const onSubmit = async (data: FormData) => {
    try {
      const {
        user: { id }
      } = await dispatch(signUp({ ...data, role: 'user' })).unwrap();
      console.log(id);
      Toast.show({
        type: 'success',
        text1: t('signInSuccess', { ns: 'authScreen' }),
        text2: t('signInSuccessText', { ns: 'authScreen' })
      });
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigation.replace('StackIntroductionScreen', {
        screen: 'completeProfile',
        params: { firstName: data.firstName, lastName: data.lastName, email: data.email, id }
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: t('registerFailed', { ns: 'authScreen' }),
        text2: t('registerFailedText', { ns: 'authScreen' })
      });
    }
  };

  return (
    <View className='flex-1 justify-between items-center bg-white'>
      <View className='items-center mt-[40px]'>
        <Text className='text-xl'>{t('dear', { ns: 'authScreen' })}</Text>
        <Text className='text-2xl font-bold w-[160px] text-center'>
          {t('welcomeRegister', { ns: 'authScreen' })}
        </Text>
        <View className='gap-4 mt-[40px]'>
          <View className='flex-row gap-2 px-2 py-2 bg-[#F7F8F8] rounded-lg w-90 items-center'>
            <AntDesign name='user' size={24} color='black' />
            <Controller
              control={control}
              name='firstName'
              render={({ field: { onChange, value } }) => (
                <TextInput
                  placeholder='First name'
                  value={value}
                  onChangeText={onChange}
                  keyboardType='default'
                  autoCapitalize='none'
                  className='px-2 py-2 w-80'
                />
              )}
            />
          </View>
          {errors.firstName && (
            <Text className='text-red-500 ml-2 mt-1'>{errors.firstName.message}</Text>
          )}
          <View className='flex-row gap-2 px-2 py-2 bg-[#F7F8F8] rounded-lg w-90 items-center'>
            <AntDesign name='user' size={24} color='black' />
            <Controller
              control={control}
              name='lastName'
              render={({ field: { onChange, value } }) => (
                <TextInput
                  placeholder='Last name'
                  value={value}
                  onChangeText={onChange}
                  keyboardType='default'
                  autoCapitalize='none'
                  className='px-2 py-2 w-80'
                />
              )}
            />
          </View>
          {errors.lastName && (
            <Text className='text-red-500 ml-2 mt-1'>{errors.lastName.message}</Text>
          )}
          <View className='flex-row gap-2 px-2 py-2 bg-[#F7F8F8] rounded-lg w-90 items-center'>
            <Fontisto name='email' size={24} color='black' />
            <Controller
              control={control}
              name='email'
              render={({ field: { onChange, value } }) => (
                <TextInput
                  placeholder='Email'
                  value={value}
                  onChangeText={onChange}
                  keyboardType='email-address'
                  autoCapitalize='none'
                  className='px-2 py-2 w-80'
                />
              )}
            />
          </View>
          {errors.email && <Text className='text-red-500 ml-2 mt-1'>{errors.email.message}</Text>}
          <View className='flex-row gap-2 px-2 py-2 bg-[#F7F8F8] rounded-lg w-90 items-center'>
            <AntDesign name='lock' size={24} color='black' />
            <Controller
              control={control}
              name='password'
              render={({ field: { onChange, value } }) => (
                <TextInput
                  placeholder='Password'
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry={!isShowPassword}
                  keyboardType='default'
                  autoCapitalize='none'
                  className='px-2 py-2 w-80'
                />
              )}
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

          {errors.password && (
            <Text className='text-red-500 ml-2 mt-1'>{errors.password.message}</Text>
          )}
          <View className='flex-row gap-2 px-2 py-2 bg-[#F7F8F8] rounded-lg w-90 items-center'>
            <AntDesign name='lock' size={24} color='black' />
            <Controller
              control={control}
              name='confirmPassword'
              render={({ field: { onChange, value } }) => (
                <TextInput
                  placeholder='Confirm Password'
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry={!isShowPassword}
                  keyboardType='default'
                  autoCapitalize='none'
                  className='px-2 py-2 w-80'
                />
              )}
            />
          </View>
          {errors.confirmPassword && (
            <Text className='text-red-500 ml-2 mt-1'>{errors.confirmPassword.message}</Text>
          )}
        </View>
        <View className='mt-4'>
          <Text className='text-center w-80'>{t('acceptPolicy', { ns: 'authScreen' })}</Text>
        </View>
      </View>

      <View className='mb-[40px]'>
        <View className='w-80'>
          <TouchableOpacity
            className='bg-[#97B8FE] px-2 py-4 rounded-full mt-4 w-full flex-row gap-4 justify-center'
            onPress={handleSubmit(onSubmit)}
          >
            <MaterialIcons name='login' size={24} color='white' />
            <Text className='text-center text-white font-bold text-xl'>
              {t('signUp', { ns: 'authScreen' })}
            </Text>
            {loading && <ActivityIndicator size='small' color='white' />}
          </TouchableOpacity>
        </View>
        <View className='flex-row gap-2 justify-center items-center w-80 mt-6'>
          <View className='flex-1 h-[1px] bg-gray-400'></View>
          <Text className=''>{t('orContinueWith', { ns: 'authScreen' })}</Text>
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
            <Text className='text-center'>{t('alreadyHaveAccount', { ns: 'authScreen' })}</Text>
            <TouchableOpacity className='' onPress={handleNavigateLogin}>
              <Text className='text-center underline text-brand'>
                {t('signIn', { ns: 'authScreen' })}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
