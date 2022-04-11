// requireActual ensures you get the real file
// instead of an automock
// we use import type and <typeof ...> to still get types
import type * as Sample from 'public/src/sample';
const { sampleFunction } = jest.requireActual<typeof Sample>('../sample');

//import { sillyFunction } from '../silly';

describe('silly function', () => {
  test('guaranteed random', () => {
    expect(sampleFunction()).toBe(4);
  });
});
