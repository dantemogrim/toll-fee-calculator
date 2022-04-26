import { fullDate } from './getDate';
import { didPassToday } from './checkPassage';
import { addLastSeenDate } from './addVehicle';

export const getVehicle = (incomingVehicle: object) => {
  const seenBefore = Object.values(incomingVehicle).includes(fullDate);

  if (seenBefore === true) {
    didPassToday(incomingVehicle, fullDate);
    console.log('This vehicle has been previous records.');
  } else {
    console.log('No previous records found on this vehicle.');
    addLastSeenDate(incomingVehicle, fullDate);
  }
};
