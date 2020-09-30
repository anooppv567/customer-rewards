import React, { PureComponent } from "react";
import { Label } from "../Label/Label";
import styles from "../../common.module.css";
import CustomerID from "../customerID/customerId";
import Transaction from "../transaction/transactionInfo";
class LandingPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      customerID: null,
    };
  }
  getCustomerID = (custId) => {
    this.setState({ customerID: custId }, () => {
      console.log("state", this.state.customerID);
    });
  };
  getTranSactionComponent() {
    return (
      <div className={styles.commonMargin}>
        <Transaction custID={this.state.customerID} />
      </div>
    );
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={[styles.header, styles.commonMargin].join(" ")}>
          <Label data={{ text: "Customer Reward Program" }}> </Label>
        </div>
        <div className={styles.commonMargin}>
          <CustomerID getCustomerID={this.getCustomerID.bind(this)} />
        </div>

        {this.state.customerID && this.state.customerID.length > 0 && (
          <div className={styles.commonMargin}>
            <Transaction custID={this.state.customerID} />
          </div>
        )}
      </div>
    );
  }
}

export default LandingPage;
