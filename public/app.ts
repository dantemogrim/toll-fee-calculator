import { initial } from './src/views/initial';
import { Car } from './src/models/Vehicle';
import { calculateToll } from './src/services/getToll';

initial();

// Incoming Test Vehicles:
export const vehicle = new Car();

// const vehicle = {
//   tollable: true,
//   licensePlate: 'EWQ-342',
//   lastSeen: '24/Apr/2022',
// };

calculateToll(vehicle);
