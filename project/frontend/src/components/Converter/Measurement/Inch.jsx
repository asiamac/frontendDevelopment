import React, { Component } from 'react'

class Inch extends Component {

  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.props.onInchChange(e.target.value);
  }

  render() {
    const measurement = this.props.inches;
    return (
      <div>
        <input value={measurement} onChange={this.handleChange} />
        <label>in</label>
      </div>
    )
  }
}

export default Inch;
