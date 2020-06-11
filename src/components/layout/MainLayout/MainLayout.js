import React, { useEffect } from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { connect } from "react-redux";
import { fetchEuro } from "../../../redux/currencyRedux";
import { getTransactions } from "../../../redux/transactionsRedux";

import { Container } from "@material-ui/core";

import styles from "./MainLayout.module.scss";

import { CurrencyConventer } from "../../features/CurrencyConventer/CurrencyConventer";
import { TransactionList } from "../../features/TransactionList/TransactionList";

const MainLayout = ({ fetchEuro, transactions }) => {
  useEffect(() => {
    fetchEuro();
  }, [fetchEuro]);

  return (
    <Container className={styles.container}>
      <h1 className={styles.siteTitle}>currency converter</h1>
      <CurrencyConventer />
      <TransactionList transactions={transactions} />
    </Container>
  );
};

MainLayout.propTypes = {
  fetchEuro: PropTypes.func,
};

const mapStateToProps = (state) => ({
  transactions: getTransactions(state),
});

const mapDispatchToProps = { fetchEuro: fetchEuro };

const MainLayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayout);

export { MainLayoutContainer as MainLayout, MainLayout as MainLayoutComponent };
