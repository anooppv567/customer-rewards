import React, { PureComponent } from "react";
import CARD from "../card/card";
import "./transactionInfo.css";
import { sampleData } from "../../data/custdata";
import TOTALREWARD from "../totalReward/totalReward";
class Transaction extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      custData: [],
      sampleData: sampleData,
      total: 0,
    };
  }
  updateData = () => {
    const tempData = this.state.sampleData.filter((customer) => {
      return customer.customerId.toString() === this.props.custID;
    });

    //et custData = { ...this.state.custData };
    //custData = tempData;
    return tempData;
  };
  componentWillReceiveProps(newProps) {
    this.updateData(newProps);
  }
  updateTotalReward = (rewards) => {
    let total = this.state.total;
    total += rewards;
    this.setState({
      ...this.state,
      total: total,
    });
  };

  getReward = (amount) => {
    const lowerLimit = 50;
    const upperLimit = 100;
    let totalReward = 0;
    if (parseInt(amount) > 100) {
      totalReward = (parseInt(amount) - upperLimit) * 2 + 50;
      //   props.updateTotalReward(totalReward);
      return totalReward;
    } else {
      totalReward = (parseInt(amount) - lowerLimit) * 1;
      //   props.updateTotalReward(totalReward);
      return totalReward;
    }
  };

  getTotalRewards(customerData) {
    let totalReward = 0;
    this.updateData().map((custData) => {
      custData.transactions.map((data) => {
        totalReward += this.getReward(data.amount);
      });
    });

    return totalReward;
  }
  render() {
    return (
      <div>
        <div className="container">
          {this.updateData().map(
            (custObj) =>
              custObj.transactions &&
              custObj.transactions.map((transaction) => (
                <CARD
                  key={
                    custObj.customerId + transaction.amount + transaction.date
                  }
                  custID={custObj.customerId}
                  amount={transaction.amount}
                  date={transaction.date}
                  rewards={this.getReward(transaction.amount)}
                />
              ))
          )}
        </div>
        <TOTALREWARD total={this.getTotalRewards()} />
      </div>
    );
  }
}
export default Transaction;
