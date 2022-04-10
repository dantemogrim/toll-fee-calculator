import prompts from 'prompts';

import { tollableDay } from './src/services/dayHandler';

console.log(tollableDay);

// FULL TIME
// import { fullTime } from './src/factory/times/fullTime';
// console.log(fullTime);

import { Hour } from './src/models/times/Hour';
import { Minute } from './src/models/times/Minute';

const minute = new Minute();
const hour = new Hour();
let tollRate: number;

// 06:00 - 06:29 = 9 SEK
if (hour.value === 6 && minute.value <= 29) {
  console.log('06:00 - 06:29 = 9 SEK');
  tollRate = 9;
}

// 06:30 - 06:59 = 16 SEK
if (hour.value === 6 && minute.value >= 30) {
  console.log('06:30 - 06:59 = 16 SEK');
  tollRate = 16;
}

// 07:00 - 07:59 = 22 SEK
if (hour.value === 7) {
  console.log('07:00 - 07:59 = 22 SEK');
  tollRate = 22;
}

// 08:00 - 08:29 = 16 SEK
if (hour.value === 8 && minute.value <= 29) {
  console.log('08:00 - 08:29 = 16 SEK');
  tollRate = 16;
}

// 08:30 - 14:59 = 9 SEK
if ((hour.value >= 8 && minute.value >= 30) || hour.value <= 14) {
  console.log('08:30 - 14:59 = 9 SEK');
  tollRate = 9;
}

// 15:30 - 16:59 = 22 SEK
if (hour.value >= 15 && minute.value >= 30 && hour.value <= 16) {
  console.log('15:30 - 16:59 = 22 SEK');
  tollRate = 22;
}

// 15:00 - 15:29 = 16 SEK
if (hour.value === 15 && minute.value <= 29) {
  console.log('15:00 - 15:29 = 16 SEK');
  tollRate = 16;
}

// 17:00 - 17:59 = 16 SEK
if (hour.value === 17) {
  console.log('17:00 - 17:59 = 16 SEK');
  tollRate = 16;
}

// 18:00 - 18:29 = 9 SEK
if (hour.value === 18 && minute.value <= 29) {
  console.log('18:00 - 18:29 = 9 SEK');
  tollRate = 9;
}

// 18:30 - 05:59 = 0 SEK
if (hour.value === 18 && minute.value >= 30 && hour.value < 6) {
  console.log('18:30 - 05:59 = 0 SEK');
  tollRate = 0;
}

// TODO: Passages + Holidays

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
