//import { define, random, sequence } from 'cooky-cutter';
// import ora from 'ora';

import ora from 'ora';
import prompts from 'prompts';

(async () => {
  const response = await prompts({
    type: 'number',
    name: 'value',
    message: 'How old are you?',
    validate: (value) => (value < 18 ? `Nightclub is 18+ only` : true),
  });

  console.log(response); // => { value: 24 }
})();

// const spinner = ora('Loading unicorns').start();

// setTimeout(() => {
//   spinner.color = 'yellow';
//   spinner.text = 'Loading rainbows';
// }, 1000);

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

console.log('hello');
