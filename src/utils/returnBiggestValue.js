export const returnBiggestValue = (transactions) => {
  if (transactions) {
    const biggest = transactions.sort((a, b) => b.EUR - a.EUR)[0];
    return biggest;
  } else return null;
};
