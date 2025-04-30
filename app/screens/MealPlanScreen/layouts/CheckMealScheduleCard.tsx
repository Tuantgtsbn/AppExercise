import { useNavigation } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

const CheckMealScheduleCard = () => {
  const navigation = useNavigation() as any;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(151, 184, 254, 0.2)',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 16
      }}
    >
      <Text style={{ color: '#1D1617', fontSize: 14, fontWeight: 'medium' }}>
        Lịch trình bữa ăn hàng ngày
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('MealSchedule')}
        style={{
          width: 70,
          height: 30,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          backgroundColor: '#98B9FE'
        }}
      >
        <Text style={{ fontSize: 12, color: '#ffffff' }}>Kiểm tra</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckMealScheduleCard;
