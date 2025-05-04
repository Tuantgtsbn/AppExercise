import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface DatePickerProps {
  mealTime: Date;
  handleChange: (name: string, value: any) => void;
}

const DatePicker: React.FC<DatePickerProps> = props => {
  const { mealTime, handleChange } = props;

  const [time, setTime] = useState(mealTime);
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      setShow(false); //
    }

    if (selectedDate) {
      setTime(selectedDate);
      handleChange('time', selectedDate);
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('vi-VN', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setShow(true)}>
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <Image source={require('../../../../assets/images/calendar.png')} />
          <Text style={{ color: '#7B6F72', fontSize: 14, fontWeight: '600' }}>
            {formatDate(time)}
          </Text>
        </View>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={time}
          mode='date'
          is24Hour={false}
          display='default'
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DatePicker;
