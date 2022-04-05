const currentYear = new Date().toLocaleString('sv-SE', {
  year: 'numeric',
});
const currentMonth = new Date().toLocaleString('sv-SE', {
  month: 'long',
});
const currentDate = new Date().toLocaleString('sv-SE', {
  day: 'numeric',
});
const currentWeekday = new Date().toLocaleString('sv-SE', {
  weekday: 'long',
});

const fullDate = currentWeekday + currentDate + currentMonth + currentYear;

let feeableDate = true;

if (currentWeekday.includes('sön' || 'lör')) {
  feeableDate = false;
}

if (currentMonth.includes('juli')) {
  feeableDate = false;
}

// foreach holiday as holiday
// if fulldate includes any of these - let feedabledate = false

// Midsommardagen - 25 juni
// Alla helgons dag - 5e november
// Juldagen - 25 december
// Annandag jul 26 december

console.log(feeableDate);
console.log(fullDate);

// if feeable date is true - return to calculator page
