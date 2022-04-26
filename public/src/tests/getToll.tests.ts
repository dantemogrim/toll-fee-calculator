import type * as getToll from 'public/src/services/getToll';
const { calculateToll } = jest.requireActual<typeof getToll>(
  '../services/getToll'
);
import { faker } from '@faker-js/faker';

const fakeVehicle = {
  tollable: false,
};

describe('The getToll() function.', () => {
  test('Expecting a 0.', () => {
    expect(calculateToll(fakeVehicle)).toBe(0);
  });
});
