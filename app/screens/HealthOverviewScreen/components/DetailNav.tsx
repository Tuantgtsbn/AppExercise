import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';

const DetailItems = [
  {
    title: 'Tổng quan sức khỏe',
    icon: require('../../../../assets/images/chart-icon.png'),
    link: 'HealthOverview'
  },
  {
    title: 'Phân tích sức khỏe',
    icon: require('../../../../assets/images/weight-scale.png'),
    link: 'HealthMetric'
  },
  {
    title: 'Tiến độ tập luyện',
    icon: require('../../../../assets/images/barbel-icon.png'),
    link: 'WorkoutProgress'
  },
  {
    title: 'Chế độ ăn',
    icon: require('../../../../assets/images/knife-plate.png'),
    link: 'MealSchedule'
  }
];

const DetailNav = () => {
  const [isOpen, setOpen] = useState(false);

  const navigation = useNavigation() as any;

  return (
    <View style={{ position: 'relative' }}>
      <TouchableOpacity
        style={{
          right: 0,
          width: 32,
          height: 32,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onPress={() => setOpen(pre => !pre)}
      >
        <Image source={require('../../../../assets/images/detail-navs.png')} />
      </TouchableOpacity>

      {isOpen && (
        <View
          style={{
            position: 'absolute',
            width: 201,
            height: 242,
            padding: 10,
            top: 40,
            right: 0,
            borderRadius: 10,
            backgroundColor: '#FFFFFF',
            zIndex: 999
          }}
        >
          <View style={{ gap: 7 }}>
            {DetailItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate(item.link)}
                activeOpacity={0.7}
              >
                <View
                  style={{
                    height: 44,
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                    paddingLeft: 16,
                    borderRadius: 16,
                    backgroundColor: '#F7F8F8'
                  }}
                >
                  <Image source={item.icon} />
                  <Text style={{ color: '#7B6F72' }}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

export default DetailNav;
