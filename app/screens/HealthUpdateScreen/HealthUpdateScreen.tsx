import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../HealthOverviewScreen/components/Header';
import { useNavigation } from 'expo-router';

const HealthUpdateScreen = () => {
  const navigation = useNavigation() as any;

  return (
    <ScrollView style={styles.container}>
      <Header title='Cập nhật sức khỏe'></Header>

      <View style={{ marginTop: 20, gap: 10 }}>
        <View
          style={{
            width: '100%',
            height: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 16,
            borderRadius: 16,
            backgroundColor: '#F7F8F8'
          }}
        >
          <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
            <Image source={require('../../../assets/images/weight-scale.png')} />
            <Text style={{ color: '#7B6F72', fontSize: 12 }}>Cân nặng</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#ADA4A5', fontSize: 10 }}>65kg</Text>
            <Image source={require('../../../assets/images/right-arrow.png')} />
          </View>
        </View>

        <View
          style={{
            width: '100%',
            height: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 16,
            borderRadius: 16,
            backgroundColor: '#F7F8F8'
          }}
        >
          <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
            <Image source={require('../../../assets/images/swap.png')} />
            <Text style={{ color: '#7B6F72', fontSize: 12 }}>Chiều cao</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#ADA4A5', fontSize: 10 }}>170cm</Text>
            <Image source={require('../../../assets/images/right-arrow.png')} />
          </View>
        </View>
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 500 }}>
        <TouchableOpacity
          style={{
            width: 315,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            backgroundColor: '#97B8FE'
          }}
          onPress={() => navigation.navigate('HealthMetric')}
        >
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 16,
              fontWeight: 'bold'
            }}
          >
            Lưu
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

export default HealthUpdateScreen;
