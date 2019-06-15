import React, { Component } from 'react'

class Inch extends Component {
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
