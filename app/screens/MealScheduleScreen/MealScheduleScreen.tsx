import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../HealthOverviewScreen/components/Header';
import { useNavigation } from 'expo-router';
import MealDateSelector from './components/MealDateSelector';

const MealScheduleScreen = () => {
  const navigation = useNavigation() as any;

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <Header title='Lịch ăn uống' />

      <ScrollView style={styles.container}>
        <MealDateSelector />

        <View style={{ gap: 20 }}>
          <View style={{ gap: 15 }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Text style={{ color: '#1D1617', fontSize: 16, fontWeight: 'bold' }}>Bữa sáng</Text>
              <Text style={{ color: '#ADA4A5', fontSize: 12 }}>2 món | 230 calories</Text>
            </View>

            <View style={{ gap: 10 }}>
              <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 16
                  }}
                  source={{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/ttch-a46c0.appspot.com/o/image%2Fimages.jpg?alt=media&token=7eba2830-d343-4683-b769-adce17f1219c'
                  }}
                  resizeMode='cover'
                ></Image>
                <View style={{ flex: 1, gap: 5 }}>
                  <Text style={{ color: '#1D1617', fontSize: 14 }}>Bánh pancake mật ong</Text>
                  <Text style={{ color: '#7B6F72', fontSize: 12 }}>07:00 sáng</Text>
                </View>
                <Image source={require('../../../assets/images/arrow-right-circle.png')} />
              </View>

              <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 16
                  }}
                  source={{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/ttch-a46c0.appspot.com/o/image%2Fimages.jpg?alt=media&token=7eba2830-d343-4683-b769-adce17f1219c'
                  }}
                  resizeMode='cover'
                ></Image>
                <View style={{ flex: 1, gap: 5 }}>
                  <Text style={{ color: '#1D1617', fontSize: 14 }}>Bánh pancake mật ong</Text>
                  <Text style={{ color: '#7B6F72', fontSize: 12 }}>07:00 sáng</Text>
                </View>
                <Image source={require('../../../assets/images/arrow-right-circle.png')} />
              </View>
            </View>
          </View>

          <View style={{ gap: 15 }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Text style={{ color: '#1D1617', fontSize: 16, fontWeight: 'bold' }}>Bữa trưa</Text>
              <Text style={{ color: '#ADA4A5', fontSize: 12 }}>2 món | 230 calories</Text>
            </View>

            <View>
              <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 16
                  }}
                  source={{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/ttch-a46c0.appspot.com/o/image%2Fimages.jpg?alt=media&token=7eba2830-d343-4683-b769-adce17f1219c'
                  }}
                  resizeMode='cover'
                ></Image>
                <View style={{ flex: 1, gap: 5 }}>
                  <Text style={{ color: '#1D1617', fontSize: 14 }}>Bánh pancake mật ong</Text>
                  <Text style={{ color: '#7B6F72', fontSize: 12 }}>07:00 sáng</Text>
                </View>
                <Image source={require('../../../assets/images/arrow-right-circle.png')} />
              </View>
            </View>
          </View>
        </View>

        <View style={{ gap: 20, marginTop: 30, paddingBottom: 60 }}>
          <Text style={{ color: '#1D1617', fontSize: 16, fontWeight: 'bold' }}>
            Dinh dưỡng hôm nay
          </Text>

          <View style={{ gap: 15 }}>
            <View
              style={{
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 15,
                paddingVertical: 25,
                borderRadius: 15,
                backgroundColor: '#FFFFFF',
                elevation: 1
              }}
            >
              <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                <Text style={{ color: '#1D1617', fontSize: 12, fontWeight: 'bold' }}>Calories</Text>

                <Image
                  style={{
                    width: 18,
                    height: 18
                  }}
                  source={require('../../../assets/images/calories-icon.png')}
                  resizeMode='cover'
                ></Image>
              </View>

              <Text style={{ color: '#7B6F72', fontSize: 12 }}>320 kCal</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 15,
                paddingVertical: 25,
                borderRadius: 15,
                backgroundColor: '#FFFFFF',
                elevation: 1
              }}
            >
              <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                <Text style={{ color: '#1D1617', fontSize: 12, fontWeight: 'bold' }}>Proteins</Text>

                <Image
                  style={{
                    width: 18,
                    height: 18
                  }}
                  source={require('../../../assets/images/protein-icon.png')}
                  resizeMode='cover'
                ></Image>
              </View>

              <Text style={{ color: '#7B6F72', fontSize: 12 }}>320 kCal</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 15,
                paddingVertical: 25,
                borderRadius: 15,
                backgroundColor: '#FFFFFF',
                elevation: 1
              }}
            >
              <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                <Text style={{ color: '#1D1617', fontSize: 12, fontWeight: 'bold' }}>Fat</Text>

                <Image
                  style={{
                    width: 18,
                    height: 18
                  }}
                  source={require('../../../assets/images/trans-fat-icon.png')}
                  resizeMode='cover'
                ></Image>
              </View>

              <Text style={{ color: '#7B6F72', fontSize: 12 }}>320 kCal</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 15,
                paddingVertical: 25,
                borderRadius: 15,
                backgroundColor: '#FFFFFF',
                elevation: 1
              }}
            >
              <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                <Text style={{ color: '#1D1617', fontSize: 12, fontWeight: 'bold' }}>Carbo</Text>

                <Image
                  style={{
                    width: 18,
                    height: 18
                  }}
                  source={require('../../../assets/images/rice-icon.png')}
                  resizeMode='cover'
                ></Image>
              </View>

              <Text style={{ color: '#7B6F72', fontSize: 12 }}>320 kCal</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={{ position: 'absolute', left: 150, bottom: 20, width: '100%', alignItems: 'center' }}
        onPress={() => navigation.navigate('AddMealSchedule')}
      >
        <View
          style={{
            width: 60,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
            backgroundColor: '#C58BF2'
          }}
        >
          <Image source={require('../../../assets/images/plus-icon.png')} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 30,
    paddingTop: 20
  },
  selectBox: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#F7F8F8'
  },
  label: {
    flex: 1,
    color: '#7B6F72',
    fontSize: 14
  },
  valueBox: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  valueText: {
    color: '#7B6F72',
    fontSize: 14
  }
});

export default MealScheduleScreen;
