import { fullDate } from './getDate';

const holidays = [
  '31/Dec',
  '1/Jan',
  '5/Jan',
  '6/Jan',
  '14/Apr',
  '15/Apr',
  '16/Apr',
  '17/Apr',
  '18/Apr',
  '30/Apr',
  '1/May',
  '25/May',
  '26/May',
  '4/Jun',
  '5/Jun',
  '6/Jun',
  '25/Jun',
  '26/Jun',
  '4/Nov',
  '5/Nov',
  '24/Dec',
  '25/Dec',
  '26/Dec',
];

export let isHoliday = false;
holidays.some((element) => {
  if (fullDate.includes(element)) {
    return (isHoliday = true);
  }
  return (isHoliday = false);
});
