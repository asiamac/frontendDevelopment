import React, { Component } from 'react'

class PLN extends Component {
  handleChange = (e) => {
    this.props.onPLNChange(e.target.value);
  }

  render() {
    const cash = this.props.plns;
    return (
      <div>
        <label>PLN</label>
        <input value={cash} onChange={this.handleChange} />
      </div>
    )
  }
}

export default PLN;
