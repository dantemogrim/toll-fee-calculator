import { faker } from '@faker-js/faker';

export const isVehicleTollable = (Vehicle: object): boolean => {
  if (Object.values(Vehicle).includes(false)) {
    return false;
  } else {
    return true;
  }
};

export const doesVehicleExist = (
  incomingVehicle: object,
  todaysDate: string
) => {
  if ('lastSeen' in incomingVehicle) {
    console.log('Targeted vehicle found in previous records.');
    return didPassToday(incomingVehicle, todaysDate);
  } else {
    console.log(
      'No data found in records.\nSetting date and license plate number..'
    );
    const datedVehicle = addLastSeenDate(incomingVehicle, todaysDate);
    const platedVehicle = addLicensePlate(incomingVehicle);
    const datedAndPlatedVehicle = Object.assign(
      {},
      datedVehicle,
      platedVehicle
    );
    return datedAndPlatedVehicle;
  }
};

export const didPassToday = (
  incomingVehicle: object,
  todaysDate: string
): boolean => {
  if (Object.values(incomingVehicle).indexOf(todaysDate) > -1) {
    return true;
  } else {
    return false;
  }
};

export const addLastSeenDate = (
  Vehicle: object,
  todaysDate: string
): object => {
  const addedDate = { lastSeen: todaysDate };
  const datedVehicle = Object.assign({}, Vehicle, addedDate);
  return datedVehicle;
};

export const addLicensePlate = (Vehicle: object): object => {
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
  const platedVehicle = Object.assign({}, Vehicle, addedPlate);
  return platedVehicle;
};
