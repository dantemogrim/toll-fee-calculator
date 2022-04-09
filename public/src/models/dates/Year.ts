import { Calendar } from './Calendar';
import { currentYear } from '../../factory/dates/year';

export class Year extends Calendar {
  constructor() {
    super(currentYear);
  }
}
