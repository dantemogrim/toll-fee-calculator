import prompts from 'prompts';

import { tollableDay } from './src/services/dayHandler';

console.log(tollableDay);

import { fullTime } from './src/factory/times/fullTime';
console.log(fullTime);

const tolls = [0, 9, 16, 22, 60];

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
