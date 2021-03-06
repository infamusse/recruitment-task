import React, { useState } from "react";
import PropTypes from "prop-types";

import { SaveTransaction } from "../SaveTransaction/SaveTransaction";
import { returnValueInPLN } from "../../../utils/returnValueInPLN";
import { roundSum } from "../../../utils/sumTransaction";

import { addTransaction } from "../../../redux/transactionsRedux";
import { connect } from "react-redux";

import { TextField, Grid } from "@material-ui/core";
import styles from "./InputTransaction.module.scss";

const InputTransaction = ({ course, addTransaction }) => {
  const [transaction, setTransaction] = useState({ name: "", eur: 0 });

  const handleTransaction = (name) => {
    setTransaction({ ...transaction, name: name });
  };

  const saveTransaction = () => {
    const numberValue = parseFloat(transaction.eur);

    addTransaction({
      name: transaction.name,
      eur: roundSum(numberValue),
    });
    setTransaction({ name: "", eur: 0 });
  };

  return (
    <Grid container>
      <Grid item xs={3}>
        <TextField
          className={styles.inputValue}
          color="secondary"
          variant="outlined"
          type="number"
          title="Input euro value to exchange"
          value={transaction.eur}
          inputProps={{
            min: "0",
          }}
          onChange={(e) =>
            setTransaction({ ...transaction, eur: e.target.value })
          }
        />
      </Grid>
      <Grid className={styles.transactionContainer} item xs={9}>
        <SaveTransaction
          saveTransaction={saveTransaction}
          emitTrasaction={handleTransaction}
        />
      </Grid>
      <h3 className={styles.returnValue}>
        {returnValueInPLN(transaction.eur, course)}PLN
      </h3>
    </Grid>
  );
};

InputTransaction.propTypes = {
  course: PropTypes.number,
  addTransaction: PropTypes.func,
};

const mapDispatchToProps = {
  addTransaction: (transaction) => addTransaction(transaction),
};

const InputTransactionContainer = connect(
  null,
  mapDispatchToProps
)(InputTransaction);

export { InputTransactionContainer as InputTransaction };
