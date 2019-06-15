import React, { Component } from 'react';

class ClothItems extends Component {
  render() {
    const { clothes, showDetails } = this.props;
    const clothesList = clothes.map(cloth => (
      <li key={cloth.id} onClick={async () => await showDetails(cloth.id)}>
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
