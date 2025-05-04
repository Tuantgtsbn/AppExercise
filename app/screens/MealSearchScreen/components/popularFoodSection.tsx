import { useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import translateToVN from '../utils/translateToVN';

const POPULAR_FOODS = [
  {
    id: 1,
    name: 'Honey Pancake',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ttch-a46c0.appspot.com/o/image%2Fimages.jpg?alt=media&token=7eba2830-d343-4683-b769-adce17f1219c',
    level: 'Dễ',
    cookDuration: '15 phút',
    calories: 200
  },
  {
    id: 1,
    name: 'Honey Pancake',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ttch-a46c0.appspot.com/o/image%2Fimages.jpg?alt=media&token=7eba2830-d343-4683-b769-adce17f1219c',
    level: 'Dễ',
    cookDuration: '15 phút',
    calories: 200
  },
  {
    id: 1,
    name: 'Honey Pancake',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ttch-a46c0.appspot.com/o/image%2Fimages.jpg?alt=media&token=7eba2830-d343-4683-b769-adce17f1219c',
    level: 'Dễ',
    cookDuration: '15 phút',
    calories: 200
  }
];

const PopularFoodSection = () => {
  const navigation = useNavigation() as any;

  const [popularFoods, setPopularFoods] = useState([]);

  useEffect(() => {
    const fetchNewFoodsData = async () => {
      try {
        const response = await fetch(`http://${process.env.BACKEND_HOST}/api/foods/popular`);
        if (!response.ok) {
          throw new Error('Failed to fetch foods');
        }
        const data = await response.json();
        setPopularFoods(data);
      } catch (error) {
        console.error('Error fetching new foods:', error);
      }
    };

    fetchNewFoodsData();
  }, []);

  return (
    <View style={{ gap: 10, paddingBottom: 60 }}>
      <Text style={{ color: '#1D1617', fontSize: 16, fontWeight: 'bold' }}>Phổ biến</Text>

      <View style={{ gap: 15 }}>
        {popularFoods.map((item: any, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingRight: 15,
              borderRadius: 16,
              backgroundColor: '#FFFFFF',
              elevation: 3
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: 80, height: 80, borderRadius: 16 }}
            />

            <View style={{ flex: 1 }}>
              <Text style={{ color: '#1D1617', fontSize: 14 }}>{item.name}</Text>
              <Text
                style={{ color: '#7B6F72', fontSize: 12, fontWeight: 'semibold' }}
              >{`${translateToVN(item.level)} | ${item.cookingTime} phút | ${item.kcal} kcal`}</Text>
            </View>

            <Image source={require('../../../../assets/images/arrow-circle.png')} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default PopularFoodSection;
