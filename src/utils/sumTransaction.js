export const sumTransactionInEUR = (transactions) => {
  const sumInEUR = transactions.reduce(
    (accum, transaction) => accum + transaction.EUR,
    0
  );
  return roundSum(sumInEUR);
};

export const sumTransactionInPLN = (transactions, course) => {
  const sumInEUR = transactions.reduce(
    (accum, transaction) => accum + transaction.EUR,
    0
  );
  const sumTotal = sumInEUR * course;
  return roundSum(sumTotal);
};

export const roundSum = (sum) => {
  return Math.round((sum + Number.EPSILON) * 100) / 100;
};
