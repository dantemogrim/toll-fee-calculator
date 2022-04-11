export const tollRateCalculation = (
  hour: number,
  minute: number,
  rate: number
) => {
  // 06:00 - 06:29 = 9 SEK
  if (hour === 6 && minute <= 29) {
    console.log('06:00 - 06:29 = 9 SEK');
    rate = 9;
  }

  // 06:30 - 06:59 = 16 SEK
  if (hour === 6 && minute >= 30) {
    console.log('06:30 - 06:59 = 16 SEK');
    rate = 16;
  }

  // 07:00 - 07:59 = 22 SEK
  if (hour === 7) {
    console.log('07:00 - 07:59 = 22 SEK');
    rate = 22;
  }

  // 08:00 - 08:29 = 16 SEK
  if (hour === 8 && minute <= 29) {
    console.log('08:00 - 08:29 = 16 SEK');
    rate = 16;
  }

  // 08:30 - 14:59 = 9 SEK
  if (hour >= 8 && minute >= 30) {
    if (hour <= 14) {
      console.log('08:30 - 14:59 = 9 SEK');
      rate = 9;
    }
  }

  // 15:30 - 16:59 = 22 SEK
  if (hour >= 15 && minute >= 30) {
    if (hour <= 16) {
      console.log('15:30 - 16:59 = 22 SEK');
      rate = 22;
    }
  }

  // 15:00 - 15:29 = 16 SEK
  if (hour === 15 && minute <= 29) {
    console.log('15:00 - 15:29 = 16 SEK');
    rate = 16;
  }

  // 17:00 - 17:59 = 16 SEK
  if (hour === 17) {
    console.log('17:00 - 17:59 = 16 SEK');
    rate = 16;
  }

  // 18:00 - 18:29 = 9 SEK
  if (hour === 18 && minute <= 29) {
    console.log('18:00 - 18:29 = 9 SEK');
    rate = 9;
  }

  // 18:30 - 05:59 = 0 SEK
  if ((hour === 18 && minute >= 30) || hour < 6) {
    console.log('18:30 - 05:59 = 0 SEK');
    rate = 0;
  }

  return rate;
};
