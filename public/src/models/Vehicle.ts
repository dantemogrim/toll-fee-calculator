export class Vehicle {
  tollable: boolean;
  dailyTotal: number;
  lastSeen: string;
  licensePlate: string;
  passingHour: number;
  passingMinute: number;
  constructor(
    tollable: boolean,
    dailyTotal: number,
    lastSeen: string,
    licensePlate: string,
    passingHour: number,
    passingMinute: number
  ) {
    this.tollable = tollable;
    this.dailyTotal = dailyTotal;
    this.lastSeen = lastSeen;
    this.licensePlate = licensePlate;
    this.passingHour = passingHour;
    this.passingMinute = passingMinute;
  }
}

export class Car extends Vehicle {
  constructor() {
    super(true, 0, '', '', 0, 0);
  }
}

export class Diplomat extends Vehicle {
  constructor() {
    super(false, 0, '', '', 0, 0);
  }
}

export class Emergency extends Vehicle {
  constructor() {
    super(false, 0, '', '', 0, 0);
  }
}

export class Foreign extends Vehicle {
  constructor() {
    super(false, 0, '', '', 0, 0);
  }
}

export class Military extends Vehicle {
  constructor() {
    super(false, 0, '', '', 0, 0);
  }
}

export class Motorbike extends Vehicle {
  constructor() {
    super(false, 0, '', '', 0, 0);
  }
}

export class Tractor extends Vehicle {
  constructor() {
    super(false, 0, '', '', 0, 0);
  }
}
