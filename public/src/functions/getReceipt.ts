import { fullDate, currentDay } from './getDate';
import { Hour, Minute } from '../models/Time';
import { getTollRate } from './getTollRate';
import { vehicle } from '../../app';
import { white, italic, green, underline, bold } from 'kleur';
import Toll from '../models/Toll';

export const receiptIntro = () => {
  console.log(`\n🧾 ${green().underline('Receipt:')}`);
  console.log(`🛻 GBG'S TOLL SYSTEMS - ${fullDate} 🛻`);
};

export const receiptOutro = () => {
  console.log('\n🌞 Have a nice day! 🌞');
};

export const receiptNewVehicle = (incomingVehicle: object) => {
  const hour = new Hour();
  const minute = new Minute();
  let toll = new Toll(0).amount;
  getTollRate(hour.value, minute.value);
  const rate = getTollRate(hour.value, minute.value).rate;
  toll = rate;

  receiptIntro();
  console.log('Welcome back anytime!');
  console.log(bold().green(`Toll .......... ${toll} SEK`));
  receiptOutro();
};

export const receiptUpdateToll = (
  incomingVehicle: object,
  remainingTotal: number
) => {
  receiptIntro();
  console.log('License Plate:' + vehicle.licensePlate);
  console.log('Daily total:' + vehicle.dailyTotal);
  console.log(bold().green(`Toll .......... ${remainingTotal} SEK`));
  receiptOutro();
};

export const receiptFree = (incomingVehicle: object) => {
  receiptIntro();
  console.log(`License Plate: ${vehicle.licensePlate}`);
  console.log(`Daily Total: ${vehicle.dailyTotal} `);
  console.log(bold().green(`Toll .......... 0 SEK`));
  receiptOutro();
};
