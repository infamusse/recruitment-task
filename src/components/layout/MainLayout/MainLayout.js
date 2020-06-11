import React, { useEffect } from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { connect } from "react-redux";
import { fetchEuro } from "../../../redux/currencyRedux";

import { Container } from "@material-ui/core";

import styles from "./MainLayout.module.scss";

import { CurrencyConventer } from "../../features/CurrencyConventer/CurrencyConventer";

const MainLayout = ({ fetchEuro }) => {
  useEffect(() => {
    fetchEuro();
  }, [fetchEuro]);
  return (
    <Container className={styles.container}>
      <h1 className={styles.siteTitle}>currency converter</h1>
      <CurrencyConventer />
    </Container>
  );
};

MainLayout.propTypes = {
  fetchEuro: PropTypes.func,
};

// const mapStateToProps = (state) => ({
//   fetchEuro: fetchEuro(state),
// });

const mapDispatchToProps = { fetchEuro: fetchEuro };

const MainLayoutContainer = connect(null, mapDispatchToProps)(MainLayout);

export {
  // Component as MainLayout,
  MainLayoutContainer as MainLayout,
  MainLayout as MainLayoutComponent,
};
