import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../HealthOverviewScreen/components/Header';
import { useNavigation } from 'expo-router';

const COMPARE_VALUES = [
  { label: 'Giảm cân', firstMonthValue: 33 },
  { label: 'Tăng chiều cao', firstMonthValue: 88 },
  { label: 'Tăng khối lượng cơ nạc', firstMonthValue: 57 },
  { label: 'Abs', firstMonthValue: 89 }
];

const HealthCompareResultScreen = () => {
  const data = [{ value: 15 }, { value: 30 }, { value: 26 }, { value: 40 }];
  const navigation = useNavigation() as any;

  return (
    <ScrollView style={styles.container}>
      <Header title='Kết quả' />

      <View style={{ height: 172 }}></View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20
        }}
      >
        <Text style={styles.text_lg}>Tháng 5</Text>
        <Text style={styles.text_lg}>Tháng 6</Text>
      </View>

      <View style={{ gap: 20, marginTop: 20 }}>
        {COMPARE_VALUES.map((item, index) => (
          <View key={index} style={{ justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center' }}>{item.label}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <Text style={styles.text_sm}>33%</Text>
              <View style={{ flexDirection: 'row', flex: 1 }}>
                <View
                  style={{
                    width: `${item.firstMonthValue}%`,
                    ...styles.red_bar
                  }}
                ></View>
                <View
                  style={{
                    width: `${100 - item.firstMonthValue}%`,
                    ...styles.blue_bar
                  }}
                ></View>
              </View>
              <Text style={styles.text_sm}>67%</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 180 }}>
        <TouchableOpacity
          style={{
            width: 315,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            backgroundColor: '#97B8FE'
          }}
          onPress={() => navigation.navigate('HealthOverviewScreen')}
        >
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 16,
              fontWeight: 'bold'
            }}
          >
            Quay lại trang chủ
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 30, paddingTop: 10 },
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
  }
});

export default HealthCompareResultScreen;
