import { currentDay } from './src/factory/dates/day';
import { fullDate } from './src/factory/dates/fullDate';
import { holidays } from './src/factory/dates/holidays';
import { Hour, Minute } from './src/models/Time';
import { tollableDay } from './src/services/dayHandler';
import { tollRateCalculation } from './src/services/tollRateHandler';
import { white, green, italic } from 'kleur';
import {
  isVehicleTollable,
  addLastSeenDate,
  addLicensePlate,
} from './src/services/vehicleHandler';
import { Car, Tractor, Vehicle } from './src/models/Vehicle';

const hour = new Hour();
const minute = new Minute();
let initialToll = 0;
// let finalToll = 0;

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
    initialToll = 0;
    return (isHoliday = true);
  }
  return (isHoliday = false);
});

// 3. Validate holidays and weekends before calculating.
if (isHoliday === false && isTollableDay === true) {
  tollRateCalculation(hour.value, minute.value);
  const tollRateMessage = tollRateCalculation(
    hour.value,
    minute.value
  ).tollRateMessage;

  const tollRate = tollRateCalculation(hour.value, minute.value).rate;

  initialToll = tollRate;

  // TODO - Fix message after 18
  console.log('📈 The toll range is at: ' + initialToll + ' SEK');
} else {
  console.log(green().bold('🪙  Zero! Today is a toll free day.'));
}

// 4. Check for: Vehicle Type
// Incoming Test Vehicles:
const testTractor = new Tractor();
const testCar = new Car();

isVehicleTollable(testCar);
isVehicleTollable(testTractor);

if (!isVehicleTollable(testCar)) {
  // console.log('No toll fee here. Free of charge.');
}

const doesVehicleExist = (Vehicle: object, todaysDate: string) => {
  if ('lastSeen' in Vehicle) {
    // console.log('Targeted vehicle found in previous records.');
    // updateDate()

    return Vehicle;
  } else {
    // console.log(
    //   'No data found in records.\nSetting date and license plate number..'
    // );
    const datedVehicle = addLastSeenDate(Vehicle, todaysDate);
    //console.log(datedVehicle);
    const platedVehicle = addLicensePlate(Vehicle);
    // addlicensePlate()
    const merged = Object.assign({}, datedVehicle, platedVehicle);
    return merged;
  }
};

// console.log(doesVehicleExist(testCar, fullDate));

const updateDate = (Vehicle: object, todaysDate: string) => {
  // Take lastSeen and place it in previouslySeen
  // Place todays date in lastSeen
  // return
};
