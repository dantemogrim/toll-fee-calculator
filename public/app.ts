import { Car } from './src/models/vehicles/Car';
import { currentDay } from './src/factory/dates/day';
import { fullDate } from './src/factory/dates/fullDate';
import { holidays } from './src/factory/dates/holidays';
import { Hour } from './src/models/times/Hour';
import { Minute } from './src/models/times/Minute';
import { tollableDay } from './src/services/dayHandler';
import { tollRateCalculation } from './src/services/tollRateHandler';
import { blue, cyan, white, yellow, green, italic } from 'kleur';

const hour = new Hour();
const minute = new Minute();
let toll = 0;

console.log(white().bold().underline('Welcome to the Toll Fee Calculator!'));
console.log(italic('🇸🇪  Currently in Gothenburg, Sweden:'));
console.log(`📅 Today is ${currentDay} ${fullDate}`);
console.log(`⏱️  The time is ${hour.value} hours and ${minute.value} minutes`);

// 1. Check for: Weekend Days
const isTollableDay = tollableDay(currentDay).tollability;

// 2. Check for: Holidays
let isHoliday = false;
holidays.some((element) => {
  if (fullDate.includes(element)) {
    toll = 0;
    return (isHoliday = true);
  }
  return (isHoliday = false);
});

console.log('📈 The toll range is at:');

// 3. Validate holidays and weekends before calculating.
if (isHoliday === false && isTollableDay === true) {
  tollRateCalculation(hour.value, minute.value);
  const tollRateMessage = tollRateCalculation(
    hour.value,
    minute.value
  ).tollRateMessage;

  const tollRate = tollRateCalculation(14, minute.value).rate;

  toll = tollRate;

  console.log(tollRate);
  console.log(tollRateMessage);
} else {
  console.log(green().bold('🪙  Zero! Today is a toll free day.'));
}

// 4. Check for: Vehicle Type
// Incoming Vehicle: Based off of Vehicle Class property "tollable"
const car = new Car(true, 'HEJ-123', '12/Apr', '12/Apr');
const tollable = car.tollable;
// TODO Test for example "Tractor" here

// const tollableVehicle = (tollable: boolean, tollRate: number) => {
//   if (tollable === true) {
//     console.log('⭐ The incoming vehicle is free to pass without charge.');
//     tollRate = 0;
//   }

//   return tollRate;
// };

// tollableVehicle(tollable, tollRate);

// 5 - Check if Cars "previousPassage" is set via registration plate number
// 5.1 If not set - set to "mostRecentPassage" instead
// 5.2
// 5.3 Compare previousPassage to "mostRecentPassage" dates - if same - Increase toll rate.

// TODO - Check for: Passages

// Final Toll Fee
console.log(yellow().bold(`FINAL TOLL = ` + toll));
