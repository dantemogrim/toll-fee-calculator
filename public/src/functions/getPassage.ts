import { fullDate } from './getDate';
import { addLastSeenDate } from './addVehicle';
import { vehicle } from '../../app';
import { italic, yellow } from 'kleur';
import { addToll } from './addToll';

export const getPassage = (incomingVehicle: object) => {
  const seenToday = Object.values(vehicle).includes(fullDate);

  if (seenToday === true) {
    console.log(yellow().italic('- Vehicle was here earlier today.'));
    addToll(vehicle);
  } else {
    console.log(yellow().italic('- Vehicle has no previous records.'));
    addLastSeenDate(vehicle, fullDate);
  }
};
