import React, { useState } from "react";

import { SaveTransaction } from "../SaveTransaction/SaveTransaction";

import { TextField, Grid } from "@material-ui/core";

import styles from "./InputTransaction.module.scss";

import { addTransaction } from "../../../redux/transactionsRedux";

import { connect } from "react-redux";

const InputTransaction = ({ course, addTransaction }) => {
  const [value, setValue] = useState(0);

  const returnValueInEuro = () => {
    let euroValue = value * course;
    return Math.round((euroValue + Number.EPSILON) * 100) / 100;
  };

  const saveTrasaction = (name) => {
    addTransaction({ name: name, course: value });
  };

  return (
    <Grid container>
      <Grid item xs={4}>
        <TextField
          className={styles.inputValue}
          color="secondary"
          variant="outlined"
          type="number"
          value={value}
          inputProps={{
            min: "0",
          }}
          onChange={(e) => setValue(e.target.value)}
        />
      </Grid>
      <Grid className={styles.transactionContainer} item xs={8}>
        <SaveTransaction saveTrasaction={saveTrasaction} />
      </Grid>
      <h3 className={styles.returnValue}>{returnValueInEuro()}EUR</h3>
    </Grid>
  );
};

const mapDispatchToProps = {
  addTransaction: (transaction) => addTransaction(transaction),
};

const InputTransactionContainer = connect(
  null,
  mapDispatchToProps
)(InputTransaction);

export { InputTransactionContainer as InputTransaction };
