import { Car } from '../../models/vehicles/Car';
import { Diplomat } from '../../models/vehicles/Diplomat';
import { Emergency } from '../../models/vehicles/Emergency';
import { Foreign } from '../../models/vehicles/Foreign';
import { Military } from '../../models/vehicles/Military';
import { Motorbike } from '../../models/vehicles/Motorbike';
import { Tractor } from '../../models/vehicles/Tractor';

export const car = new Car(true, 'WQP-777', '', '');
export const diplomat = new Diplomat(false, 'FLK-118', '', '');
export const emergency = new Emergency(false, 'TUT-201', '', '');
export const foreign = new Foreign(false, 'FLIEKD23', '', '');
export const military = new Military(false, 'SOW-542', '', '');
export const motorbike = new Motorbike(false, 'RKE-028', '', '');
export const tractor = new Tractor(false, 'EKW-455', '', '');
