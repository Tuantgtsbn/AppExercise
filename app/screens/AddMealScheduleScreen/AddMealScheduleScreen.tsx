import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../HealthOverviewScreen/components/Header';
import { useNavigation } from 'expo-router';
import QuantityMealSelect from './components/quantityMealSelect';
import TimePicker from './components/datetimePicker';
import DatePicker from './components/datePicker';
import RepeatSelector from './components/repeatSelector';

const AddMealScheduleScreen = () => {
  const navigation = useNavigation() as any;

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <Header title='Thêm vào lịch ăn' />

      <ScrollView style={styles.container}>
        <View
          style={{
            gap: 30,
            paddingTop: 20,
            borderRadius: 50,
            backgroundColor: '#FFFFFF'
          }}
        >
          <View style={{ gap: 20 }}>
            <Text style={{ color: '#1D1617', fontSize: 16, fontWeight: 'bold' }}>
              Chi tiết bữa ăn
            </Text>

            <View style={{ gap: 10 }}>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 15,
                  borderRadius: 15,
                  backgroundColor: '#F7F8F8'
                }}
              >
                <Image source={require('../../../assets/images/barbel-icon.png')} />
                <Text style={{ flex: 1, color: '#7B6F72', fontSize: 14 }}>Món ăn</Text>
                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                  <Text style={{ color: '#7B6F72', fontSize: 14 }}>Bít tết gà</Text>
                  <Image source={require('../../../assets/images/arrow-right-icon.png')} />
                </View>
              </View>
              <QuantityMealSelect />
              <RepeatSelector />
            </View>
          </View>

          <View style={{ gap: 20 }}>
            <Text style={{ color: '#1D1617', fontSize: 16, fontWeight: 'bold' }}>Thời gian</Text>

            <TimePicker />

            <DatePicker />
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
          onPress={() => navigation.navigate('MealSchedule')}
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
        >
          <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: 'bold' }}>Lưu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 10,
    paddingHorizontal: 30
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

export default AddMealScheduleScreen;
