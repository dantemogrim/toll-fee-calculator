export class Time {
  second: number;
  minute: number;
  hour: number;

  constructor(second: number, minute: number, hour: number) {
    this.second = second;
    this.minute = minute;
    this.hour = hour;
  }
}

// const currentHour = new Date().toLocaleString('sv-SE', {
//   hour: '2-digit',
// });

// const currentMinute = new Date().toLocaleString('sv-SE', {
//   minute: '2-digit',
// });
