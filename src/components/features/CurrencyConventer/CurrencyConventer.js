import React from "react";

import TextField from "@material-ui/core/TextField";

import styles from "./CurrencyConventer.module.scss";

const CurrencyConventer = ({ theme }) => {
  return (
    <div className={styles.fromTo}>
      <h3>from: PLN</h3>
      <h3>to: EUR</h3>
      <TextField
        // InputProps={{
        //   classes: {
        //     root: theme.palette.secondary.main,
        //     focused: theme.palette.secondary.main,
        //   },
        // }}
        label="Outlined"
        borderColor="secondary"
        variant="outlined"
      />
    </div>
  );
};

export default CurrencyConventer;
