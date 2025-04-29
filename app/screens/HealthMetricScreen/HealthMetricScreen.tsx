import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import HealthMetricSection from '../HealthOverviewScreen/layouts/HealthMetricSection';
import { useNavigation } from '@react-navigation/native';
import Header from '../HealthOverviewScreen/components/Header';

const HealthMetricScreen = () => {
  const navigation = useNavigation() as any;

  return (
    <ScrollView style={styles.container}>
      <Header title='Chỉ số sức khỏe' />

      <View style={styles.reminderCard}>
        <Image source={require('../../../assets/images/shedule.png')} />
        <View>
          <Text style={styles.reminderTitle}>Nhắc nhở</Text>
          <Text style={styles.reminderText}>Cập nhật tiếp vào ngày 8 - 7</Text>
        </View>
      </View>

      <View style={styles.updateCard}>
        <View>
          <Text style={styles.updateMessage}>Hãy cập nhật thông tin sức khỏe của bạn</Text>
          <TouchableOpacity
            style={styles.updateButton}
            onPress={() => navigation.navigate('HealthUpdate')}
          >
            <Text style={styles.updateButtonText}>Cập nhật</Text>
          </TouchableOpacity>
        </View>
        <Image source={require('../../../assets/images/schedule-man.png')} />
      </View>

      <View style={styles.compareCard}>
        <Text style={styles.compareText}>So sánh giữa các tháng</Text>
        <TouchableOpacity
          style={styles.compareButton}
          onPress={() => navigation.navigate('HealthCompare')}
        >
          <Text style={styles.compareButtonText}>So sánh</Text>
        </TouchableOpacity>
      </View>

      <HealthMetricSection />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 10
  },
  reminderCard: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    marginTop: 10,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 0, 0, 0.1)'
  },
  reminderTitle: {
    color: '#FF0000',
    fontSize: 12
  },
  reminderText: {
    color: '#1D1617',
    fontSize: 14,
    fontWeight: '500'
  },
  updateCard: {
    height: 137,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    padding: 20,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: 'rgba(152, 186, 234, 0.2)'
  },
  updateMessage: {
    width: 125,
    flexWrap: 'wrap',
    color: '#1D1617',
    fontSize: 12,
    fontWeight: '500'
  },
  updateButton: {
    width: 88,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: '#97B8FE'
  },
  updateButtonText: {
    color: '#FFFFFF',
    fontSize: 12
  },
  compareCard: {
    height: 57,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    padding: 20,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: 'rgba(152, 186, 234, 0.2)'
  },
  compareText: {
    color: '#1D1617',
    fontSize: 14,
    fontWeight: '500'
  },
  compareButton: {
    width: 88,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#97B8FE'
  },
  compareButtonText: {
    color: '#FFFFFF',
    fontSize: 12
  }
});

export default HealthMetricScreen;
