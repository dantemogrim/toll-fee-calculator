import { swedishDate } from './calendar';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const monthIndex = swedishDate.getMonth();
export const currentMonth = months[monthIndex];
