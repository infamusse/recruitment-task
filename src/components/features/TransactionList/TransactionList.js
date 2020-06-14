import React from "react";
import PropTypes from "prop-types";

import TransactionElement from "../TransactionElement/TransactionElement";

import { getEuroCourse } from "../../../redux/currencyRedux";
import { removeTransaction } from "../../../redux/transactionsRedux";
import { connect } from "react-redux";

import styles from "./TransactionList.module.scss";

const TransactionList = ({ transactions, euroCourse, removeTransaction }) => {
  return (
    <div className={styles.transactionListContainer}>
      <h2 className={styles.transactionListTitle}>Transaction list:</h2>
      {transactions.length ? (
        transactions.map((transaction) => (
          <TransactionElement
            key={transaction.id}
            transaction={transaction}
            euroCourse={euroCourse}
            removeTransaction={removeTransaction}
            data-testid="SomeName"
          />
        ))
      ) : (
        <p>No save transaction yet</p>
      )}
    </div>
  );
};

TransactionList.propTypes = {
  removeTransaction: PropTypes.func,
  transactions: PropTypes.array,
  euroCourse: PropTypes.number,
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

export {
  TransactionListContainer as TransactionList,
  TransactionList as TransactionListComponent,
};
