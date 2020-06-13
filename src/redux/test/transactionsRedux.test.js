import { reducer } from "../transactionsRedux";
import { initialState } from "../initialState";

describe("transaction reducer", () => {
  it("Should return the initial state", () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it("Should add transaction", () => {
    const addTransaction = {
      type: "app/transactions/ADD_TANSACTION",
      payload: {
        name: "TEST",
        eur: 20,
      },
    };

    const reducerAfterAdd = reducer(initialState.transactions, addTransaction);
    expect(typeof reducerAfterAdd).toEqual("object");
    expect(reducerAfterAdd.data.length).toEqual(3);

    const findAddedObjByName = (value) => {
      return reducerAfterAdd.data.find(({ name }) => name == value).name;
    };
    expect(findAddedObjByName("TEST")).toBe("TEST");
  });

  it("Should remove transaction", () => {
    const removeTransaction = {
      type: "app/transactions/REMOVE_TANSACTION",
      payload: "95313629-68e3-4b68-8e98-bd9aa8dcd158",
    };

    const reducerAfterRemove = reducer(
      initialState.transactions,
      removeTransaction
    );
    expect(typeof reducerAfterRemove).toEqual("object");
    expect(reducerAfterRemove.data.length).toEqual(1);

    const findAddedObjByName = (value) => {
      return reducerAfterRemove.data.find(({ name }) => name == value);
    };
    expect(findAddedObjByName("TEST")).toBe(undefined);
  });
});
