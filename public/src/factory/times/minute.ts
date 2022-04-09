import { swedishDate } from '../dates/calendar';

const currentMinute = swedishDate.getMinutes();

let singleNumberMinute: number;

if (currentMinute <= 9) {
  console.log('singleNumberMinute');
}

export { currentMinute };
