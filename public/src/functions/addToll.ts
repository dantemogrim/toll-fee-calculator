import { currentHour, currentMinute } from './getTime';
import { getTollRate } from './getTollRate';
import { vehicle } from '../../app';
import { receiptFree, receiptUpdateToll } from './getReceipt';
import { italic, yellow, magenta } from 'kleur';
import { fullDate } from './getDate';

export const addToll = (incomingVehicle: object) => {
  const previousHour = vehicle.passingHour;
  const previousMinute = vehicle.passingMinute;
  const previousToll = getTollRate(previousHour, previousMinute).rate;
  console.log(yellow().italic(`- Previous toll @ ${previousToll} SEK`));

  const currentToll = getTollRate(currentHour, currentMinute).rate;

  const vehicleTotal = vehicle.dailyTotal;
  console.log(yellow().italic(`- Daily total @ ${vehicleTotal} SEK`));

  if (vehicleTotal === 60) {
    receiptFree(vehicle);
  }

  if (previousHour === currentHour) {
    console.log(italic('- Vehicle passed within the hour.'));
    withinTheHour(vehicle, currentToll, previousToll);
  } else {
    anotherHour(vehicle, currentToll);
  }
};

export const withinTheHour = (
  incomingVehicle: object,
  currentToll: number,
  previousToll: number
) => {
  let newTotal: number;

  if (previousToll === currentToll) {
    receiptFree(vehicle);
  } else if (previousToll > currentToll) {
    console.log(italic('- Vehicle has paid the higher toll.'));
    receiptFree(vehicle);
  } else {
    console.log(italic('- Add remains of the higher toll rate..'));
    newTotal = currentToll - previousToll;
    vehicle.dailyTotal += newTotal;
    receiptUpdateToll(vehicle, newTotal);
  }
};

export const anotherHour = (incomingVehicle: object, currentToll: number) => {
  let newTotal: number;

  if (vehicle.dailyTotal + currentToll < 60) {
    console.log(magenta().italic('- Add current toll rate..'));
    vehicle.dailyTotal += currentToll;
    console.log(magenta().italic('- Update passing date..'));
    vehicle.lastSeen = fullDate;
    receiptUpdateToll(vehicle, currentToll);
  } else {
    console.log(
      magenta().italic('- Add remaining amount of daily max total..')
    );
    newTotal = 60 - vehicle.dailyTotal;
    vehicle.dailyTotal = 60;
    receiptUpdateToll(vehicle, newTotal);
  }
};
