import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface TimePickerProps {
  mealTime: Date;
  handleChange: (name: string, value: any) => void;
}

const TimePicker: React.FC<TimePickerProps> = props => {
  const { mealTime, handleChange } = props;

  const [time, setTime] = useState(mealTime);
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate?: Date) => {
    setShow(Platform.OS === 'ios');
    if (selectedDate) {
      setTime(selectedDate);
      handleChange('time', selectedDate);
    }
  };

  const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return {
      hours,
      minutes: formattedMinutes,
      ampm
    };
  };

  const { hours, minutes, ampm } = formatTime(time);

  return (
    <View style={{ paddingVertical: 10 }}>
      <TouchableOpacity onPress={() => setShow(true)}>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text style={{ color: '#7B6F72', fontSize: 18 }}>{`${hours} : ${minutes}`}</Text>
          <Text style={{ color: '#7B6F72', fontSize: 18 }}>{ampm}</Text>
        </View>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={time}
          mode='time'
          is24Hour={false}
          display='default'
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default TimePicker;
