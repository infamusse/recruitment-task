import React from "react";

import { InputTransaction } from "../InputTransaction/InputTransaction";
import CurrencyCurse from "../CurrencyCurse/CurrencyCurse";

import { getEuroCourse, getLoadingState } from "../../../redux/currencyRedux";
import { connect } from "react-redux";

import styles from "./CurrencyConventer.module.scss";

const CurrencyConventer = ({ euroCourse, loading }) => {
  if (loading.active) return <p>Loading...</p>;
  else
    return (
      <div className={styles.fromTo}>
        <h3>from: PLN</h3>
        <h3>to: EUR</h3>
        <CurrencyCurse course={euroCourse} />
        <InputTransaction course={euroCourse} />
      </div>
    );
};

const mapStateToProps = (state) => ({
  euroCourse: getEuroCourse(state),
  loading: getLoadingState(state),
});

const CurrencyConventerContainer = connect(
  mapStateToProps,
  null
)(CurrencyConventer);

export { CurrencyConventerContainer as CurrencyConventer };
