import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../HealthOverviewScreen/components/Header';
import { useNavigation } from 'expo-router';
import UpdateWeightModal from './components/updateWeightModal';
import { useState } from 'react';
import UpdateHeightModal from './components/updateHeightModel';

const HealthUpdateScreen = () => {
  const navigation = useNavigation() as any;

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  return (
    <ScrollView style={styles.container}>
      <Header title='Cập nhật sức khỏe'></Header>

      <View style={{ marginTop: 20, gap: 10 }}>
        <UpdateWeightModal weight={weight} setWeight={setWeight} />

        <UpdateHeightModal height={height} setHeight={setHeight} />
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 480 }}>
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
  container: { flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 20, paddingTop: 10 },
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
