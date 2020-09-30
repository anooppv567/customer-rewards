import React, { Component } from "react";
import "./customerId.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
class CustomerID extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  valueChange = (event) => {
    this.setState({ value: event.target.value });
  };
  submitCustId = () => {
    if (this.state.value.length > 0) {
      this.props.getCustomerID(this.state.value);
    }
  };
  render() {
    return (
      <div className="customerContainer">
        <div className="custItem">
          <div>Customer ID :</div>
        </div>
        <div className="custItem">
          <form noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              value={this.state.value}
              label="Ex: 1,2,3"
              variant="outlined"
              onChange={this.valueChange}
            />
          </form>
        </div>
        <div className="custItem">
          <Button className="btn" onClick={() => this.submitCustId()}>
            Submit
          </Button>
        </div>
      </div>
    );
  }
}
export default CustomerID;
