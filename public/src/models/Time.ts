import { currentHour, currentMinute } from '../factory/time';

export default class Time {
  value: number;
  constructor(value: number) {
    this.value = value;
  }
}
export class Hour extends Time {
  constructor() {
    super(currentHour);
  }
}
export class Minute extends Time {
  constructor() {
    super(currentMinute);
  }
}
