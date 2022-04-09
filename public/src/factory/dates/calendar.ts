// Make date reliable through UTC calculation.
const swedishDate = new Date();
const utcOffsetInMinutes = swedishDate.getTimezoneOffset();
swedishDate.setMinutes(swedishDate.getMinutes() + utcOffsetInMinutes);
const swedishOffset = 2 * 60;
swedishDate.setMinutes(swedishDate.getMinutes() + swedishOffset);

const currentHour = swedishDate.getHours();
const currentMinute = swedishDate.getMinutes();

export { currentHour, currentMinute, swedishDate };
