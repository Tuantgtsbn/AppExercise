import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function ConnectSmartWatchScreen() {
  const { t } = useTranslation();

  const steps = [
    {
      title: 'Bật Internet',
      description: 'Đảm bảo Internet trên điện thoại và đồng hồ của bạn đã được bật',
      icon: 'cellular'
    },
    {
      title: 'Mở ứng dụng đồng hồ',
      description:
        'Mở ứng dụng chính thức của đồng hồ thông minh của bạn. Vào phần cài đặt, tìm kiếm và chọn kết nối với Google Fit',
      icon: 'watch'
    },
    {
      title: 'Kết nối Google Fit',
      description: 'Làm theo hướng dẫn trên ứng dụng đồng hồ để kết nối với Google Fit',
      icon: 'link'
    },
    {
      title: 'Cấp quyền',
      description:
        'Vào ứng dụng Health Connect, cấp quyền đọc, ghi dữ liệu cho Google Fit và ứng dụng của chúng tôi',
      icon: 'shield-checkmark'
    }
  ];

  return (
    <ScrollView className='flex-1 bg-white px-[30px]' showsVerticalScrollIndicator={false}>
      {/* Header Section */}
      <View className='mt-[20px] mb-[30px]'>
        <Text className='text-2xl font-bold text-center mb-2'>
          {t('connectWatch', { ns: 'profileScreen' })}
        </Text>
        <Text className='text-center text-gray-500'>
          Kết nối đồng hồ thông minh để theo dõi sức khỏe tốt hơn
        </Text>
      </View>

      {/* Image Section */}
      <View className='items-center mb-[30px]'>
        <Image
          source={require('@assets/images/smartwatch.png')}
          className='w-[200px] h-[200px]'
          resizeMode='contain'
        />
      </View>

      {/* Introduction Section */}
      <View className='mb-[30px] bg-[#F7F8F8] p-[20px] rounded-[15px]'>
        <Text className='text-xl font-bold mb-[10px]'>Giới thiệu tính năng</Text>
        <Text className='text-gray-600 mb-[5px]'>
          • Theo dõi nhịp tim, bước chân và calo đã đốt
        </Text>
        <Text className='text-gray-600 mb-[5px]'>• Phân tích chất lượng giấc ngủ của bạn</Text>
        <Text className='text-gray-600 mb-[5px]'>• Nhận thông báo về các mục tiêu tập luyện</Text>
        <Text className='text-gray-600'>• Đồng bộ hóa dữ liệu sức khỏe tự động</Text>
      </View>

      {/* Steps Section */}
      <View className='mb-[30px]'>
        <Text className='text-xl font-bold mb-[15px]'>Hướng dẫn kết nối</Text>
        {steps.map((step, index) => (
          <View key={index} className='flex-row mb-[20px]'>
            <View className='w-[50px] h-[50px] bg-brand rounded-full items-center justify-center mr-[15px]'>
              <Ionicons name={step.icon} size={24} color='white' />
            </View>
            <View className='flex-1'>
              <Text className='font-bold text-[16px] mb-[5px]'>{step.title}</Text>
              <Text className='text-gray-600'>{step.description}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Requirements Section */}
      <View className='mb-[30px] bg-[#F7F8F8] p-[20px] rounded-[15px]'>
        <Text className='text-xl font-bold mb-[10px]'>Yêu cầu bắt buộc</Text>
        <Text className='text-gray-600 mb-[5px]'>
          • Đồng hồ thông minh tương thích (Apple Watch, Samsung Galaxy Watch, Xiaomi Mi Band,
          Huawei, Garmin,v.v.) có hỗ trợ kết nối với Google Fit
        </Text>
        <Text className='text-gray-600 mb-[5px]'>
          • Ứng dụng chính thức của đồng hồ đã được cài đặt
        </Text>
        <Text className='text-gray-600 mb-[5px]'>
          • Cài đặt Google Fit và Health Connect trên điện thoại
        </Text>
        <Text className='text-gray-600'>
          • Cấp quyền truy cập dữ liệu sức khỏe cho Google Fit và ứng dụng của chúng tôi
        </Text>
      </View>
      {/* privacy policy */}
      <View className='mb-[30px] bg-[#F7F8F8] p-[20px] rounded-[15px]'>
        <Text className='text-xl font-bold mb-[10px]'>Cam kết bảo mật</Text>
        <Text className='text-gray-600 mb-[5px]'>
          • Chúng tôi cam kết bảo mật thông tin của bạn và không chia sẻ thông tin của bạn với bất
          kỳ bên thứ ba nào
        </Text>
        <Text className='text-gray-600 mb-[5px]'>
          • Chúng tôi chỉ sử dụng dữ liệu của bạn để cải thiện trải nghiệm của bạn và không sử dụng
          dữ liệu của bạn để mục đích thương mại nào
        </Text>
        <Text className='text-gray-600 mb-[5px]'>
          • Bạn có thể xem và quản lý dữ liệu của mình thông qua ứng dụng của chúng tôi và Google
          Fit
        </Text>
        <Text className='text-gray-600'>
          • Bạn có thể thay đổi quyền truy cập dữ liệu của mình bất kỳ lúc nào trên ứng dụng của
          chúng tôi hoặc trên ứng dụng Health Connect
        </Text>
      </View>

      {/* Connect Button */}
      <TouchableOpacity className='bg-brand rounded-full py-4 mb-[30px]'>
        <Text className='text-center text-white font-bold text-[16px]'>Kết nối ngay</Text>
      </TouchableOpacity>

      {/* Support Section */}
      <View className='mb-[30px] flex-row items-center justify-center'>
        <Text className='text-gray-500 mr-[5px]'>Cần trợ giúp?</Text>
        <TouchableOpacity>
          <Text className='text-brand font-bold'>Liên hệ hỗ trợ</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
