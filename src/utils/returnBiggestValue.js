export const returnBiggestValue = (transactions) => {
  const biggest = transactions.sort((a, b) => b.EUR - a.EUR)[0];
  if (biggest) return biggest;
  else return null;
};
