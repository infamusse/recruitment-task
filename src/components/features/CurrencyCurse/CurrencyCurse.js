import React from "react";
import PropTypes from "prop-types";

import { changeCurrencyValue } from "../../../redux/currencyRedux";
import { connect } from "react-redux";

import Input from "@material-ui/core/Input";
import styles from "./CurrencyCurse.module.scss";

const CurrencyCurse = ({ course, changeCurrencyValue }) => {
  return (
    <div className={styles.container}>
      <span className={styles.courseInfoText}>Use today course from NBP:</span>
      <Input
        className={styles.courseInfoInput}
        color="secondary"
        type="number"
        title="Change course"
        inputProps={{
          min: "0",
        }}
        onChange={(e) => changeCurrencyValue(e.target.value)}
        value={course}
      />
      <span className={styles.courseInfoText}>or insert Own</span>
    </div>
  );
};

CurrencyCurse.propTypes = {
  course: PropTypes.number,
  changeCurrencyValue: PropTypes.func,
};

const mapDispatchToProps = {
  changeCurrencyValue: (course) => changeCurrencyValue(course),
};

const CurrencyCurseContainer = connect(null, mapDispatchToProps)(CurrencyCurse);

export { CurrencyCurseContainer as CurrencyCurse };
