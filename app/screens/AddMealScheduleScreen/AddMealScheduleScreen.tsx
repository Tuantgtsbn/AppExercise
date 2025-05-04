import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../HealthOverviewScreen/components/Header';
import { useNavigation } from 'expo-router';
import QuantityMealSelect from './components/quantityMealSelect';
import TimePicker from './components/datetimePicker';
import DatePicker from './components/datePicker';
import RepeatSelector from './components/repeatSelector';
import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import AddScheduleButton from './components/addScheduleButton';

const AddMealScheduleScreen = () => {
  const navigation = useNavigation() as any;

  const route = useRoute<any>();
  const { foodId, foodName } = route.params;

  const [newMealSchedule, setNewMealSchedule] = useState<any>({
    foodId: foodId,
    quantity: 1,
    repeat: null,
    time: new Date()
  });

  const handleChange = (name: string, newValue: any) => {
    setNewMealSchedule((prev: any) => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = async () => {
    try {
      if (!foodId) return;

      const vietnamTime = new Date(new Date(newMealSchedule.time).getTime() + 7 * 60 * 60 * 1000);

      const response = await fetch(`http://${process.env.BACKEND_HOST}/api/meal-schedule`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...newMealSchedule,
          mealTime: newMealSchedule.time
        })
      });
      if (!response.ok) {
        throw new Error('Failed to submit meal schedule');
      }

      const result = await response.json();
      console.log('Meal schedule created:', result);

      navigation.navigate('MealSchedule');
    } catch (error) {
      console.error('Error fetching new foods:', error);
    }
  };

  console.log('meal schedule: ', newMealSchedule);

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 20 }}>
      <Header title='Thêm vào lịch ăn' />

      <ScrollView style={styles.container}>
        <View
          style={{
            gap: 30,
            paddingTop: 20,
            borderRadius: 50,
            backgroundColor: '#FFFFFF'
          }}
        >
          <View style={{ gap: 20 }}>
            <Text style={{ color: '#1D1617', fontSize: 16, fontWeight: 'bold' }}>
              Chi tiết bữa ăn
            </Text>

            <View style={{ gap: 10 }}>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 15,
                  borderRadius: 15,
                  backgroundColor: '#F7F8F8'
                }}
              >
                <Image source={require('../../../assets/images/barbel-icon.png')} />
                <Text style={{ flex: 1, color: '#7B6F72', fontSize: 14 }}>Món ăn</Text>
                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                  <Text style={{ color: '#7B6F72', fontSize: 14 }}>{foodName}</Text>
                  <Image source={require('../../../assets/images/arrow-right-icon.png')} />
                </View>
              </View>
              <QuantityMealSelect />
              <RepeatSelector />
            </View>
          </View>

          <View style={{ gap: 20 }}>
            <Text style={{ color: '#1D1617', fontSize: 16, fontWeight: 'bold' }}>Thời gian</Text>

            <TimePicker mealTime={newMealSchedule.time} handleChange={handleChange} />

            <DatePicker mealTime={newMealSchedule.time} handleChange={handleChange} />
          </View>
        </View>
      </ScrollView>

      <AddScheduleButton handleSubmit={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 10
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  text_lg: { color: '#7B6F72', fontSize: 16, fontWeight: 'semibold' },
  text_sm: { color: '#7B6F72', fontSize: 12 },
  red_bar: {
    height: 10,
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50
  },
  blue_bar: {
    height: 10,
    backgroundColor: 'rgba(152, 186, 254, 1)',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 2
  }
});

export default AddMealScheduleScreen;
