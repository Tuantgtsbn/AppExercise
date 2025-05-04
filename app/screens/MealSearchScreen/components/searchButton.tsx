import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

const SearchButton = () => {
  const navigation = useNavigation() as any;

  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    if (keyword.trim()) {
      navigation.navigate('MealSearchResult', { keyword });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSearch}>
        <Image source={require('../../../../assets/images/search-icon.png')} />
      </TouchableOpacity>
      <TextInput
        placeholder='Tìm kiếm'
        value={keyword}
        onChangeText={setKeyword}
        onSubmitEditing={handleSearch}
        style={styles.input}
        returnKeyType='search'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 2
  },
  input: {
    fontSize: 12
  }
});

export default SearchButton;
