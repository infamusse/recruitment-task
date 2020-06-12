import React from "react";

import { returnValueInPLN } from "../../../utils/returnValueInEUR";

import styles from "./TransactionElement.module.scss";

import { IconButton } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const TransactionElement = ({ transaction, euroCourse, removeTransaction }) => {
  const { name, id, EUR } = transaction;

  const handleRemove = () => {
    removeTransaction(id);
  };

  return (
    <div className={styles.transactionElement}>
      <h4 className={styles.transactionName}>{name}</h4>
      <span className={styles.transactionSumContainer}>
        <div className={styles.transactionSum}>
          {EUR}EUR
          <ArrowRightAltIcon className={styles.transactionArrow} />
          {returnValueInPLN(EUR, euroCourse)}PLN
        </div>
      </span>

      <IconButton
        className={styles.transactionDeleteButton}
        onClick={handleRemove}
        title={`Delete ${name}`}
      >
        <DeleteOutlineIcon color="secondary" />
      </IconButton>
    </div>
  );
};

export default TransactionElement;
