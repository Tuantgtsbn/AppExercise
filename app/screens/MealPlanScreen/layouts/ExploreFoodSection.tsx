import { useNavigation } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const ExploreFoodSection = () => {
  const navigation = useNavigation() as any;

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20
        }}
      >
        <Text style={{ color: '#1D1617', fontSize: 16, fontWeight: 'bold' }}>Tìm món ăn</Text>
        <TouchableOpacity onPress={() => navigation.navigate('MealSearch')}>
          <Text
            style={{
              color: '#ADA4A5',
              fontSize: 12,
              fontWeight: 'medium'
            }}
          >
            Khám phá
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal>
        <View style={{ flexDirection: 'row', gap: 15, paddingBottom: 50 }}>
          <View
            style={{
              width: 200,
              height: 200,
              backgroundColor: 'rgba(152, 185, 254, 0.3)',
              marginTop: 10,
              borderRadius: 22,
              borderTopRightRadius: 100
            }}
          >
            <Image
              source={require('../../../../assets/images/pie.png')}
              style={{ alignSelf: 'flex-end' }}
            />

            <View style={{ padding: 20 }}>
              <Text style={{ fontSize: 14, fontWeight: 'medium', color: '#1D1617' }}>Bữa sáng</Text>
              <Text style={{ fontSize: 12, color: '#7B6F72', marginTop: 5 }}>120+ món ăn</Text>

              <TouchableOpacity
                onPress={() => navigation.navigate('MealSearchResult', { keyword: 'Bữa sáng' })}
                style={{
                  width: 76,
                  height: 30,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 10,
                  borderRadius: 50,
                  backgroundColor: '#98B9FE'
                }}
              >
                <Text style={{ color: '#ffffff' }}>Chọn</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              width: 200,
              height: 200,
              backgroundColor: 'rgba(197, 139, 242, 0.3)',
              marginTop: 10,
              borderRadius: 22,
              borderTopRightRadius: 100
            }}
          >
            <Image
              source={require('../../../../assets/images/chicken.png')}
              style={{ alignSelf: 'flex-end' }}
            />

            <View style={{ padding: 20 }}>
              <Text style={{ fontSize: 14, fontWeight: 'medium', color: '#1D1617' }}>Bữa trưa</Text>
              <Text style={{ fontSize: 12, color: '#7B6F72', marginTop: 5 }}>120+ món ăn</Text>

              <TouchableOpacity
                onPress={() => navigation.navigate('MealSearchResult', { keyword: 'Bữa trưa' })}
                style={{
                  width: 76,
                  height: 30,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 10,
                  borderRadius: 50,
                  backgroundColor: '#98B9FE'
                }}
              >
                <Text style={{ color: '#ffffff' }}>Chọn</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              width: 200,
              height: 200,
              backgroundColor: 'rgba(255, 0, 0, 0.2)',
              marginTop: 10,
              borderRadius: 22,
              borderTopRightRadius: 100
            }}
          >
            <Image
              source={require('../../../../assets/images/soup.png')}
              style={{ alignSelf: 'flex-end' }}
            />

            <View style={{ padding: 20 }}>
              <Text style={{ fontSize: 14, fontWeight: 'medium', color: '#1D1617' }}>Bữa tối</Text>
              <Text style={{ fontSize: 12, color: '#7B6F72', marginTop: 5 }}>120+ món ăn</Text>

              <TouchableOpacity
                onPress={() => navigation.navigate('MealSearchResult', { keyword: 'Bữa tối' })}
                style={{
                  width: 76,
                  height: 30,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 10,
                  borderRadius: 50,
                  backgroundColor: '#98B9FE'
                }}
              >
                <Text style={{ color: '#ffffff' }}>Chọn</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ExploreFoodSection;
