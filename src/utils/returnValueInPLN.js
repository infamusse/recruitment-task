export const returnValueInPLN = (PLN = 0, EURCourse) => {
  let valueInEUR = PLN * EURCourse;
  if (valueInEUR) return Math.round((valueInEUR + Number.EPSILON) * 100) / 100;
  else return 0;
};
