import React from "react";
import PropTypes from "prop-types";

import {
  sumTransactionInPLN,
  sumTransactionInEUR,
} from "../../../utils/sumTransaction";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import styles from "./TransactionSum.module.scss";

const TransactionSum = ({ transactions, course }) => {
  return (
    <div className={styles.sumTransactionContainer}>
      <h3 className={styles.sumTransactionTitle}>Transaction sum:</h3>
      <div className={styles.sumTransactionCoursesContainer}>
        <p>{sumTransactionInEUR(transactions)}EUR</p>
        <ArrowRightAltIcon />
        <p>{sumTransactionInPLN(transactions, course)}PLN</p>
      </div>
    </div>
  );
};

TransactionSum.propTypes = {
  transactions: PropTypes.array,
  course: PropTypes.number,
};

export { TransactionSum };
