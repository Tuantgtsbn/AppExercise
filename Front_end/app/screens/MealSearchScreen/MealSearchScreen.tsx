import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Header from '../HealthOverviewScreen/components/Header';
import { useState } from 'react';
import FoodCategoryCard from './components/foodCategoryCard';
import NewFoodSection from './components/newFoodSection';
import PopularFoodSection from './components/popularFoodSection';
import { useNavigation } from 'expo-router';

const MealSearchScreen = () => {
  const [text, setText] = useState('');
  const navigation = useNavigation() as any;

  const handleSearch = () => {
    if (text.trim()) {
      navigation.navigate('MealSearchResultScreen');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Header title='Tìm kiếm món ăn' />

      <View style={{ gap: 30, marginTop: 30 }}>
        <View
          style={{
            ...styles.shadow,
            height: 50,
            flexDirection: 'row',
            gap: 4,
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 16,
            backgroundColor: '#FFFFFF'
          }}
        >
          <Image source={require('../../../assets/images/search-icon.png')} />
          <TextInput
            placeholder='Tìm kiếm'
            value={text}
            onChangeText={setText}
            onSubmitEditing={handleSearch}
            style={{ fontSize: 12 }}
            returnKeyType='search'
          />
        </View>

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
    paddingHorizontal: 30,
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

export default MealSearchScreen;
