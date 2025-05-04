import calculateTotalNutrition from '@/screens/MealScheduleScreen/utils/calculateTotalNutrition';
import { Image, StyleSheet, Text, View } from 'react-native';

const icons: Record<string, any> = {
  breakfast: require('../../../../assets/images/cake.png'),
  lunch: require('../../../../assets/images/bread.png'),
  dinner: require('../../../../assets/images/oatmeal.png')
};

const background: Record<string, any> = {
  breakfast: 'rgba(151, 184, 254, 0.2)',
  lunch: 'rgba(197, 139, 242, 0.2)',
  dinner: 'rgba(189, 164, 248, 0.2)'
};

interface MealPlanCardProps {
  title: string;
  icon: string;
  foods: any;
}

const MealPlanCard: React.FC<MealPlanCardProps> = props => {
  const { title, icon, foods } = props;

  const { calories } = calculateTotalNutrition(foods.map((item: any) => item.food || {}));

  return (
    <View style={[styles.mealBox, { backgroundColor: background[icon] }]}>
      <View>
        <Text style={styles.mealTitle}>{title}</Text>
        <Text style={styles.mealSubtext}>
          {foods.length || 0} món | {calories}kcal
        </Text>
      </View>
      <Image source={icons[icon]} />
    </View>
  );
};

const styles = StyleSheet.create({
  mealBox: {
    width: '100%',
    height: 63,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 22
  },
  mealTitle: {
    color: '#1D1617',
    fontSize: 14,
    fontWeight: '600'
  },
  mealSubtext: {
    color: '#7B6F72',
    fontSize: 12
  }
});

export default MealPlanCard;
