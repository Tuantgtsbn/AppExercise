import { useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const CATEGORIES = [
  {
    id: 1,
    name: 'Salad',
    image: require('../../../../assets/images/salad.png'),
    color: 'rgba(151, 183, 254, 0.3)'
  },
  {
    id: 2,
    name: 'Bánh ngọt',
    image: require('../../../../assets/images/pastry.png'),
    color: 'rgba(197, 139, 242, 0.3)'
  },
  {
    id: 3,
    name: 'Bánh nướng',
    image: require('../../../../assets/images/pancake.png'),
    color: 'rgba(151, 183, 254, 0.3)'
  },
  {
    id: 4,
    name: 'Sinh tố',
    image: require('../../../../assets/images/smoothie.png'),
    color: 'rgba(197, 139, 242, 0.3)'
  }
];

const FoodCategoryCard = () => {
  const navigation = useNavigation() as any;

  const navigateToSearchResult = (keyword: string) => {
    navigation.navigate('MealSearchResult', { keyword: keyword });
  };

  return (
    <View style={{ gap: 10 }}>
      <Text style={{ color: '#1D1617', fontSize: 16, fontWeight: 'bold' }}>Loại</Text>
      <ScrollView horizontal>
        <View style={{ flexDirection: 'row', gap: 15 }}>
          {CATEGORIES.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                width: 80,
                height: 100,
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                borderRadius: 16,
                backgroundColor: item.color
              }}
              onPress={() => navigateToSearchResult(item.name)}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                  backgroundColor: '#fff'
                }}
              >
                <Image source={item.image}></Image>
              </View>

              <Text style={{ color: '#1D1617' }}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default FoodCategoryCard;
