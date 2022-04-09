import prompts from 'prompts';
//import { define, random, sequence } from 'cooky-cutter';

// Components
import { military } from './src/factory/vehicles/military';
import { car } from './src/factory/vehicles/car';

// Models
import Time from './src/models/times/Time';

import { Tractor } from './src/models/vehicles/Vehicle';

import { Month, Day, Year } from './src/models/dates/Calendar';
import { Date } from './src/models/dates/Date';

const date = new Date();
const day = new Day();
const month = new Month();
const year = new Year();

const tractor = new Tractor();
console.log(day, date, month, year);

// Date

// console.log("Welcome to Gothenburg, Sweden's Toll Fee Calculator!\n");
// console.log(
//   `The time is ${currentTime.hour} hours and ${currentTime.minute} minutes.\n`
// );
// console.log(`The current date is ${currentDate.fullDate}\n`);
// console.log(`The current fee is at: SEK`);

// (async () => {
//   const response = await prompts({
//     type: 'number',
//     name: 'value',
//     message: 'How old are you?',
//     validate: (value) => (value < 18 ? `Nightclub is 18+ only` : true),
//   });

// Is this weekday tollable?
// Is this date tollable?
// Are these vehicles tollible?

// If yes:
// Has this vehicle already passed within the hour? = max

// Calculator must know
// - $withinTheHour
// - $typeOfVehicle
// - $date
// - $time
