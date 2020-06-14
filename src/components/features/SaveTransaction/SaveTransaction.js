import React, { useState } from "react";
import PropTypes from "prop-types";

import { IconButton, TextField } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

import clsx from "clsx";

import styles from "./SaveTransaction.module.scss";

const SaveTransaction = ({ emitTrasaction, saveTransaction }) => {
  const [name, setName] = useState("");

  return (
    <div>
      <TextField
        className={clsx(styles.inputValue, styles.inputTransactionName)}
        color="secondary"
        placeholder="Name of transaction"
        variant="outlined"
        value={name}
        title="Enter the transaction name"
        onChange={(e) => {
          emitTrasaction(e.target.value);
          setName(e.target.value);
        }}
      />
      <IconButton
        className={styles.saveTransactionButton}
        small
        title="Save transaction"
        onClick={() => {
          saveTransaction();
          setName("");
        }}
        disabled={!name}
        color="secondary"
      >
        <SaveIcon />
      </IconButton>
    </div>
  );
};

SaveTransaction.propTypes = {
  emitTrasaction: PropTypes.func,
  saveTransaction: PropTypes.func,
};

export { SaveTransaction };
