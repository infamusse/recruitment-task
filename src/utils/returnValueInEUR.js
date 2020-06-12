export const returnValueInPLN = (EUR = 0, EURCourse) => {
  let valueInEUR = EUR * EURCourse;
  if (valueInEUR) return Math.round((valueInEUR + Number.EPSILON) * 100) / 100;
  else return 0;
};
