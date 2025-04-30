import { Image, Text, TouchableOpacity, View } from 'react-native';
import TimeDropdown from '../components/timeDropdown';
import { LineChart } from 'react-native-gifted-charts';
import { NUTRITIONS } from '../utils/constant';
import { useState } from 'react';

const data: any = {
  Calories: [
    { value: 30, label: 'T2', dataPointText: '30', date: '23-1' },
    { value: 45, label: 'T3', dataPointText: '45', date: '23-1' },
    { value: 28, label: 'T4', dataPointText: '28', date: '23-1' },
    { value: 80, label: 'T5', dataPointText: '80', date: '23-1' },
    { value: 60, label: 'T6', dataPointText: '60', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 30, label: 'T2', dataPointText: '30', date: '23-1' },
    { value: 45, label: 'T3', dataPointText: '45', date: '23-1' },
    { value: 28, label: 'T4', dataPointText: '28', date: '23-1' },
    { value: 80, label: 'T5', dataPointText: '80', date: '23-1' },
    { value: 60, label: 'T6', dataPointText: '60', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 30, label: 'T2', dataPointText: '30', date: '23-1' },
    { value: 45, label: 'T3', dataPointText: '45', date: '23-1' },
    { value: 28, label: 'T4', dataPointText: '28', date: '23-1' },
    { value: 80, label: 'T5', dataPointText: '80', date: '23-1' },
    { value: 60, label: 'T6', dataPointText: '60', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' }
  ],
  Fat: [
    { value: 50, label: 'T2', dataPointText: '30', date: '23-1' },
    { value: 45, label: 'T3', dataPointText: '45', date: '23-1' },
    { value: 28, label: 'T4', dataPointText: '28', date: '23-1' },
    { value: 80, label: 'T5', dataPointText: '80', date: '23-1' },
    { value: 60, label: 'T6', dataPointText: '60', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 30, label: 'T2', dataPointText: '30', date: '23-1' },
    { value: 45, label: 'T3', dataPointText: '45', date: '23-1' },
    { value: 28, label: 'T4', dataPointText: '28', date: '23-1' },
    { value: 80, label: 'T5', dataPointText: '80', date: '23-1' },
    { value: 60, label: 'T6', dataPointText: '60', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 30, label: 'T2', dataPointText: '30', date: '23-1' },
    { value: 45, label: 'T3', dataPointText: '45', date: '23-1' },
    { value: 28, label: 'T4', dataPointText: '28', date: '23-1' },
    { value: 80, label: 'T5', dataPointText: '80', date: '23-1' },
    { value: 60, label: 'T6', dataPointText: '60', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' }
  ],
  Protein: [
    { value: 70, label: 'T2', dataPointText: '30', date: '23-1' },
    { value: 45, label: 'T3', dataPointText: '45', date: '23-1' },
    { value: 28, label: 'T4', dataPointText: '28', date: '23-1' },
    { value: 80, label: 'T5', dataPointText: '80', date: '23-1' },
    { value: 60, label: 'T6', dataPointText: '60', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 30, label: 'T2', dataPointText: '30', date: '23-1' },
    { value: 45, label: 'T3', dataPointText: '45', date: '23-1' },
    { value: 28, label: 'T4', dataPointText: '28', date: '23-1' },
    { value: 80, label: 'T5', dataPointText: '80', date: '23-1' },
    { value: 60, label: 'T6', dataPointText: '60', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 30, label: 'T2', dataPointText: '30', date: '23-1' },
    { value: 45, label: 'T3', dataPointText: '45', date: '23-1' },
    { value: 28, label: 'T4', dataPointText: '28', date: '23-1' },
    { value: 80, label: 'T5', dataPointText: '80', date: '23-1' },
    { value: 60, label: 'T6', dataPointText: '60', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' }
  ],
  Carbo: [
    { value: 80, label: 'T2', dataPointText: '30', date: '23-1' },
    { value: 45, label: 'T3', dataPointText: '45', date: '23-1' },
    { value: 28, label: 'T4', dataPointText: '28', date: '23-1' },
    { value: 80, label: 'T5', dataPointText: '80', date: '23-1' },
    { value: 60, label: 'T6', dataPointText: '60', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 30, label: 'T2', dataPointText: '30', date: '23-1' },
    { value: 45, label: 'T3', dataPointText: '45', date: '23-1' },
    { value: 28, label: 'T4', dataPointText: '28', date: '23-1' },
    { value: 80, label: 'T5', dataPointText: '80', date: '23-1' },
    { value: 60, label: 'T6', dataPointText: '60', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 30, label: 'T2', dataPointText: '30', date: '23-1' },
    { value: 45, label: 'T3', dataPointText: '45', date: '23-1' },
    { value: 28, label: 'T4', dataPointText: '28', date: '23-1' },
    { value: 80, label: 'T5', dataPointText: '80', date: '23-1' },
    { value: 60, label: 'T6', dataPointText: '60', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' },
    { value: 70, label: 'T7', dataPointText: '70', date: '23-1' }
  ]
};

const MealNutritionChartSection = () => {
  const [selectedNutrition, setSelectedNutrition] = useState(NUTRITIONS[0]);

  return (
    <View style={{ gap: 10 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ color: '#1D1617', fontSize: 16, fontWeight: 'bold' }}>
          Dinh dưỡng bữa ăn
        </Text>

        <TimeDropdown />
      </View>

      <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
        {NUTRITIONS.map((item, index) => (
          <TouchableOpacity
            onPress={() => setSelectedNutrition(item)}
            key={index}
            style={[
              {
                flexDirection: 'row',
                gap: 5,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 8,
                paddingHorizontal: 10,
                borderRadius: 12,
                backgroundColor: 'rgba(152, 187, 254, 0.2)'
              },
              selectedNutrition.name === item.name
                ? { backgroundColor: '#98B9FE' }
                : { backgroundColor: '#F7F8F8' }
            ]}
          >
            <Text
              style={
                selectedNutrition.name === item.name ? { color: '#FFFFFF' } : { color: '#1D1617' }
              }
            >
              {item.value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{}}>
        <LineChart
          width={283}
          data={data[selectedNutrition.name]}
          adjustToWidth={true}
          curved
          areaChart
          thickness={3}
          color='#98B9FE'
          startFillColor='#D0E6FF'
          endFillColor='#FFFFFF'
          startOpacity={0.4}
          endOpacity={0.1}
          hideDataPoints={true}
          dataPointsColor='#FFFFFF'
          dataPointsRadius={4}
          showValuesAsDataPointsText
          textColor='#1D1617'
          textFontSize={10}
          xAxisLabelTextStyle={{ color: '#ADA4A5', fontSize: 12 }}
          yAxisTextStyle={{ color: '#ADA4A5', fontSize: 12 }}
          yAxisLabelPrefix=''
          yAxisLabelSuffix={selectedNutrition.unit}
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
          pointerConfig={{
            pointerStripHeight: 160,
            pointerStripColor: '#aaa',
            pointerColor: '#4F80FF',
            radius: 6,
            pointerLabelWidth: 100,
            pointerLabelHeight: 60,
            pointerLabelComponent: (item: any) => {
              return (
                <View
                  style={{
                    padding: 6,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 6,
                    elevation: 1
                  }}
                >
                  <Text style={{ color: '#7B6F72' }}>Ngày {item[0].date}</Text>
                  <Text style={{ color: '#42D742', fontSize: 12 }}>
                    {item[0].value} {selectedNutrition.unit}
                  </Text>
                </View>
              );
            }
          }}
        />
      </View>
    </View>
  );
};

export default MealNutritionChartSection;
