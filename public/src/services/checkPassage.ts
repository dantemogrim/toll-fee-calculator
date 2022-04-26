export const didPassToday = (
  datedAndPlatedVehicle: object,
  fullDate: string
) => {
  if (Object.values(datedAndPlatedVehicle).indexOf(fullDate) > -1) {
    console.log('This vehicle has passed earlier today.');
    return true;
  }
  console.log("This vehicle hasn't been here today.");
  return false;
};
