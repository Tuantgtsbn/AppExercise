import translateToVN from '@/screens/MealSearchScreen/utils/translateToVN';
import { useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, Image, Pressable, Text, Touchable, TouchableOpacity, View } from 'react-native';

interface SearchResultFoodsProps {
  keyword: string;
}

const SearchResultFoods: React.FC<SearchResultFoodsProps> = props => {
  const { keyword } = props;

  const navigation = useNavigation() as any;
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoodsData = async () => {
      try {
        if (!keyword) return;

        const response = await fetch(
          `http://${process.env.BACKEND_HOST}/api/foods?search=${keyword.toLocaleLowerCase().trim()}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch foods');
        }
        const data = await response.json();
        setFoods(data);
      } catch (error) {
        console.error('Error fetching new foods:', error);
      }
    };

    fetchFoodsData();
  }, [keyword]);

  return (
    <View style={{ gap: 10, paddingBottom: 60 }}>
      <Text
        style={{ color: '#1D1617', fontSize: 16, fontWeight: 'bold' }}
      >{`Kết quả cho "${keyword}"`}</Text>

      <View style={{ gap: 15 }}>
        {foods?.map((item: any, index) => (
          <TouchableOpacity onPress={() => navigation.navigate('MealDetail', { foodId: item.id })}>
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
                source={{ uri: item.imageUrl }}
                style={{ width: 80, height: 80, borderRadius: 16 }}
              />

              <View style={{ flex: 1 }}>
                <Text style={{ color: '#1D1617', fontSize: 14 }}>{item.name}</Text>
                <Text
                  style={{ color: '#7B6F72', fontSize: 12, fontWeight: 'semibold' }}
                >{`${translateToVN(item.level || 'Easy')} | ${item.cookingTime || 0} phút | ${item.kcal || 0} kcal`}</Text>
              </View>

              <Image source={require('../../../../assets/images/arrow-circle.png')} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SearchResultFoods;
