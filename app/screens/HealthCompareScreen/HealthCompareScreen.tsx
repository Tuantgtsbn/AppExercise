import { ScrollView } from 'react-native-gesture-handler';
import Header from '../HealthOverviewScreen/components/Header';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from 'expo-router';

const HealthCompareScreen = () => {
  const navigation = useNavigation() as any;

  return (
    <ScrollView style={styles.container}>
      <Header title='So sánh' />

      <View style={{ gap: 10, marginTop: 20 }}>
        <View
          style={{
            height: 48,
            ...styles.row,
            padding: 10,
            borderRadius: 20,
            backgroundColor: '#F7F8F8'
          }}
        >
          <View
            style={{
              ...styles.row,
              gap: 10
            }}
          >
            <Image source={require('../../../assets/images/calendar-icon.png')} />
            <Text style={styles.text}>Chọn tháng 1</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.text}>Tháng 5</Text>
            <Image source={require('../../../assets/images/right-arrow.png')} />
          </View>
        </View>

        <View
          style={{
            height: 48,
            ...styles.row,
            padding: 10,
            borderRadius: 20,
            backgroundColor: '#F7F8F8'
          }}
        >
          <View
            style={{
              ...styles.row,
              gap: 10
            }}
          >
            <Image source={require('../../../assets/images/calendar-icon.png')} />
            <Text style={styles.text}>Chọn tháng 1</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.text}>Tháng 5</Text>
            <Image source={require('../../../assets/images/right-arrow.png')} />
          </View>
        </View>
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 520 }}>
        <TouchableOpacity
          style={{
            width: 315,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            backgroundColor: '#97B8FE'
          }}
          onPress={() => navigation.navigate('HealthCompareResult')}
        >
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 16,
              fontWeight: 'bold'
            }}
          >
            So sánh
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 20, paddingTop: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  text: { color: '#7B6F72', fontSize: 10 }
});

export default HealthCompareScreen;
