import React from "react";

import styles from "./CurrencyCurse.module.scss";

const CurrencyCurse = ({ course }) => {
  console.log(course, typeof course);
  return (
    <div className={styles.container}>
      <p>Today course is {course}</p>
    </div>
  );
};

export default CurrencyCurse;
