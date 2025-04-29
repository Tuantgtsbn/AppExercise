import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const healthData = [
  { label: 'Chiều cao', value: '180cm' },
  { label: 'Cân nặng', value: '75kg' },
  { label: 'Tuổi', value: '22' },
  { label: 'LBM', value: '55kg' },
  { label: 'Abs', value: '8%' }
];

const HealthMetricSection = () => {
  const navigation = useNavigation() as any;
  return (
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
        <TouchableOpacity onPress={() => navigation.navigate('HealthMetric')}>
          <Text
            style={{
              color: '#ADA4A5',
              fontSize: 12,
              fontWeight: 'medium'
            }}
          >
            Xem thêm
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 15,
          marginTop: 4
        }}
      >
        {healthData.map((item, index) => (
          <View
            key={index}
            style={{
              width: 95,
              height: 65,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 16,
              backgroundColor: '#ffffff',
              shadowColor: '#000',
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity: 0.3,
              shadowRadius: 6,
              elevation: 3
            }}
          >
            <Text
              style={{
                color: '#9DCEFF',
                fontSize: 14,
                fontWeight: 'medium'
              }}
            >
              {item.value}
            </Text>
            <Text
              style={{
                color: '#7B6F72',
                fontSize: 12
              }}
            >
              {item.label}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default HealthMetricSection;
