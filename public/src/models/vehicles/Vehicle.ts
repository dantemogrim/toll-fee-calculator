export class Vehicle {
  tollable: boolean;

  constructor(tollable: boolean) {
    this.tollable = tollable;
  }
}

export class Tractor extends Vehicle {
  constructor() {
    super(false);
  }
}
