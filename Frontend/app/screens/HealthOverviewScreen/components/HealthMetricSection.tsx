import React from 'react';
import { View } from 'react-native';
import HealthMetric from './HealthMetric';

const healthData = [
  { label: 'Chiều cao', value: '180cm' },
  { label: 'Cân nặng', value: '75kg' },
  { label: 'Tuổi', value: '22' },
  { label: 'LBM', value: '55kg' },
  { label: 'Abs', value: '8%' }
];

const HealthMetricSection = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 15,
        marginTop: 2
      }}
    >
      {healthData.map((item, index) => (
        <HealthMetric key={index} item={item} />
      ))}
    </View>
  );
};

export default HealthMetricSection;
