import type * as Sample from 'public/src/sample';
const { sampleFunction } = jest.requireActual<typeof Sample>('../sample');

describe('Sample Function', () => {
  test('Expecting a number 4.', () => {
    expect(sampleFunction()).toBe(4);
  });
});
