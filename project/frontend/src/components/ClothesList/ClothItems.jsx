import React, { Component } from 'react';

class ClothItems extends Component {
  render() {
    const clothesList = this.props.clothes.map(cloth => (
      <li onClick={() => this.props.showDetails(this.props.clothes.indexOf(cloth))}>
        {cloth.model} {cloth.type} {cloth.price} PLN
      </li>
    ));

    return (
      <div>
        <div>Available clothes items</div>
        <ol>{clothesList}</ol>
      </div>
    );
  };
}

export default ClothItems;
