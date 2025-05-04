import React, { useEffect, useState, useMemo } from 'react';
import { Image, Text, View } from 'react-native';
import { GroupedFoods, MealSchedule } from '../utils/interface'; // Đảm bảo các kiểu được khai báo chính xác
import { MEALTIME } from '../utils/constant';
import calculateTotalNutrition from '../utils/calculateTotalNutrition';

interface MealScheduleForDayProps {
  selectedDate: Date;
  foods: any;
}

const MealItem: React.FC<{ item: MealSchedule }> = ({ item }) => {
  const mealTime = new Date(item.mealTime).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  const getMealPeriod = (time: any) => {
    const hour = parseInt(time.split(':')[0], 10);
    return hour < 12 ? 'sáng' : 'chiều';
  };

  return (
    <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
      <Image
        style={{
          width: 60,
          height: 60,
          borderRadius: 16
        }}
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/ttch-a46c0.appspot.com/o/image%2Fimages.jpg?alt=media&token=7eba2830-d343-4683-b769-adce17f1219c'
        }}
        resizeMode='cover'
      />
      <View style={{ flex: 1, gap: 5 }}>
        <Text style={{ color: '#1D1617', fontSize: 14 }}>{item.food.name}</Text>
        <Text
          style={{ color: '#7B6F72', fontSize: 12 }}
        >{`${mealTime} ${getMealPeriod(mealTime)}`}</Text>
      </View>
      <Image source={require('../../../../assets/images/arrow-right-circle.png')} />
    </View>
  );
};

const MealScheduleForDaySection: React.FC<MealScheduleForDayProps> = ({ selectedDate, foods }) => {
  const groupedFoods = useMemo(() => {
    const groups: GroupedFoods = {
      breakfast: [],
      lunch: [],
      dinner: []
    };

    foods.forEach((item: any) => {
      const hour = new Date(item.mealTime).getHours();
      if (hour < 10) {
        groups.breakfast.push(item);
      } else if (hour < 15) {
        groups.lunch.push(item);
      } else {
        groups.dinner.push(item);
      }
    });

    return groups;
  }, [foods]);

  return (
    <View style={{ gap: 20 }}>
      {Object.keys(groupedFoods).map(meal => {
        const groupedFood = groupedFoods[meal as keyof typeof MEALTIME];

        if (!groupedFood || groupedFood.length === 0) return null;

        const { calories } = calculateTotalNutrition(
          groupedFood.map((item: any) => item.food || {})
        );

        return (
          <View key={meal} style={{ gap: 15 }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Text style={{ color: '#1D1617', fontSize: 16, fontWeight: 'bold' }}>
                {MEALTIME[meal as keyof typeof MEALTIME]}
              </Text>
              <Text style={{ color: '#ADA4A5', fontSize: 12 }}>
                {groupedFood.length} món | {calories} calories
              </Text>
            </View>
            <View style={{ gap: 10 }}>
              {groupedFood.map(item => (
                <MealItem key={item.id} item={item} />
              ))}
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default MealScheduleForDaySection;
