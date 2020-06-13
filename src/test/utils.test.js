import {
  sumTransactionInEUR,
  sumTransactionInPLN,
  roundSum,
} from "../utils/sumTransaction";
import { returnValueInPLN } from "../utils/returnValueInPLN";
import { returnBiggestValue } from "../utils/returnBiggestValue";

const transactions = [
  {
    id: 1,
    name: "First transaction",
    EUR: 4.43,
  },
  {
    id: 2,
    name: "Second transaction",
    EUR: 8.6789,
  },
];

const euroCourse = 4.4584;

test("round", () => {
  const round = roundSum(euroCourse);
  expect(round).toBe(4.46);
  expect(typeof round).toBe("number");

  const rest = round.toString().split(".")[1];
  expect(rest).toHaveLength(2);

  const returnZero = roundSum(0);
  expect(returnZero).toBe(0);

  const edgeCase = roundSum(0.0000001);
  expect(edgeCase).toBe(0);
});

test("sum in EUR", () => {
  const sum = sumTransactionInEUR(transactions);
  expect(sum).toBe(13.11);
  expect(typeof sum).toBe("number");

  const rest = sum.toString().split(".")[1];
  expect(rest).toHaveLength(2);

  const emptyInput = sumTransactionInEUR([]);
  expect(emptyInput).toBe(0);
});

test("sum in PLN", () => {
  const sum = sumTransactionInPLN(transactions, euroCourse);
  expect(sum).toBe(58.44);
  expect(typeof sum).toBe("number");

  const rest = sum.toString().split(".")[1];
  expect(rest).toHaveLength(2);

  const emptyInput = sumTransactionInPLN([], euroCourse);
  expect(emptyInput).toBe(0);
});

test("exchange to PLN", () => {
  const returnValue = returnValueInPLN(10, euroCourse);
  expect(returnValue).toBe(44.58);
  expect(typeof returnValue).toBe("number");

  const rest = returnValue.toString().split(".")[1];
  expect(rest).toHaveLength(2);

  const returnWithZeroPassed = returnValueInPLN(0, euroCourse);
  expect(returnWithZeroPassed).toBe(0);
});

test("return obj with biggest value", () => {
  const biggest = returnBiggestValue(transactions);
  expect(typeof biggest).toBe("object");
  expect(biggest.id).toBe(2);

  //Without save transaction
  const withoutArgs = returnBiggestValue();
  expect(withoutArgs).toBeNull();
});
