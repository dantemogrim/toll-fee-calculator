import { getPassage } from './getPassage';
import { vehicle } from '../../app';
import { italic, yellow } from 'kleur';

export const isVehicleTollable = (incomingVehicle: object) => {
  if (Object.values(vehicle).includes(false)) {
    console.log(yellow().italic('- Vehicle passes free of charge.'));
    return false;
  } else {
    console.log(yellow().italic('- Vehicle is tollable.'));
    getPassage(vehicle);
    return true;
  }
};
