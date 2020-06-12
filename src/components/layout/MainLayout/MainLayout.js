import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { fetchEuro, getEuroCourse } from "../../../redux/currencyRedux";
import { getTransactions } from "../../../redux/transactionsRedux";

import { CurrencyConventer } from "../../features/CurrencyConventer/CurrencyConventer";
import { TransactionList } from "../../features/TransactionList/TransactionList";
import { TransactionSum } from "../../features/TransactionSum/TransactionSum";
import { BiggestTransaction } from "../../features/BiggestTransaction/BiggestTransaction";
import { returnBiggestValue } from "../../../utils/returnBiggestValue";

import { Container, Grid } from "@material-ui/core";
import styles from "./MainLayout.module.scss";

const MainLayout = ({ fetchEuro, transactions, course }) => {
  useEffect(() => {
    fetchEuro();
  }, [fetchEuro]);

  const biggestTransaction = returnBiggestValue(transactions);

  return (
    <Container className={styles.container}>
      <img
        className={styles.logoStars}
        src={process.env.PUBLIC_URL + "/img/EuroStars.svg"}
      />
      <h1 className={styles.siteTitle}>currency converter</h1>
      <CurrencyConventer />
      <Grid container>
        <Grid item md={8} sm={12}>
          <TransactionList transactions={transactions} />
        </Grid>
        <Grid className={styles.rightColContainer} item md={4} sm={12}>
          <TransactionSum course={course} transactions={transactions} />
          {biggestTransaction && (
            <BiggestTransaction
              course={course}
              transactions={biggestTransaction}
            />
          )}
        </Grid>
      </Grid>
      <img
        className={styles.logoEuroLogo}
        src={process.env.PUBLIC_URL + "/img/EuroLogo.svg"}
      />
    </Container>
  );
};

MainLayout.propTypes = {
  fetchEuro: PropTypes.func,
};

const mapStateToProps = (state) => ({
  transactions: getTransactions(state),
  course: getEuroCourse(state),
});

const mapDispatchToProps = { fetchEuro: fetchEuro };

const MainLayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayout);

export { MainLayoutContainer as MainLayout, MainLayout as MainLayoutComponent };
