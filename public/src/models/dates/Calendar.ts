import { currentMonth } from '../../factory/dates/month';
import { currentDay } from '../../factory/dates/day';
import { currentYear } from '../../factory/dates/year';

export class Calendar {
  value: string | number;
  constructor(value: string | number) {
    this.value = value;
  }
}

export class Day extends Calendar {
  constructor() {
    super(currentDay);
  }
}

export class Month extends Calendar {
  constructor() {
    super(currentMonth);
  }
}

export class Year extends Calendar {
  constructor() {
    super(currentYear);
  }
}
