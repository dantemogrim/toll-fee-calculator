import Time from './Time';
import { currentMinute } from '../../factory/times/minute';

export class Minute extends Time {
  constructor() {
    super(currentMinute);
  }
}
