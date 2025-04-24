import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      setShow(false); // Ẩn sau khi chọn
    }

    if (selectedDate) {
      setTime(selectedDate);
    }
  };

  // 🧠 Format ngày sang "Thứ..., dd tháng mm năm yyyy"
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
