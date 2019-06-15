import React, { Component } from 'react';
import Inch from './Inch';
import Centimeter from './Centimeter';

class Measurement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inch: null,
      cm: null
    };
  }

  ratio = 2.54;

  handleInchChange = (value) => {
    this.setState({ inch: value, cm: value * this.ratio });
  }

  handleCentimeterChange = (value) => {
    this.setState({ inch: value / this.ratio, cm: value });
  }

  render() {
    return (
      <div>
        <div>Convert measurement</div>
        <Inch inches={this.state.inch} onInchChange={this.handleInchChange}></Inch>
        <Centimeter cms={this.state.cm} onCentimeterChange={this.handleCentimeterChange}></Centimeter>
      </div>
    )
  }
}

export default Measurement;
