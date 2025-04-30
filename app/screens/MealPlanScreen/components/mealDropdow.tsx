import { useState } from 'react';
import { Button, Image, Pressable, Text, TouchableOpacity, View } from 'react-native';

const MEAL_OPTIONS = [
  {
    name: 'Bữa sáng',
    value: 'BREAKFAST'
  },
  { name: 'Bữa trưa', value: 'LUNCH' },
  { name: 'Bữa tối', value: 'DINNER' }
];

const MealDropdown = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState(MEAL_OPTIONS[0]);

  const handlePress = (selectedTime: any) => {
    setOpen(!isOpen);
    setSelectedTime(selectedTime);
  };

  return (
    <View style={{ position: 'relative', zIndex: 5 }}>
      <Pressable
        style={{
          width: 86,
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
            left: 0,
            width: 86,
            backgroundColor: '#fff',
            padding: 10,
            paddingTop: 10,
            borderRadius: 8,
            elevation: 3
          }}
        >
          {MEAL_OPTIONS.map((item, index) => (
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

export default MealDropdown;
