import React, { Component } from 'react';

class ClothItems extends Component {
  render() {
    const { clothes, showDetails, deleteCloth } = this.props;
    const clothesList = clothes.map(cloth => (
      <div key={cloth.id}>
        <li onClick={async () => await showDetails(cloth.id)}>
          {cloth.model} {cloth.type} {cloth.price} PLN
        </li>
        <button onClick={async () => await deleteCloth(cloth.id)}>Delete</button>
      </div>
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
