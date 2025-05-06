import { useState } from 'react';
import { Button, Image, Pressable, Text, TouchableOpacity, View } from 'react-native';

const TIME_OPTIONS = [
  {
    name: 'Tuần ',
    value: 'WEEK'
  },
  { name: 'Tháng', value: 'MONTH' }
];

const TimeDropdown = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState(TIME_OPTIONS[0]);

  const handlePress = (selectedTime: any) => {
    setOpen(!isOpen);
    setSelectedTime(selectedTime);
  };

  return (
    <View style={{ position: 'relative', zIndex: 5 }}>
      <Pressable
        style={{
          width: 78,
          height: 30,
          flexDirection: 'row',
          gap: 2,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          backgroundColor: '#98B9FE',
          zIndex: 4
        }}
        onPress={() => setOpen(prev => !prev)}
      >
        <Text style={{ fontSize: 12, color: '#ffffff' }}>{selectedTime.name}</Text>
        <Image source={require('../../../../assets/images/arrow-down.png')} />
      </Pressable>

      {isOpen && (
        <View
          style={{
            position: 'absolute',
            top: 24,
            left: -6,
            width: 86,
            backgroundColor: '#fff',
            padding: 10,
            paddingTop: 10,
            borderRadius: 8,
            elevation: 3
          }}
        >
          {TIME_OPTIONS.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{ paddingVertical: 6 }}
              onPress={() => handlePress(item)}
            >
              <Text>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default TimeDropdown;
