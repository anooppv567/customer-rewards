import React from "react";
import styles from "../../common.module.css";

export default function TOTALREWARD(props) {
  return (
    <div className={styles.totalContainer}>
      <div>
        {" "}
        TOTAL REWARDS : <span>{props.total}</span>
      </div>
    </div>
  );
}
