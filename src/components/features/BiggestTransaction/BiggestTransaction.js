import React from "react";
import PropTypes from "prop-types";

import { returnValueInPLN } from "../../../utils/returnValueInPLN";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import styles from "./BiggestTransaction.module.scss";

const BiggestTransaction = ({ transaction, course }) => {
  const { name, EUR } = transaction;

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

BiggestTransaction.propTypes = {
  transaction: PropTypes.object,
  course: PropTypes.number,
};

export { BiggestTransaction };
