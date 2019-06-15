import React, { Component } from 'react';
import Dollar from './Dollar';
import PLN from './PLN';

class Cash extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dollar: 1,
      pln: 2
    };
  }

  rate = 3.83439994;

  handleDollarChange = (value) => {
    this.setState({ dollar: value, pln: value * this.rate });
  }

  handlePLNChange = (value) => {
    this.setState({ dollar: value / this.rate, pln: value });
  }

  render() {
    return (
      <div>
        <div>Convert payment</div>
        <Dollar dollars={this.state.dollar} onDollarChange={this.handleDollarChange}></Dollar>
        <PLN plns={this.state.pln} onPLNChange={this.handlePLNChange}></PLN>
      </div>
    )
  }
}

export default Cash;
