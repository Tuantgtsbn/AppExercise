import { useNavigation } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const MealPlanSection = () => {
  const navigation = useNavigation() as any;
  return (
    <View
      style={{
        width: '100%',
        marginTop: 10
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Text
          style={{
            color: '#1D1617',
            fontSize: 16,
            fontWeight: 'bold',
            lineHeight: 26
          }}
        >
          Kế hoạch bữa ăn
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('MealPlan')}>
          <Text
            style={{
              color: '#ADA4A5',
              fontSize: 12,
              fontWeight: 'medium'
            }}
          >
            Xem thêm
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 10,
          marginTop: 6
        }}
      >
        <View
          style={{
            width: '100%',
            height: 63,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'rgba(151, 184, 254, 0.2)',
            paddingLeft: 20,
            paddingRight: 20,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 100,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 22
          }}
        >
          <View>
            <Text
              style={{
                color: '#1D1617',
                fontSize: 14,
                fontWeight: 'semibold'
              }}
            >
              Bữa sáng
            </Text>
            <Text
              style={{
                color: '#7B6F72',
                fontSize: 12
              }}
            >
              2 món | 320kcal
            </Text>
          </View>

          <Image style={{}} source={require('../../../../assets/images/cake.png')} />
        </View>

        <View
          style={{
            width: '100%',
            height: 63,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'rgba(197, 139, 242, 0.2)',
            paddingLeft: 20,
            paddingRight: 20,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 100,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 22
          }}
        >
          <View>
            <Text
              style={{
                color: '#1D1617',
                fontSize: 14,
                fontWeight: 'semibold'
              }}
            >
              Bữa trưa
            </Text>
            <Text
              style={{
                color: '#7B6F72',
                fontSize: 12
              }}
            >
              2 món | 320kcal
            </Text>
          </View>

          <Image style={{}} source={require('../../../../assets/images/bread.png')} />
        </View>

        <View
          style={{
            width: '100%',
            height: 63,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'rgba(189, 164, 248, 0.2)',
            paddingLeft: 20,
            paddingRight: 20,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 100,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 22
          }}
        >
          <View>
            <Text
              style={{
                color: '#1D1617',
                fontSize: 14,
                fontWeight: 'semibold'
              }}
            >
              Bữa tối
            </Text>
            <Text
              style={{
                color: '#7B6F72',
                fontSize: 12
              }}
            >
              2 món | 320kcal
            </Text>
          </View>

          <Image style={{}} source={require('../../../../assets/images/oatmeal.png')} />
        </View>
      </View>
    </View>
  );
};

export default MealPlanSection;
