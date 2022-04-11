import { Hour } from './src/models/times/Hour';
import { Minute } from './src/models/times/Minute';
import { tollRateCalculation } from './src/services/tollRateHandler';
import { currentDay } from './src/factory/dates/day';
import { fullDate } from './src/factory/dates/fullDate';
import { holidays } from './src/factory/dates/holidays';

let tollRate = 0;
const hour = new Hour();
const minute = new Minute();

holidays.some((element) => {
  if (fullDate.includes(element)) {
    tollRate = 0;
    return true;
  }
  return false;
});

// TODO: Passages + Holidays

console.log(
  `Welcome to the Toll Fee Calculator!\nCurrently in Gothenburg Sweden:\n- Today's date is ${currentDay} ${fullDate}\n- The time is ${hour.value} hours and ${minute.value} minutes`
);
console.log(
  `- The toll fee rate is at ` +
    tollRateCalculation(hour.value, minute.value, tollRate) +
    ` SEK`
);

// TODO: Prompt Menu viewing options to show potentially interesting data:
// - List vehicles types
// - List holidays
// - Test to pass a car
