import { getVehicle } from './getVehicle';

export const isVehicleTollable = (incomingVehicle: object) => {
  if (Object.values(incomingVehicle).includes(false)) {
    console.log('\nThis vehicle passes for free.');
    return false;
  } else {
    console.log('\nThis vehicle is tollable.');
    getVehicle(incomingVehicle);
    return true;
  }
};
