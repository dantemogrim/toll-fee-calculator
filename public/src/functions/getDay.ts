import { currentDay } from './getDate';

export const tollableDay = () => {
  if (currentDay === 'Sat' || currentDay === 'Sun') {
    return false;
  } else {
    return true;
  }
};

export const isDayTollable = tollableDay();
