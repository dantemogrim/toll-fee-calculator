import { swedishDate } from './calendar';
import { Day } from '../../models/Calendar';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const dayIndex = swedishDate.getDay();
export const currentDay = days[dayIndex];

export const today = new Day().value;
