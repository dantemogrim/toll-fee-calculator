export default class Calendar {
  day: string;
  date: string;
  month: string;
  year: string;
  fullDate: string;

  constructor(
    day: string,
    date: string,
    month: string,
    year: string,
    fullDate: string
  ) {
    this.day = day;
    this.date = date;
    this.month = month;
    this.year = year;
    this.fullDate = fullDate;

    this.year = new Date().toLocaleString('sv-SE', {
      year: 'numeric',
    });

    this.month = new Date().toLocaleString('sv-SE', {
      month: 'long',
    });

    this.date = new Date().toLocaleString('sv-SE', {
      day: 'numeric',
    });

    this.day = new Date().toLocaleString('sv-SE', {
      weekday: 'long',
    });

    this.fullDate = `${this.day} ${this.date}-${this.month}-${this.year}`;
  }
}
