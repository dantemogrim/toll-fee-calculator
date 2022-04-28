import { fullDate, currentDay } from '../functions/getDate';
import { Hour, Minute } from '../models/Time';
import { isHoliday } from '../functions/getHoliday';
import { getTollRate } from '../functions/getTollRate';
import { cyan, italic, green } from 'kleur';
import { isDayTollable } from '../functions/getDay';
import Toll from '../models/Toll';

export const initial = () => {
  const hour = new Hour();
  const minute = new Minute();
  let toll = new Toll(0).amount;

  console.log(`👋 ${cyan().underline('Welcome to the Toll Fee Calculator!')}`);
  console.log(`📅 Today is ${currentDay} ${fullDate}`);
  console.log(italic('📍 Currently in Gothenburg, Sweden:'));
  console.log(
    `⏱️  The time is ${hour.value} hours and ${minute.value} minutes`
  );

  console.log('📈 The toll range is at: ');
  if (isHoliday === false && isDayTollable === true) {
    getTollRate(hour.value, minute.value);
    const tollRateMessage = getTollRate(
      hour.value,
      minute.value
    ).tollRateMessage;

    const finalTollRate = getTollRate(hour.value, minute.value).rate;

    toll = finalTollRate;

    console.log(tollRateMessage);
  } else {
    console.log(green('👌 0 SEK! Today is a toll free day.'));
  }
};
