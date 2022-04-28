import {
  currentDate,
  currentDay,
  currentMonth,
  currentYear,
} from '../functions/getDate';
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
