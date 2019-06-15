import React, { Component } from 'react';

class ClothItems extends Component {
  render() {
    return (
      <div>
        <div>Available clothes items</div>
        <ol>
          {this.props.clothes.map(cloth => <li key={cloth.id}
            onClick={() => this.props.selectionHandler(this.props.clothes.indexOf(cloth))}>{cloth.type} {cloth.model}, {cloth.price} PLN</li>)}
        </ol>
      </div>
    );
  };
}

export default ClothItems
