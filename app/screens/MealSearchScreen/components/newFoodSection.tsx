import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import translateToVN from '../utils/translateToVN';

const NewFoodSection = () => {
  const navigation = useNavigation() as any;

  const [newFoods, setNewFoods] = useState([]);

  useEffect(() => {
    const fetchNewFoodsData = async () => {
      try {
        const response = await fetch(
          `http://${process.env.BACKEND_HOST}/api/foods?limit=4&sort=created_at&order=desc`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch foods');
        }
        const data = await response.json();
        setNewFoods(data);
      } catch (error) {
        console.error('Error fetching new foods:', error);
      }
    };

    fetchNewFoodsData();
  }, []);

  console.log('new foods 1: ', newFoods);

  return (
    <View style={{ gap: 10 }}>
      <Text style={{ color: '#1D1617', fontSize: 16, fontWeight: 'bold' }}>Mới</Text>

      <ScrollView horizontal>
        <View style={{ flexDirection: 'row', gap: 15 }}>
          {newFoods.map((item: any, index) => (
            <View key={index} style={{ width: 200, height: 240, position: 'relative' }}>
              <ImageBackground
                source={{
                  uri:
                    item.imageUrl ||
                    'https://firebasestorage.googleapis.com/v0/b/ttch-a46c0.appspot.com/o/image%2Fimages.jpg?alt=media&token=7eba2830-d343-4683-b769-adce17f1219c'
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  gap: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 16,
                  overflow: 'hidden'
                }}
                resizeMode='cover'
              >
                <View
                  style={{
                    position: 'absolute',
                    backgroundColor: 'rgba(0,0,0,0.5)'
                  }}
                />
                <Text style={{ paddingTop: 80, color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
                  {item.name}
                </Text>
                <Text
                  style={{ color: '#DDDADA', fontSize: 12, fontWeight: 'semibold' }}
                >{`${translateToVN(item.level)} | ${item.cookingTime} phút | ${item.kcal} kcal`}</Text>

                <TouchableOpacity
                  style={{
                    width: 110,
                    height: 40,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                    borderRadius: 50,
                    backgroundColor: '#98B9FE'
                  }}
                  onPress={() => navigation.navigate('MealDetail')}
                >
                  <Text style={{ fontSize: 14, fontWeight: 'semibold', color: '#ffffff' }}>
                    Xem
                  </Text>
                </TouchableOpacity>
              </ImageBackground>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default NewFoodSection;
