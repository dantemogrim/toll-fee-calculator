import { Day } from '../models/dates/Day';

const day = new Day();
const value = day.value;
let tollableDay: boolean;

const tollable = () => {
  //
  if (value === 'Sat' || value === 'Sun') {
    console.log('Today is a toll free day!');
    tollableDay = false;
  } else {
    tollableDay = true;
    console.log('Today is a totally tollable day!');
  }

  return tollableDay;
};

tollable();

export { tollableDay };
