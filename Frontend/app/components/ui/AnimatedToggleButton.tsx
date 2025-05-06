import React, { useEffect, useRef } from 'react';
import { View, TouchableOpacity, Animated, StyleSheet } from 'react-native';

interface ToggleButtonProps {
  isEnabled: boolean;
  onToggle: () => void;
  activeColor?: string;
  inactiveColor?: string;
  style?: object;
}

const AnimatedToggleButton = ({
  isEnabled,
  onToggle,
  activeColor = '#92A3FD',
  inactiveColor = '#D7D7D7',
  style
}: ToggleButtonProps) => {
  const translateX = useRef(new Animated.Value(0)).current;
  const backgroundColor = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(translateX, {
        toValue: isEnabled ? 20 : 0,
        useNativeDriver: true,
      }),
      Animated.timing(backgroundColor, {
        toValue: isEnabled ? 1 : 0,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  }, [isEnabled]);

  const bgColor = backgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: [inactiveColor, activeColor],
  });

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onToggle}
      style={style}
    >
      <Animated.View
        style={[
          styles.container,
          {
            backgroundColor: bgColor,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.circle,
            {
              transform: [{ translateX }],
            },
          ]}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 44,
    height: 24,
    borderRadius: 12,
    padding: 2,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 1.5,
  },
});

export default AnimatedToggleButton;