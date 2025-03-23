import React from 'react';
import { View, Text, ScrollView, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';
import HealthMetricSection from '../HealthOverviewScreen/components/HealthMetricSection';
import { useNavigation } from '@react-navigation/native';
import Header from '../HealthOverviewScreen/components/Header';

const HealthMetricScreen = () => {
  const navigation = useNavigation() as any;

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 30,
        paddingTop: 10
      }}
    >
      // Header
      <Header title={'Chỉ số sức khỏe'} />
      <View
        style={{
          width: '100%',
          height: 90,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          padding: 10,
          marginTop: 10,
          borderRadius: 22,
          backgroundColor: 'rgba(255, 0, 0, 0.1)'
        }}
      >
        <Image style={{}} source={require('../../../assets/images/shedule.png')} />

        <View style={{}}>
          <Text
            style={{
              color: '#FF0000',
              fontSize: 12
            }}
          >
            Nhắc nhở
          </Text>
          <Text
            style={{
              color: '#1D1617',
              fontSize: 14,
              fontWeight: 'medium'
            }}
          >
            Cập nhật tiếp vào ngày 8 - 7
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 137,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 10,
          padding: 20,
          marginTop: 20,
          borderRadius: 20,
          backgroundColor: 'rgba(152, 186, 234, 0.2)'
        }}
      >
        <View>
          <Text
            style={{
              width: 125,
              flexWrap: 'wrap',
              color: '#1D1617',
              fontSize: 12,
              fontWeight: 'medium'
            }}
          >
            Hãy cập nhật thông tin sức khỏe của bạn
          </Text>
          <View
            style={{
              width: 88,
              height: 28,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
              borderRadius: 50,
              backgroundColor: '#97B8FE'
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate('HealthUpdate')}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 12
                }}
              >
                Cập nhật
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Image style={{}} source={require('../../../assets/images/schedule-man.png')} />
      </View>
      <View
        style={{
          height: 57,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 10,
          padding: 20,
          marginTop: 20,
          borderRadius: 20,
          backgroundColor: 'rgba(152, 186, 234, 0.2)'
        }}
      >
        <Text
          style={{
            color: '#1D1617',
            fontSize: 14,
            fontWeight: 'medium'
          }}
        >
          So sánh giữa các tháng
        </Text>
        <TouchableOpacity
          style={{
            width: 88,
            height: 28,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            backgroundColor: '#97B8FE'
          }}
          onPress={() => navigation.navigate('HealthCompare')}
        >
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 12
            }}
          >
            So sánh
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 16
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              color: '#1D1617',
              fontSize: 16,
              fontWeight: 'bold',
              lineHeight: 26
            }}
          >
            Chỉ số sức khỏe
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('HealthMetric')}></TouchableOpacity>
        </View>

        <HealthMetricSection />
      </View>
    </ScrollView>
  );
};

export default HealthMetricScreen;
