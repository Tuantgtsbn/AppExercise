export type DayItem = {
  dayLabel: string;
  dateLabel: string;
  fullDate: Date;
};

export interface GroupedFoods {
  breakfast: any[];
  lunch: any[];
  dinner: any[];
}

export interface MealSchedule {
  id: number;
  userId: number;
  foodId: number;
  mealTime: string;
  repeat: string;
  quantity: number;
  food: any;
}
