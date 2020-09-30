import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../common.module.css";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function CardComponent(props) {
  const classes = useStyles();
  //   const getReward = (amount) => {
  //     const lowerLimit = 50;
  //     const upperLimit = 100;
  //     let totalReward = 0;
  //     if (parseInt(amount) > 100) {
  //       totalReward = (parseInt(amount) - upperLimit) * 2 + 50;
  //       //   props.updateTotalReward(totalReward);
  //       return totalReward;
  //     } else {
  //       totalReward = (parseInt(amount) - lowerLimit) * 1;
  //       //   props.updateTotalReward(totalReward);
  //       return totalReward;
  //     }
  //   };
  return (
    <Card className={[classes.root, styles.commonMargin].join(" ")}>
      <CardContent>
        <div>
          <h2>
            Customer ID : <span>{props.custID}</span>
          </h2>
        </div>
        <div className={classes.container}>
          <div>
            <span> MONTH:</span>
            {props.date}
          </div>
          <div>
            <span> AMOUNT:</span>
            {props.amount}
          </div>
          <div>
            <span> REWARD:</span>
            {props.rewards}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
