import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from 'expo-router';
import DetailNav from '../HealthOverviewScreen/components/DetailNav';
import { NUTRITIONS } from './utils/constant';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import translateToVN from '../MealSearchScreen/utils/translateToVN';

const MealDetailScreen = () => {
  const navigation = useNavigation() as any;
  const route = useRoute<any>();
  const { foodId } = route.params;

  const [food, setFood] = useState<any>();

  useEffect(() => {
    const fetchFoodDetailData = async () => {
      try {
        if (!foodId) return;

        const response = await fetch(`http://${process.env.BACKEND_HOST}/api/foods/${foodId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch foods');
        }
        const data = await response.json();
        setFood(data);
      } catch (error) {
        console.error('Error fetching new foods:', error);
      }
    };

    fetchFoodDetailData();
  }, [foodId]);

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView style={styles.container}>
        <View
          style={{
            width: '100%',
            position: 'absolute',
            top: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 30,
            zIndex: 9
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={{}} source={require('../../../assets/images/left-arrow.png')} />
          </TouchableOpacity>

          <DetailNav />
        </View>

        <Image
          style={{
            width: '100%',
            height: 390
          }}
          source={{
            uri: food?.imageUrl || ''
          }}
          resizeMode='cover'
        ></Image>

        <View
          style={{
            position: 'relative',
            top: -60,
            gap: 30,
            paddingHorizontal: 30,
            paddingBottom: 60,
            borderRadius: 50,
            backgroundColor: '#FFFFFF'
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 40
            }}
          >
            <View style={{ gap: 2 }}>
              <Text style={{ color: '#1D1617', fontSize: 16, fontWeight: 'bold' }}>
                {food?.name || ''}
              </Text>
              <Text
                style={{ color: '#98BBFE', fontSize: 12 }}
              >{`${translateToVN(food?.level || 'Easy')} | ${food?.cookingTime || 0} phút`}</Text>
            </View>

            <Image source={require('../../../assets/images/heart-icon.png')} />
          </View>

          <View>
            <Text style={{ marginBottom: 15, color: '#1D1617', fontSize: 16, fontWeight: 'bold' }}>
              Dinh dưỡng
            </Text>

            <ScrollView horizontal>
              <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                {NUTRITIONS.map((item, index) => (
                  <View
                    key={index}
                    style={{
                      flexDirection: 'row',
                      gap: 5,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingVertical: 10,
                      paddingHorizontal: 10,
                      borderRadius: 12,
                      backgroundColor: 'rgba(152, 187, 254, 0.2)'
                    }}
                  >
                    <Image source={item.icon}></Image>
                    <Text style={{ color: '#1D1617' }}>{`${food?.[item.name]}${item.unit}`}</Text>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>

          <View>
            <Text style={{ marginBottom: 15, color: '#1D1617', fontSize: 16, fontWeight: 'bold' }}>
              Mô tả
            </Text>

            <Text style={{ color: '#7B6F72', fontSize: 12 }}>{food?.description}</Text>
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Text style={{ color: '#1D1617', fontSize: 16, fontWeight: 'bold' }}>
                Nguyên liệu bạn sẽ cần
              </Text>

              <Text
                style={{ color: '#7B6F72', fontSize: 12 }}
              >{`${food?.ingredient.length} nguyên liệu`}</Text>
            </View>
            <View style={{ gap: 2, marginTop: 15 }}>
              {food?.ingredient?.map((item: any, index: any) => (
                <Text style={{ color: '#7B6F72', fontSize: 12 }}>
                  <Text style={{ color: '#1D1617', fontSize: 14, fontWeight: 'bold' }}>
                    {`${item.name}:`}
                  </Text>
                  {` ${item?.quantity || ''}`}
                </Text>
              ))}
            </View>
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Text style={{ color: '#1D1617', fontSize: 16, fontWeight: 'bold' }}>Cách làm</Text>

              <Text
                style={{ color: '#7B6F72', fontSize: 12 }}
              >{`${food?.recipe.length || 0} bước`}</Text>
            </View>

            <View style={{ gap: 5, marginTop: 15 }}>
              {food?.recipe?.map((item: any, index: number) => (
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 15,
                    alignItems: 'flex-start',
                    borderCurve: 'circular'
                  }}
                >
                  <Text style={{ color: '#C58BF2', fontSize: 14, fontWeight: 'semibold' }}>
                    {(index + 1).toString().padStart(2, '0')}
                  </Text>
                  <View
                    style={{
                      position: 'relative',
                      gap: 5,
                      paddingLeft: 20,
                      paddingBottom: 30,
                      borderLeftWidth: 2,
                      borderLeftColor: 'gray',
                      borderStyle: 'dashed',
                      borderColor: '#C58BF2'
                    }}
                  >
                    <Image
                      source={require('../../../assets/images/circle-icon.png')}
                      style={{ position: 'absolute', left: -11 }}
                    />
                    <Text style={{ color: '#1D1617', fontSize: 14, fontWeight: 'bold' }}>
                      {`Bước ${index + 1}`}
                    </Text>
                    <Text
                      style={{
                        color: '#7B6F72',
                        paddingRight: 30,
                        fontSize: 12,
                        fontWeight: 'bold'
                      }}
                    >
                      {item}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          left: 0,
          bottom: 20,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <TouchableOpacity
          style={{
            width: 315,
            height: 60,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            borderRadius: 50,
            backgroundColor: '#98B9FE'
          }}
          onPress={() =>
            navigation.navigate('AddMealSchedule', { foodId: food.id, foodName: food.name })
          }
        >
          <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: 'bold' }}>Thêm vào lịch</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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

export default MealDetailScreen;
