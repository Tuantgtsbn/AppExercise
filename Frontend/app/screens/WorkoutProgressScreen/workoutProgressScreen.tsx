import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../HealthOverviewScreen/components/Header';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const WorkoutProgressScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header title='Tiến độ tập luyện' />

      <View style={{ gap: 10, marginTop: 8 }}>
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Text style={{ color: '#1D1617', fontSize: 16, fontWeight: 'semibold' }}>
            Tiến độ tập luyện
          </Text>

          <TouchableOpacity
            style={{
              width: 76,
              height: 30,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              backgroundColor: '#98B9FE'
            }}
          >
            <Text style={{ color: '#ffffff' }}>Tuần</Text>
            <Image source={require('../../../assets/images/arrow-down.png')} />
          </TouchableOpacity>
        </View>

        <View style={{ height: 172 }}></View>
      </View>

      <View>
        <Text style={{ color: '#1D1617', fontSize: 16, fontWeight: 'semibold' }}>
          Bài tập gần đây
        </Text>

        <View style={{ gap: 20, marginTop: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../../../assets/images/workout-pic.png')}></Image>
            <View style={{ flex: 1, paddingLeft: 10, gap: 6, paddingRight: 10 }}>
              <Text style={{ color: '#1D1617', fontSize: 12, fontWeight: 'medium' }}>Nhảy dây</Text>
              <Text style={{ color: '#A4A9AD', fontSize: 10 }}>200 kcal | 20 phút</Text>
              <View
                style={{ width: '100%', height: 10, backgroundColor: '#F7F8F8', borderRadius: 50 }}
              >
                <View
                  style={{
                    width: '40%',
                    height: '100%',
                    backgroundColor: '#AD96F7',
                    borderTopLeftRadius: 50,
                    borderBottomLeftRadius: 50
                  }}
                ></View>
              </View>
            </View>
            <Image source={require('../../../assets/images/workout-btn.png')}></Image>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../../../assets/images/workout-pic.png')}></Image>
            <View style={{ flex: 1, paddingLeft: 10, gap: 6, paddingRight: 10 }}>
              <Text style={{ color: '#1D1617', fontSize: 12, fontWeight: 'medium' }}>Nhảy dây</Text>
              <Text style={{ color: '#A4A9AD', fontSize: 10 }}>200 kcal | 20 phút</Text>
              <View
                style={{ width: '100%', height: 10, backgroundColor: '#F7F8F8', borderRadius: 50 }}
              >
                <View
                  style={{
                    width: '40%',
                    height: '100%',
                    backgroundColor: '#AD96F7',
                    borderTopLeftRadius: 50,
                    borderBottomLeftRadius: 50
                  }}
                ></View>
              </View>
            </View>
            <Image source={require('../../../assets/images/workout-btn.png')}></Image>
          </View>
        </View>
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

export default WorkoutProgressScreen;
