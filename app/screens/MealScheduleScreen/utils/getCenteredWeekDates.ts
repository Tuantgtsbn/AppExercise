import { addDays, format } from 'date-fns';
import { DayItem } from './interface';
import { vi } from 'date-fns/locale/vi';

const getCenteredWeekDays = (centerDate = new Date()): DayItem[] => {
  const days: DayItem[] = [];

  for (let i = -2; i <= 4; i++) {
    const day = addDays(centerDate, i);
    days.push({
      dayLabel: format(day, 'EEE', { locale: vi }),
      dateLabel: format(day, 'd'),
      fullDate: day
    });
  }

  return days;
};

export default getCenteredWeekDays;
