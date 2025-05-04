import { GroupedFoods, MealSchedule } from '@/screens/MealScheduleScreen/utils/interface';
import { useNavigation } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MealPlanCard from '../components/MealPlanCard';

const MealPlanSection = () => {
  const navigation = useNavigation() as any;
  const [foods, setFoods] = useState<MealSchedule[]>([]);
  const selectedDate = new Date();

  const groupedFoods = useMemo(() => {
    const groups: GroupedFoods = {
      breakfast: [],
      lunch: [],
      dinner: []
    };

    foods.forEach((item: any) => {
      const hour = new Date(item.mealTime).getHours();
      if (hour < 10) {
        groups.breakfast.push(item);
      } else if (hour < 15) {
        groups.lunch.push(item);
      } else {
        groups.dinner.push(item);
      }
    });

    return groups;
  }, [foods]);

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
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Kế hoạch bữa ăn</Text>
        <TouchableOpacity onPress={() => navigation.navigate('MealPlan')}>
          <Text style={styles.link}>Xem thêm</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mealList}>
        <MealPlanCard title='Bữa sáng' icon='breakfast' foods={groupedFoods.breakfast} />

        <MealPlanCard title='Bữa trưa' icon='lunch' foods={groupedFoods.lunch} />

        <MealPlanCard title='Bữa tối' icon='dinner' foods={groupedFoods.dinner} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    color: '#1D1617',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 26
  },
  link: {
    color: '#ADA4A5',
    fontSize: 12,
    fontWeight: '500'
  },
  mealList: {
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    marginTop: 6
  }
});

export default MealPlanSection;
