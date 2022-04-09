import Time from './Time';
import { currentHour } from '../../factory/times/hour';

export class Hour extends Time {
  constructor() {
    super(currentHour);
  }
}
