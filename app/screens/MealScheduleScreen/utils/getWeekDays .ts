import { format, startOfWeek, addDays } from 'date-fns';
import { vi } from 'date-fns/locale/vi';

const getWeekDays = () => {
  const start = startOfWeek(new Date(), { weekStartsOn: 1 });
  const days = [];

  for (let i = 0; i < 7; i++) {
    const date = addDays(start, i);
    days.push({
      day: format(date, 'EEEE', { locale: vi }),
      date: format(date, 'dd')
    });
  }

  return days;
};

export default getWeekDays;
