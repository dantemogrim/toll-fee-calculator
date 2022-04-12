export class Vehicle {
  tollable: boolean;
  registrationPlate: string;
  previouslySeen: string;
  lastSeen: string;

  constructor(
    tollable: boolean,
    registrationPlate: string,
    previouslySeen: string,
    lastSeen: string
  ) {
    this.tollable = tollable;
    this.registrationPlate = registrationPlate;
    this.previouslySeen = previouslySeen;
    this.lastSeen = lastSeen;
  }
}
