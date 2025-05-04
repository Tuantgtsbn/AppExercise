import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../HealthOverviewScreen/components/Header';
import { useNavigation } from 'expo-router';
import MealDateSelector from './components/MealDateSelector';
import { useEffect, useMemo, useState } from 'react';
import MealScheduleForDay from './components/MealScheduleForDay';
import MealScheduleForDaySection from './components/MealScheduleForDay';
import TotalNutritionSection from './components/TotalNutritionSection';
import { GroupedFoods, MealSchedule } from './utils/interface';

const MealScheduleScreen = () => {
  const navigation = useNavigation() as any;

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [foods, setFoods] = useState<MealSchedule[]>([]);

  useEffect(() => {
    const fetchMealScheduleForDayData = async () => {
      try {
        const dateString = selectedDate.toISOString().split('T')[0];
        const response = await fetch(
          `http://${process.env.BACKEND_HOST}/api/meal-schedule/foods?date=${dateString}`
        );

        if (!response.ok) throw new Error('Failed to fetch meal schedules');
        const data: MealSchedule[] = await response.json();

        setFoods(data);
      } catch (error) {
        console.error('Error fetching schedules for selected date:', error);
      }
    };

    fetchMealScheduleForDayData();
  }, [selectedDate]);

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 20 }}>
      <Header title='Lịch ăn uống' />

      <ScrollView style={styles.container}>
        <MealDateSelector selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

        <MealScheduleForDaySection selectedDate={selectedDate} foods={foods} />

        <TotalNutritionSection foods={foods} />
      </ScrollView>

      <TouchableOpacity
        style={{ position: 'absolute', left: 150, bottom: 20, width: '100%', alignItems: 'center' }}
        onPress={() => navigation.navigate('AddMealSchedule')}
      >
        <View
          style={{
            width: 60,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
            backgroundColor: '#C58BF2'
          }}
        >
          <Image source={require('../../../assets/images/plus-icon.png')} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 20
  },
  selectBox: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#F7F8F8'
  },
  label: {
    flex: 1,
    color: '#7B6F72',
    fontSize: 14
  },
  valueBox: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  valueText: {
    color: '#7B6F72',
    fontSize: 14
  }
});

export default MealScheduleScreen;
