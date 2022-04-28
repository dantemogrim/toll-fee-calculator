import { initial } from './src/views/initial';
import { Car, Vehicle, Tractor } from './src/models/Vehicle';
import { getToll } from './src/functions/getToll';

initial();

// TESTABLE VEHICLES

// 1. Non tollable vehicle:
// export const vehicle = new Tractor();

// 2. Unknown car:
// export const vehicle = new Car();

// 3. Known car, options:
// - Sync within current date.
// - Sync within current hour.
// - Bring up daily max amount.
export const vehicle = new Vehicle(true, 42, '28/Apr/2022', 'XYZ-431', 14, 32);

getToll(vehicle);
