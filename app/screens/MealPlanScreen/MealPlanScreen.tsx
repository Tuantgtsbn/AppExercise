import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../HealthOverviewScreen/components/Header';
import TimeDropdown from './components/timeDropdown';
import MealDropdown from './components/mealDropdow';
import { useNavigation } from 'expo-router';
import MealNutritionChartSection from './layouts/MealNutritionChartSection';
import CheckMealScheduleCard from './layouts/CheckMealScheduleCard';
import TodayMealScheduleSection from './layouts/TodayMealScheduleSection';
import ExploreFoodSection from './layouts/ExploreFoodSection';

const MealPlanScreen = () => {
  const navigation = useNavigation() as any;

  return (
    <ScrollView style={styles.container}>
      <Header title='Kế Hoạch Bữa Ăn' />

      <View style={{ gap: 15, marginTop: 8 }}>
        <MealNutritionChartSection />

        <CheckMealScheduleCard />

        <TodayMealScheduleSection />

        <ExploreFoodSection />
      </View>
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

export default MealPlanScreen;
