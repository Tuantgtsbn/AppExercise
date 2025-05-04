const calculateTotalNutrition = (meals: any) => {
  return meals.reduce(
    (total: any, meal: any) => {
      console.log('kcal: ', meal.kcal);
      return {
        calories: total.calories + (meal?.kcal || 0),
        protein: total.protein + (meal?.protein || 0),
        carbo: total.carbo + (meal?.carbo || 0),
        fat: total.fat + (meal?.fat || 0)
      };
    },
    { calories: 0, protein: 0, carbo: 0, fat: 0 }
  );
};

export default calculateTotalNutrition;
