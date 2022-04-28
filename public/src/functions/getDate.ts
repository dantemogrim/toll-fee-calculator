// Make date reliable through UTC calculation.
const swedishDate = new Date();
const utcOffsetInMinutes = swedishDate.getTimezoneOffset();
swedishDate.setMinutes(swedishDate.getMinutes() + utcOffsetInMinutes);
const swedishOffset = 2 * 60;
swedishDate.setMinutes(swedishDate.getMinutes() + swedishOffset);

export const currentDate = swedishDate.getDate();
export const currentYear = swedishDate.getFullYear();

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

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const dayIndex = swedishDate.getDay();
export const currentDay = days[dayIndex];

export const fullDate = `${currentDate}/${currentMonth}/${currentYear}`;

export { swedishDate };
