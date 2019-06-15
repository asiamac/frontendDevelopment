import React, { Component } from 'react'

class ClothesDetails extends Component {
  render() {
    const { size, forMen, outlet } = this.props
    return (
      <div>
        <h2>Details</h2>
        {size && <span>{size}</span>}
        <span>{forMen ? 'Cloth for men' : 'Cloth for women'}</span>
        <span>{outlet ? 'Item from outlet offer' : 'Item from regular collection'}</span>
      </div>
    )
  }
}

export default ClothesDetails;
