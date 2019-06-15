import React, { Component } from 'react';
import Cash from './Cash/Cash';
import Measurement from './Measurement/Measurement';

class Converter extends Component {

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

export default Converter;
