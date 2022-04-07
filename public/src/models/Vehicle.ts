// export interface MotorVehicle {
//   tollable(): boolean;
// }

export class Vehicle {
  tollable: boolean;

  constructor(tollable: boolean) {
    this.tollable = tollable;
  }
}

export class Car extends Vehicle {
  constructor() {
    super(true);
  }
}

export class Diplomat extends Vehicle {
  constructor() {
    super(false);
  }
}

export class Emergency extends Vehicle {
  constructor() {
    super(false);
  }
}

export class Foreign extends Vehicle {
  constructor() {
    super(false);
  }
}

export class Military extends Vehicle {
  constructor() {
    super(false);
  }
}

export class Motorbike extends Vehicle {
  constructor() {
    super(false);
  }
}

export class Tractor extends Vehicle {
  constructor() {
    super(false);
  }
}
