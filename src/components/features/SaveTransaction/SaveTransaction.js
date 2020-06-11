import React, { useState } from "react";

import { IconButton, TextField } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

import clsx from "clsx";

import styles from "./SaveTransaction.module.scss";

const SaveTransaction = ({ saveTrasaction }) => {
  const [transaction, setTransaction] = useState("");

  const handleTransaction = () => {
    saveTrasaction(transaction);
  };

  return (
    <div>
      <TextField
        className={clsx(styles.inputValue, styles.inputTransactionName)}
        color="secondary"
        placeholder="Name of transaction"
        variant="outlined"
        onChange={(e) => setTransaction(e.target.value)}
      />
      <IconButton onClick={handleTransaction} color="secondary">
        <SaveIcon />
      </IconButton>
    </div>
  );
};

export { SaveTransaction };
