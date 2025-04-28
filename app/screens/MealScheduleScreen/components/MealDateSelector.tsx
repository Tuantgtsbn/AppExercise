import { addDays, format, isSameDay } from 'date-fns';
import { vi } from 'date-fns/locale/vi';
import { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

type DayItem = {
  dayLabel: string;
  dateLabel: string;
  fullDate: Date;
};

const getCenteredWeekDays = (centerDate = new Date()): DayItem[] => {
  const days: DayItem[] = [];

  for (let i = -2; i <= 4; i++) {
    const day = addDays(centerDate, i);
    days.push({
      dayLabel: format(day, 'EEE', { locale: vi }),
      dateLabel: format(day, 'd'),
      fullDate: day
    });
  }

  return days;
};

const MealDateSelector = () => {
  const [days, setDays] = useState<DayItem[]>(getCenteredWeekDays(new Date()));
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSelectDate = (date: any) => {
    setSelectedDate(date);
    setDays(getCenteredWeekDays(date));
  };
  return (
    <View>
      <View
        style={{ flexDirection: 'row', gap: 14, alignItems: 'center', justifyContent: 'center' }}
      >
        <Image source={require('../../../../assets/images/arrow-left-light.png')} />
        <Text style={{ color: '#ADA4A5', fontSize: 14, fontWeight: 'semibold' }}>
          {' '}
          {`Tháng ${format(selectedDate, 'M', { locale: vi })} ${format(selectedDate, 'yyyy')}`}
        </Text>
        <Image source={require('../../../../assets/images/arrow-right-light.png')} />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 20, paddingVertical: 10 }}
      >
        {days.map((item: any, index) => {
          const isSelected = isSameDay(item.fullDate, selectedDate);
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleSelectDate(item.fullDate)}
              style={{
                width: 60,
                height: 80,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 10,
                paddingHorizontal: 14,
                marginRight: 10,
                borderRadius: 15,
                backgroundColor: isSelected ? '#97B8FE' : '#F7F8F8'
              }}
            >
              <Text style={{ fontSize: 12, color: isSelected ? '#FFF' : '#7B6F72' }}>
                {item.dayLabel}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: isSelected ? '#FFF' : '#1D1617'
                }}
              >
                {item.dateLabel}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MealDateSelector;
