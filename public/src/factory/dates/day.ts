import { swedishDate } from './calendar';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const dayIndex = swedishDate.getDay();
const currentDay = days[dayIndex];

export { currentDay };
