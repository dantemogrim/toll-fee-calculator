export class Vehicle {
  tollable: boolean;
  lastSeen: string;
  [key: string]: any;
  constructor(tollable: boolean, lastSeen: string) {
    this.tollable = tollable;
    this.lastSeen = lastSeen;
  }
}

export class Car extends Vehicle {
  constructor() {
    super(true, '');
  }
}

export class Diplomat extends Vehicle {
  constructor() {
    super(false, '');
  }
}

export class Emergency extends Vehicle {
  constructor() {
    super(false, '');
  }
}

export class Foreign extends Vehicle {
  constructor() {
    super(false, '');
  }
}

export class Military extends Vehicle {
  constructor() {
    super(false, '');
  }
}

export class Motorbike extends Vehicle {
  constructor() {
    super(false, '');
  }
}

export class Tractor extends Vehicle {
  constructor() {
    super(false, '');
  }
}
