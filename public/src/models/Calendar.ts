import { currentDate } from '../factory/dates/date';
import { currentDay } from '../factory/dates/day';
import { currentMonth } from '../factory/dates/month';
import { currentYear } from '../factory/dates/year';

export class Calendar {
  value: string | number;
  constructor(value: string | number) {
    this.value = value;
  }
}

export class Date extends Calendar {
  constructor() {
    super(currentDate);
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
