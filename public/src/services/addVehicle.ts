import { faker } from '@faker-js/faker';
import { italic } from 'kleur';
import { calcNewVehicle } from './getReceipt';

export const addLastSeenDate = (incomingVehicle: object, fullDate: string) => {
  const addedDate = { lastSeen: fullDate };
  const datedVehicle = Object.assign({}, incomingVehicle, addedDate);
  console.log(italic('Registering passage date..'));
  addLicensePlate(datedVehicle);
};

export const addLicensePlate = (incomingVehicle: object) => {
  const threeRandomLetters = faker.random.alpha({
    count: 3,
    upcase: true,
  });

  const threeRandomNumbers = faker.datatype.number({
    min: 100,
    max: 999,
  });

  const randomLicensePlate = `${threeRandomLetters}-${threeRandomNumbers}`;

  const addedPlate = { licensePlate: randomLicensePlate };
  const datedPlatedVehicle = Object.assign({}, incomingVehicle, addedPlate);
  console.log(italic('Registering license plate..'));
  calcNewVehicle(datedPlatedVehicle);
};
