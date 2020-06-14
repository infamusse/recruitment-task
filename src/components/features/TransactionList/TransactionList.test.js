import React from "react";
import { shallow } from "enzyme";
import { TransactionListComponent } from "./TransactionList";

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

describe("Component TransactionList", () => {
  it("should render without crashing", () => {
    const component = shallow(
      <TransactionListComponent
        transactions={transactions}
        euroCourse={euroCourse}
        removeTransaction={() => true}
      />
    );
    expect(component).toBeTruthy();
  });

  it("should render all transaction", () => {
    const component = shallow(
      <TransactionListComponent
        transactions={transactions}
        euroCourse={euroCourse}
        removeTransaction={() => true}
      />
    );

    const transaction = component.find("TransactionElement");
    expect(transaction.length).toBe(2);
  });

  it("should render info about lack of transacion", () => {
    const component = shallow(
      <TransactionListComponent
        transactions={[]}
        euroCourse={euroCourse}
        removeTransaction={() => true}
      />
    );

    const transaction = component.find("p").text();
    expect(transaction).toBe("No save transaction yet");
  });
});
