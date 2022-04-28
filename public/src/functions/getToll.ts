import { isVehicleTollable } from './getType';
import { vehicle } from '../../app';
import { receiptFree } from './getReceipt';
import { yellow, underline, magenta } from 'kleur';
import { isHoliday } from '../functions/getHoliday';
import { isDayTollable } from '../functions/getDay';

export const getToll = (incomingVehicle: object) => {
  console.log(
    `\n🧪 ${underline(`${yellow('Analysis')}/${magenta('Operations')}:`)}`
  );

  if (isHoliday || !isDayTollable) {
    receiptFree(vehicle);
  } else {
    isVehicleTollable(vehicle);
  }
};
