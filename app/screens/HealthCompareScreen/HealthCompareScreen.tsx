import { ScrollView } from 'react-native-gesture-handler';
import Header from '../HealthOverviewScreen/components/Header';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from 'expo-router';
import SelectMonth1Modal from './components/selectMonth1Modal';
import { useState } from 'react';
import SelectMonth2Modal from './components/selectMonth2Modal';

const HealthCompareScreen = () => {
  const navigation = useNavigation() as any;

  const [month1, setMonth1] = useState(1);
  const [month2, setMonth2] = useState(2);

  return (
    <ScrollView style={styles.container}>
      <Header title='So sánh' />

      <View style={{ gap: 10, marginTop: 20 }}>
        <SelectMonth1Modal month1={month1} setMonth1={setMonth1} />
        <SelectMonth2Modal month2={month2} setMonth2={setMonth2} />
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 490 }}>
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
