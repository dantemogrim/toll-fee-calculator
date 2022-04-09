import { Calendar } from './Calendar';
import { currentMonth } from '../../factory/dates/month';
export class Month extends Calendar {
  constructor() {
    super(currentMonth);
  }
}
