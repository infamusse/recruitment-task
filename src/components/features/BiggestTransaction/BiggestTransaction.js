import React from "react";

import { returnValueInPLN } from "../../../utils/returnValueInEUR";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import styles from "./BiggestTransaction.module.scss";

const BiggestTransaction = ({ transactions, course }) => {
  const { name, EUR } = transactions;

  return (
    <div className={styles.sumTransactionContainer}>
      <h3 className={styles.sumTransactionTitle}>Biggest transaction:</h3>
      <h4>{name}</h4>
      <div className={styles.sumTransactionCoursesContainer}>
        <p>{returnValueInPLN(EUR, course)}PLN</p>
        <ArrowRightAltIcon />
        <p>{EUR}EUR</p>
      </div>
    </div>
  );
};

export { BiggestTransaction };
