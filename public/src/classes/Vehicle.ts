export class Vehicle {}

class Car extends Vehicle {
  getType(): string {
    return this.constructor.name;
  }
}

class Diplomat extends Vehicle {
  getType(): string {
    return this.constructor.name;
  }
}

class Emergency extends Vehicle {
  getType(): string {
    return this.constructor.name;
  }
}

class Foreign extends Vehicle {
  getType(): string {
    return this.constructor.name;
  }
}

class Military extends Vehicle {
  getType(): string {
    return this.constructor.name;
  }
}

class Motorbike extends Vehicle {
  getType(): string {
    return this.constructor.name;
  }
}

class Tractor extends Vehicle {
  getType(): string {
    return this.constructor.name;
  }
}

export { Car, Diplomat, Emergency, Foreign, Military, Motorbike, Tractor };
