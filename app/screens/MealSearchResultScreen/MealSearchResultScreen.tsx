import { Image, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Header from '../HealthOverviewScreen/components/Header';
import { useEffect, useState } from 'react';
import SearchResultFoods from './components/searchResultFoods';
import FoodCategoryCard from '../MealSearchScreen/components/foodCategoryCard';
import { useRoute } from '@react-navigation/native';

const MealSearchResultScreen = () => {
  const route = useRoute<any>();
  const { keyword } = route.params;

  const [text, setText] = useState(keyword);
  const [search, setSearch] = useState(keyword);

  const handleSearch = () => {
    setSearch(text);
  };

  return (
    <ScrollView style={styles.container}>
      <Header title='Kết quả' />

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
          <TouchableOpacity onPress={handleSearch}>
            <Image source={require('../../../assets/images/search-icon.png')} />
          </TouchableOpacity>
          <TextInput
            placeholder='Tìm kiếm'
            value={text}
            onChangeText={setText}
            style={{ fontSize: 12 }}
          />
        </View>

        <FoodCategoryCard />

        <SearchResultFoods keyword={search} />
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

export default MealSearchResultScreen;
