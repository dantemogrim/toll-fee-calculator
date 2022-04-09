export class Toll {
  amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
}

export class InitialToll extends Toll {
  constructor() {
    super(0);
  }
}
