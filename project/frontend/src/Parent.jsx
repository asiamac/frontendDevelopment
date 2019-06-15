import React, { Component } from 'react';
import Cash from './Cash';
import Measurement from './Measurement';

class Parent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Measurement />
        <Cash />
      </div>
    )
  }
}

export default Parent;
