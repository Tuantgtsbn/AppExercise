import { Image, StyleSheet, Text, View } from 'react-native';
import MealDropdown from '../components/mealDropdow';

const TodayMealScheduleSection = () => {
  return (
    <View style={{ marginTop: 10 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ color: '#1D1617', fontSize: 16, fontWeight: 'bold' }}>Bữa ăn hôm nay</Text>

        <MealDropdown />
      </View>

      <View style={{ gap: 15, marginTop: 10 }}>
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

          <Image source={require('../../../../assets/images/reminder-icon.png')} />
        </View>
      </View>
    </View>
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

export default TodayMealScheduleSection;
