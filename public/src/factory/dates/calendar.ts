// Make date reliable through UTC calculation.
const swedishDate = new Date();
const utcOffsetInMinutes = swedishDate.getTimezoneOffset();
swedishDate.setMinutes(swedishDate.getMinutes() + utcOffsetInMinutes);
const swedishOffset = 2 * 60;
swedishDate.setMinutes(swedishDate.getMinutes() + swedishOffset);

export { swedishDate };
