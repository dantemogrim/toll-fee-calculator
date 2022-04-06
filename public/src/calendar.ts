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

// if feeable date is true - return to calculator page
