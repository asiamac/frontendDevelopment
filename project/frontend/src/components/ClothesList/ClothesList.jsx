import React, { Component } from 'react'

import axios from 'axios'

import ClothesDetails from './ClothesDetails'
import ClothItems from './ClothItems'
import ListTitle from './ListTitle'

class ClothesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clothes: []
    };
  }

  componentDidMount() {
    this.fetchClothes()
  }

  async fetchClothes() {
    const response = await axios.get('');

    this.setState({ clothes: response.clothes });
  }

  showDetails = cloth => console.log(cloth)

  render() {
    return (
      <div>
        <ListTitle />
        {/* <ClothItems /> */}
        <ClothesDetails />
      </div>
    );
  };
}

export default ClothesList;
