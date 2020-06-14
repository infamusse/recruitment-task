import React from "react";
import PropTypes from "prop-types";

import { returnValueInPLN } from "../../../utils/returnValueInPLN";

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

TransactionElement.propTypes = {
  removeTransaction: PropTypes.func,
  transaction: PropTypes.object,
  euroCourse: PropTypes.number,
};

export default TransactionElement;
