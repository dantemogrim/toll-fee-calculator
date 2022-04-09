import { Calendar } from './Calendar';
import { currentDate } from '../../factory/dates/date';

export class Date extends Calendar {
  constructor() {
    super(currentDate);
  }
}
