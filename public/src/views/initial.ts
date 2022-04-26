import { fullDate, currentDay } from '../services/getDate';
import { Hour, Minute } from '../models/Time';
import { isHoliday } from '../services/getHoliday';
import { tollableDay } from '../services/checkDay';
import { tollRate } from '../services/getTollRate';
import { white, italic } from 'kleur';
import Toll from '../models/Toll';

export const initial = () => {
  const hour = new Hour();
  const minute = new Minute();
  let toll = new Toll(0).amount;
  const isTollableDay = tollableDay(currentDay).tollability;

  console.log(white().bold().underline('Welcome to the Toll Fee Calculator!'));
  console.log(`📅 Today is ${currentDay} ${fullDate}`);
  console.log(italic('📍 Currently in Gothenburg, Sweden:'));
  console.log(
    `⏱️  The time is ${hour.value} hours and ${minute.value} minutes`
  );

  console.log('📈 The toll range is at: ');
  if (isHoliday === false && isTollableDay === true) {
    tollRate(hour.value, minute.value);
    const tollRateMessage = tollRate(hour.value, minute.value).tollRateMessage;

    const finalTollRate = tollRate(hour.value, minute.value).rate;

    toll = finalTollRate;

    console.log(tollRateMessage);
  } else {
    console.log('👌 0 SEK! Today is a toll free day.');
    toll = 0;
  }
};
