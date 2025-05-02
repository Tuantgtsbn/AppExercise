import Card from '@/components/ui/Card';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type HealthMetricProps = {
  item: {
    label: string;
    value: string;
  };
};

const HealthMetric = ({ item }: HealthMetricProps) => {
  return (
    <Card className='w-[95px] h-[65px] justify-center items-center'>
      <Text className='text-[14px] font-medium text-brand'>{item.value}</Text>
      <Text
        style={{
          color: '#7B6F72',
          fontSize: 12
        }}
        className='text-[12px] font-medium'
      >
        {item.label}
      </Text>
    </Card>
  );
};

export default HealthMetric;
