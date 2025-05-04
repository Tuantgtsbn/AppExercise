import { Image, Text, View } from 'react-native';
import calculateTotalNutrition from '../utils/calculateTotalNutrition';

interface TotalNutritionSectionProps {
  foods: any;
}

const TotalNutritionSection: React.FC<TotalNutritionSectionProps> = props => {
  const { foods } = props;

  const { calories, protein, carbo, fat } = calculateTotalNutrition(
    foods.map((item: any) => item.food || {})
  );

  return (
    <View style={{ gap: 20, marginTop: 30, paddingBottom: 60 }}>
      <Text style={{ color: '#1D1617', fontSize: 16, fontWeight: 'bold' }}>Dinh dưỡng hôm nay</Text>

      <View style={{ gap: 15 }}>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            paddingVertical: 25,
            borderRadius: 15,
            backgroundColor: '#FFFFFF',
            elevation: 1
          }}
        >
          <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
            <Text style={{ color: '#1D1617', fontSize: 12, fontWeight: 'bold' }}>Calories</Text>

            <Image
              style={{
                width: 18,
                height: 18
              }}
              source={require('../../../../assets/images/calories-icon.png')}
              resizeMode='cover'
            ></Image>
          </View>

          <Text style={{ color: '#7B6F72', fontSize: 12 }}>{calories} kCal</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            paddingVertical: 25,
            borderRadius: 15,
            backgroundColor: '#FFFFFF',
            elevation: 1
          }}
        >
          <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
            <Text style={{ color: '#1D1617', fontSize: 12, fontWeight: 'bold' }}>Proteins</Text>

            <Image
              style={{
                width: 18,
                height: 18
              }}
              source={require('../../../../assets/images/protein-icon.png')}
              resizeMode='cover'
            ></Image>
          </View>

          <Text style={{ color: '#7B6F72', fontSize: 12 }}>{protein} g</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            paddingVertical: 25,
            borderRadius: 15,
            backgroundColor: '#FFFFFF',
            elevation: 1
          }}
        >
          <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
            <Text style={{ color: '#1D1617', fontSize: 12, fontWeight: 'bold' }}>Fat</Text>

            <Image
              style={{
                width: 18,
                height: 18
              }}
              source={require('../../../../assets/images/trans-fat-icon.png')}
              resizeMode='cover'
            ></Image>
          </View>

          <Text style={{ color: '#7B6F72', fontSize: 12 }}>{fat} g</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            paddingVertical: 25,
            borderRadius: 15,
            backgroundColor: '#FFFFFF',
            elevation: 1
          }}
        >
          <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
            <Text style={{ color: '#1D1617', fontSize: 12, fontWeight: 'bold' }}>Carbo</Text>

            <Image
              style={{
                width: 18,
                height: 18
              }}
              source={require('../../../../assets/images/rice-icon.png')}
              resizeMode='cover'
            ></Image>
          </View>

          <Text style={{ color: '#7B6F72', fontSize: 12 }}>{carbo} g</Text>
        </View>
      </View>
    </View>
  );
};

export default TotalNutritionSection;
