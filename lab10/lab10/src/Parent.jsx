import React, { Component } from 'react';
import Cash from './components/Cash/Cash';
import Measurement from './components/Measurement/Measurement';

class Parent extends Component {
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
