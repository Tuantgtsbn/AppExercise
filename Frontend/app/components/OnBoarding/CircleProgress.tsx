import { View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
type CircleProgressProps = {
  size?: number;
  strokeWidth?: number;
  progress?: number;
  children?: React.ReactNode;
};

const CircleProgress = ({
  size = 70,
  strokeWidth = 2,
  progress = 25,
  children
}: CircleProgressProps) => {
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (progress / 100) * circumference;

  return (
    <View className='items-center justify-center'>
      <Svg width={size} height={size}>
        {/* Background Circle */}
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke='#fff'
          strokeWidth={strokeWidth}
          fill='transparent'
        />
        {/* Progress Circle */}
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke='#92A3FD'
          strokeWidth={strokeWidth}
          fill='transparent'
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          strokeLinecap='round'
          transform={`rotate(-90 ${center} ${center})`}
        />
      </Svg>
      {children}
    </View>
  );
};

export default CircleProgress;
