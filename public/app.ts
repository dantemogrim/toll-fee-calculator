import { today } from './src/factory/dates/day';
import { fullDate } from './src/factory/dates/fullDate';
import { holidays } from './src/factory/dates/holidays';
import { Hour, Minute } from './src/models/Time';
import { tollableDay } from './src/services/dayHandler';
import { tollRateCalculation } from './src/services/tollRateHandler';
import Toll from './src/models/Toll';
import { white, green, italic } from 'kleur';
import {
  isVehicleTollable,
  didPassToday,
  doesVehicleExist,
} from './src/services/vehicleHandler';
import { Car } from './src/models/Vehicle';

let toll = new Toll(0).amount;
const hour = new Hour();
const minute = new Minute();

console.log(white().bold().underline('Welcome to the Toll Fee Calculator!'));
console.log(italic('🇸🇪  Currently in Gothenburg, Sweden:'));
console.log(`📅 Today is ${today} ${fullDate}`);
console.log(`⏱️  The time is ${hour.value} hours and ${minute.value} minutes`);

const isTollableDay = tollableDay(today).tollability;

let isHoliday = false;
holidays.some((element) => {
  if (fullDate.includes(element)) {
    toll = 0;
    return (isHoliday = true);
  }
  return (isHoliday = false);
});

console.log('📈 The toll range is at: ');
if (isHoliday === false && isTollableDay === true) {
  tollRateCalculation(hour.value, minute.value);
  const tollRateMessage = tollRateCalculation(
    hour.value,
    minute.value
  ).tollRateMessage;

  const tollRate = tollRateCalculation(hour.value, minute.value).rate;

  toll = tollRate;

  console.log(tollRateMessage);
} else {
  toll = 0;
  console.log(green().bold('👌 0 SEK! Today is a toll free day.'));
}

// Incoming Test Vehicles:
const testCar = new Car();

const testVehicle = {
  tollable: true,
  licensePlate: 'EWQ-342',
  lastSeen: '14/Apr/2022',
};

isVehicleTollable(testVehicle);

if (!isVehicleTollable(testVehicle)) {
  // console.log('No toll fee here. Free of charge.');
  toll = 0;
}

// console.log(doesVehicleExist(testVehicle, fullDate));

if (didPassToday(testVehicle, fullDate) === true) {
  // console.log('Here earlier today.');
  testVehicle.lastSeen = fullDate;
  // TODO: What time earlier today? Add highest of compared rates onto receipt.
  toll += 1000000;
} else {
  // console.log('Not today.');
  testVehicle.lastSeen = fullDate;
}

const tollReceipt = (incomingVehicle: object, toll: number) => {
  console.log('Final toll is: ' + toll);
};

tollReceipt(testCar, toll);
