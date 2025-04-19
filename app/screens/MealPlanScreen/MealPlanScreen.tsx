import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../HealthOverviewScreen/components/Header';
import TimeDropdown from './components/timeDropdown';
import MealDropdown from './components/mealDropdow';
import { useNavigation } from 'expo-router';

const MealPlanScreen = () => {
  const navigation = useNavigation() as any;

  return (
    <ScrollView style={styles.container}>
      <Header title='Kế Hoạch Bữa Ăn' />

      <View style={{ gap: 10, marginTop: 8 }}>
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Text style={{ color: '#1D1617', fontSize: 16, fontWeight: 'semibold' }}>
            Dinh dưỡng bữa ăn
          </Text>

          <TimeDropdown />
        </View>

        <View style={{ height: 200, backgroundColor: '#F5F5F5', borderRadius: 10 }}></View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: 'rgba(151, 184, 254, 0.2)',
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 16
          }}
        >
          <Text style={{ color: '#1D1617', fontSize: 14, fontWeight: 'medium' }}>
            Lịch trình bữa ăn hàng ngày
          </Text>
          <TouchableOpacity
            style={{
              width: 70,
              height: 30,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              backgroundColor: '#98B9FE'
            }}
          >
            <Text style={{ fontSize: 12, color: '#ffffff' }}>Kiểm tra</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 30 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Text style={{ color: '#1D1617', fontSize: 16, fontWeight: 'semibold' }}>
              Bữa ăn hôm nay
            </Text>

            <MealDropdown />
          </View>

          <View style={{ gap: 15, marginTop: 20 }}>
            <View
              style={{
                ...styles.shadow,
                height: 80,
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#FFFFFF',
                paddingRight: 20,
                borderRadius: 16
              }}
            >
              <Image
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 16
                }}
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/ttch-a46c0.appspot.com/o/image%2Fimages.jpg?alt=media&token=7eba2830-d343-4683-b769-adce17f1219c'
                }}
                resizeMode='cover'
              ></Image>

              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, fontWeight: 'medium', color: '#1D1617' }}>
                  Salmon Nigiri
                </Text>
                <Text style={{ fontSize: 12, color: '#7B6F72' }}>Hôm nay | 7am</Text>
              </View>

              <Image source={require('../../../assets/images/reminder-icon.png')} />
            </View>

            <View
              style={{
                ...styles.shadow,
                height: 80,
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#FFFFFF',
                paddingRight: 20,
                borderRadius: 16
              }}
            >
              <Image
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 16
                }}
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/ttch-a46c0.appspot.com/o/image%2Fimages.jpg?alt=media&token=7eba2830-d343-4683-b769-adce17f1219c'
                }}
                resizeMode='cover'
              ></Image>

              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, fontWeight: 'medium', color: '#1D1617' }}>
                  Salmon Nigiri
                </Text>
                <Text style={{ fontSize: 12, color: '#7B6F72' }}>Hôm nay | 7am</Text>
              </View>

              <Image source={require('../../../assets/images/reminder-icon.png')} />
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20
          }}
        >
          <Text style={{ color: '#1D1617', fontSize: 16, fontWeight: 'semibold' }}>Tìm món ăn</Text>
          <TouchableOpacity onPress={() => navigation.navigate('MealSearch')}>
            <Text
              style={{
                color: '#ADA4A5',
                fontSize: 12,
                fontWeight: 'medium'
              }}
            >
              Xem thêm
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
                source={require('../../../assets/images/pie.png')}
                style={{ alignSelf: 'flex-end' }}
              />

              <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 14, fontWeight: 'medium', color: '#1D1617' }}>
                  Bữa sáng
                </Text>
                <Text style={{ fontSize: 12, color: '#7B6F72', marginTop: 5 }}>120+ món ăn</Text>

                <TouchableOpacity
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
                source={require('../../../assets/images/chicken.png')}
                style={{ alignSelf: 'flex-end' }}
              />

              <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 14, fontWeight: 'medium', color: '#1D1617' }}>
                  Bữa trưa
                </Text>
                <Text style={{ fontSize: 12, color: '#7B6F72', marginTop: 5 }}>120+ món ăn</Text>

                <TouchableOpacity
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
                source={require('../../../assets/images/soup.png')}
                style={{ alignSelf: 'flex-end' }}
              />

              <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 14, fontWeight: 'medium', color: '#1D1617' }}>
                  Bữa tối
                </Text>
                <Text style={{ fontSize: 12, color: '#7B6F72', marginTop: 5 }}>120+ món ăn</Text>

                <TouchableOpacity
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

export default MealPlanScreen;
