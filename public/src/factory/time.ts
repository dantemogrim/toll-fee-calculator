import { swedishDate } from './dates/calendar';

export const currentHour = swedishDate.getHours();

export const currentMinute = swedishDate.getMinutes();

export const fullTime = `${currentHour}:${currentMinute}`;
