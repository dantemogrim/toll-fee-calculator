import { fullDate } from './getDate';
// import { tollRate } from './getTollRate';

export const calcNewVehicle = (incomingVehicle: object) => {
  //
  console.log('\nReceipt:');
  console.log(`🛻 GBG'S TOLL SYSTEMS - ${fullDate} 🛻`);
  console.log(incomingVehicle);
  console.log(`Your final toll fee ads up to: X SEK`);
};
