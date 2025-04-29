import React from 'react';
import { ScrollView } from 'react-native';

import Header from './components/Header';
import HealthMetricSection from './layouts/HealthMetricSection';
import WorkoutProgressSection from './layouts/WorkProgressSection';
import MealPlanSection from './layouts/MealPlanSection';

const HealthOverviewScreen = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        paddingTop: 10
      }}
    >
      // Header
      <Header title='Tổng quan sức khỏe' />
      <HealthMetricSection />
      <WorkoutProgressSection />
      <MealPlanSection />
    </ScrollView>
  );
};

export default HealthOverviewScreen;
