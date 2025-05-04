import { Image, Text, TouchableOpacity, View } from 'react-native';
import TimeDropdown from '../components/timeDropdown';
import { LineChart } from 'react-native-gifted-charts';
import { NUTRITIONS, TIME_OPTIONS } from '../utils/constant';
import { useEffect, useState } from 'react';

const MealNutritionChartSection = () => {
  const [selectedNutrition, setSelectedNutrition] = useState(NUTRITIONS[0]);
  const [duration, setDuration] = useState(TIME_OPTIONS[0]);
  const [nutritions, setNutritions] = useState<any>([]);

  const data: any = {
    Calories: nutritions.map((item: any) => ({
      value: item.calories || 0,
      date: item.date
    })),
    Fat: nutritions.map((item: any) => ({ value: item.fat, date: item.date })),
    Protein: nutritions.map((item: any) => ({ value: item.protein, date: item.date })),
    Carbo: nutritions.map((item: any) => ({ value: item.carbs, date: item.date }))
  };

  console.log('data1: ', data[selectedNutrition.name]);

  useEffect(() => {
    const fetchNutritionData = async () => {
      try {
        const response = await fetch(
          `http://${process.env.BACKEND_HOST}/api/meal-schedule/nutrition?duration=${duration.value}`
        );
        if (!response.ok) throw new Error('Failed to fetch nutrition');
        const data = await response.json();
        setNutritions(data);
      } catch (error) {
        console.error('Error nutrition for selected duration:', error);
      }
    };

    fetchNutritionData();
  }, [duration]);

  return (
    <View style={{ gap: 10 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ color: '#1D1617', fontSize: 16, fontWeight: 'bold' }}>
          Dinh dưỡng bữa ăn
        </Text>

        <TimeDropdown duration={duration} setDuration={setDuration} />
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
