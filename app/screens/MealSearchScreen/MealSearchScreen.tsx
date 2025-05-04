import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '../HealthOverviewScreen/components/Header';
import FoodCategoryCard from './components/foodCategoryCard';
import NewFoodSection from './components/newFoodSection';
import PopularFoodSection from './components/popularFoodSection';
import SearchButton from './components/searchButton';

const MealSearchScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header title='Tìm kiếm món ăn' />

      <View style={{ gap: 20, marginTop: 20 }}>
        <SearchButton />
        <FoodCategoryCard />
        <NewFoodSection />
        <PopularFoodSection />
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
  }
});

export default MealSearchScreen;
