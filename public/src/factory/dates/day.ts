import { swedishDate } from './calendar';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const dayIndex = swedishDate.getDay();
export const currentDay = days[dayIndex];
