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
const currentMonth = months[monthIndex];

export { currentMonth };
