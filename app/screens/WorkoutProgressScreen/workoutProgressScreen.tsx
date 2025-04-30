import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../HealthOverviewScreen/components/Header';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TimeDropdown from './components/timeDropdown';
import { TIME_OPTIONS } from './utils/constant';
import { CurveType, LineChart } from 'react-native-gifted-charts';

const data: any = {
  Calories: [
    { value: 300, label: 'T2', dataPointText: '30', date: '23-1' },
    { value: 450, label: 'T3', dataPointText: '45', date: '23-1' },
    { value: 208, label: 'T4', dataPointText: '28', date: '23-1' },
    { value: 800, label: 'T5', dataPointText: '80', date: '23-1' },
    { value: 600, label: 'T6', dataPointText: '60', date: '23-1' },
    { value: 700, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 700, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 700, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 700, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 300, label: 'T2', dataPointText: '30', date: '23-1' },
    { value: 450, label: 'T3', dataPointText: '45', date: '23-1' },
    { value: 280, label: 'T4', dataPointText: '28', date: '23-1' },
    { value: 800, label: 'T5', dataPointText: '80', date: '23-1' },
    { value: 600, label: 'T6', dataPointText: '60', date: '23-1' },
    { value: 700, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 700, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 700, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 700, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 300, label: 'T2', dataPointText: '30', date: '23-1' },
    { value: 450, label: 'T3', dataPointText: '45', date: '23-1' },
    { value: 280, label: 'T4', dataPointText: '28', date: '23-1' },
    { value: 800, label: 'T5', dataPointText: '80', date: '23-1' },
    { value: 600, label: 'T6', dataPointText: '60', date: '23-1' },
    { value: 700, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 700, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 700, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 700, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 700, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 700, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 700, label: 'T7', dataPointText: '70', date: '23-1' }
  ],
  WorkoutTimeTotal: [
    { value: 50, label: 'T2', dataPointText: '30', date: '23-1' },
    { value: 65, label: 'T3', dataPointText: '45', date: '23-1' },
    { value: 78, label: 'T4', dataPointText: '28', date: '23-1' },
    { value: 40, label: 'T5', dataPointText: '80', date: '23-1' },
    { value: 10, label: 'T6', dataPointText: '60', date: '23-1' },
    { value: 50, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 30, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 90, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 20, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 50, label: 'T2', dataPointText: '30', date: '23-1' },
    { value: 75, label: 'T3', dataPointText: '45', date: '23-1' },
    { value: 48, label: 'T4', dataPointText: '28', date: '23-1' },
    { value: 20, label: 'T5', dataPointText: '80', date: '23-1' },
    { value: 40, label: 'T6', dataPointText: '60', date: '23-1' },
    { value: 50, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 90, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 50, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 40, label: 'T2', dataPointText: '30', date: '23-1' },
    { value: 35, label: 'T3', dataPointText: '45', date: '23-1' },
    { value: 18, label: 'T4', dataPointText: '28', date: '23-1' },
    { value: 90, label: 'T5', dataPointText: '80', date: '23-1' },
    { value: 70, label: 'T6', dataPointText: '60', date: '23-1' },
    { value: 80, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 90, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 50, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 40, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 20, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 90, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 10, label: 'T7', dataPointText: '70', date: '23-1' }
  ]
};

const WorkoutProgressScreen = () => {
  const [timeFilter, setTimeFilter] = useState(TIME_OPTIONS[0]);

  return (
    <ScrollView style={styles.container}>
      <Header title='Tiến độ tập luyện' />

      <View style={{ gap: 10, marginTop: 8 }}>
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Text style={{ color: '#1D1617', fontSize: 16, fontWeight: 'bold' }}>
            Tiến độ tập luyện
          </Text>

          <TimeDropdown timeFilter={timeFilter} setTimeFilter={setTimeFilter} />
        </View>

        <LineChart
          width={263}
          data={data['Calories']}
          data2={data['WorkoutTimeTotal']}
          adjustToWidth={true}
          thickness={3}
          color='#98B9FE' // Calories
          color2='#C58BF2' // WorkoutTime
          startFillColor='#D0E6FF'
          endFillColor='#FFFFFF'
          startOpacity={0.4}
          endOpacity={0.1}
          hideDataPoints={true}
          dataPointsColor='#FFFFFF'
          dataPointsRadius={4}
          showValuesAsDataPointsText={false}
          textColor='#1D1617'
          textFontSize={10}
          xAxisLabelTextStyle={{ color: '#ADA4A5', fontSize: 12 }}
          yAxisTextStyle={{ color: '#ADA4A5', fontSize: 12 }}
          yAxisLabelPrefix=''
          yAxisLabelSuffix=' cal'
          noOfSections={4}
          isAnimated
          hideRules={false}
          rulesColor='#EEE'
          rulesType='solid'
          initialSpacing={4}
          xAxisColor='#DDD'
          yAxisColor='#DDD'
          backgroundColor='transparent'
          animationDuration={1200}
          secondaryLineConfig={{
            curveType: CurveType.CUBIC
          }}
          secondaryYAxis={{
            yAxisColor: '#C58BF2',
            yAxisLabelSuffix: ' phút',
            roundToDigits: 0
          }}
          pointerConfig={{
            pointerStripHeight: 160,
            pointerStripColor: '#aaa',
            pointerColor: '#4F80FF',
            radius: 6,
            pointerLabelWidth: 120,
            pointerLabelHeight: 70,
            pointerLabelComponent: (items: any[]) => {
              const [caloriesItem, workoutItem] = items;
              return (
                <View
                  style={{
                    padding: 6,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 6,
                    elevation: 2
                  }}
                >
                  <Text style={{ color: '#7B6F72', marginBottom: 2 }}>
                    Ngày: {caloriesItem?.date ?? workoutItem?.date}
                  </Text>
                  <Text style={{ color: '#98B9FE', fontSize: 12 }}>
                    Tiêu thụ: {caloriesItem?.value ?? 0} calo
                  </Text>
                  <Text style={{ color: '#C58BF2', fontSize: 12 }}>
                    Thời gian: {workoutItem?.value ?? 0} phút
                  </Text>
                </View>
              );
            }
          }}
        />
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

export default WorkoutProgressScreen;
