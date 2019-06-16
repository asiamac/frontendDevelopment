import React, { Component } from 'react'

import clothes from '../service/ClothesDB.js'

import ClothesDetails from './ClothesDetails'
import ClothItems from './ClothItems'
import ListTitle from './ListTitle'

class ClothesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clothes: null,
      details: null,
    };
  }

  componentDidMount() {
    this.getClothes();
  }

  getClothes = () => {
    this.setState({ clothes });
  }

  showDetails = (cloth) => {
    if (clothes.id === cloth.id) {
      this.setState({ details: cloth });
    }
  }

  render() {
    const { clothes, details } = this.state;
    const clothesList = clothes && clothes.map(cloth => (
      <li onClick={this.showDetails(cloth.id)}>
        <ClothItems clothes={cloth} showDetails={this.showDetails(cloth)} />
        {details && <ClothesDetails size={details.size} forMen={details.forMen} outlet={details.outlet} />}
      </li>
    ));

    return (
      <div>
        <ListTitle />
        <div>{clothesList}</div>
      </div>
    );
  }
}

export default ClothesList;
