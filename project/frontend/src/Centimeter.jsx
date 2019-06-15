import React, { Component } from 'react'

class Centimeter extends Component {

  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.props.onCentimeterChange(e.target.value);
  }

  render() {
    const measurement = this.props.cms;
    return (
      <div>
        <input value={measurement} onChange={this.handleChange} />
        <label>cm</label>
      </div>
    )
  }
}

export default Centimeter;
