import { isVehicleTollable } from './checkVehicle';
import Toll from '../../src/models/Toll';

export const calculateToll = (incomingVehicle: object) => {
  let toll = new Toll(0).amount;

  if (!isVehicleTollable(incomingVehicle)) {
    console.log('No toll fee here. Free of charge.');
    toll = 0;
  }

  return 0;
};
