import React, { Component } from 'react';

import axios from 'axios';

import Dollar from './Dollar';
import PLN from './PLN';

class Cash extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dollar: '',
      pln: '',
      rate: ''
    };
  }

  componentDidMount() {
    this.fetchDollarRate();
  }

  async fetchDollarRate() {
    await axios.get('http://api.nbp.pl/api/exchangerates/rates/c/usd/?format=json').then(response => {
      this.setState({ rate: response.rates[0].ask });
    });
  }

  handleDollarChange = (value) => {
    this.setState({ dollar: value, pln: value * this.state.rate });
  }

  handlePLNChange = (value) => {
    this.setState({ dollar: value / this.state.rate, pln: value });
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
