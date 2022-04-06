//import { define, random, sequence } from 'cooky-cutter';
import { Car } from './src/classes/Vehicle';
import Time from './src/classes/Time';
import Calendar from './src/classes/Calendar';

const currentTime = new Time('', '', '');
const currentDate = new Calendar('', '', '', '', '');
const time = new Date().toString();

console.log(time);

import prompts from 'prompts';

console.log("Welcome to Gothenburg, Sweden's Toll Fee Calculator!\n");
console.log(`The time is ${currentTime.hour}h ${currentTime.minute}min\n`);
console.log(`The current date is ${currentDate.fullDate}\n`);
console.log(`The current fee is at: SEK`);

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
