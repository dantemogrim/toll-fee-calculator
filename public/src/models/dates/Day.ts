import { Calendar } from './Calendar';
import { currentDay } from '../../factory/dates/day';

export class Day extends Calendar {
  constructor() {
    super(currentDay);
  }
}
