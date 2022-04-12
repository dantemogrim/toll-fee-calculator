export const tollableDay = (day: string) => {
  let tollability = true;

  if (day == 'Sat' || day == 'Sun') {
    tollability = false;
  } else {
    tollability = true;
  }

  return { tollability };
};
