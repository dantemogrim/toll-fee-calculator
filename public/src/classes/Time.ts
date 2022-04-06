export default class Time {
  second: string;
  minute: string;
  hour: string;

  constructor(second: string, minute: string, hour: string) {
    this.second = second;
    this.minute = minute;
    this.hour = hour;

    this.second = new Date().toLocaleString('sv-SE', {
      second: '2-digit',
    });

    this.minute = new Date().toLocaleString('sv-SE', {
      minute: '2-digit',
    });

    this.hour = new Date().toLocaleString('sv-SE', {
      hour: '2-digit',
    });
  }
}
