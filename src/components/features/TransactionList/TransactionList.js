import React from "react";

import TransactionElement from "../TransactionElement/TransactionElement";

import { getEuroCourse } from "../../../redux/currencyRedux";
import { removeTransaction } from "../../../redux/transactionsRedux";
import { connect } from "react-redux";

const TransactionList = ({ transactions, euroCourse, removeTransaction }) => {
  return (
    <ul>
      {transactions.length ? (
        transactions.map((transaction) => (
          <TransactionElement
            key={transaction.id}
            transaction={transaction}
            euroCourse={euroCourse}
            removeTransaction={removeTransaction}
          />
        ))
      ) : (
        <p>Add transaction</p>
      )}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  euroCourse: getEuroCourse(state),
});

const mapDispatchToProps = {
  removeTransaction: (id) => removeTransaction(id),
};

const TransactionListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionList);

export { TransactionListContainer as TransactionList };
