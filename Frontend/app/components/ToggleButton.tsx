import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

interface ToggleButtonProps {
  isEnabled: boolean;
  onToggle: () => void;
  activeColor?: string;
  inactiveColor?: string;
  style?: object;
}

const ToggleButton = ({
  isEnabled,
  onToggle,
  activeColor = '#92A3FD',
  inactiveColor = '#D7D7D7',
  style
}: ToggleButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onToggle}
      style={[
        styles.container,
        {
          backgroundColor: isEnabled ? activeColor : inactiveColor
        },
        style
      ]}
    >
      <View
        style={[
          styles.circle,
          {
            transform: [{ translateX: isEnabled ? 20 : 0 }]
          }
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 44,
    height: 24,
    borderRadius: 12,
    padding: 2
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'white'
  }
});

export default ToggleButton;