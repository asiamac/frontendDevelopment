import React, { Component } from 'react'

import { getClothesSummary, getClothDetails } from '../../services/ClothesApi';

import ClothesDetails from './ClothesDetails'
import ClothItems from './ClothItems'
import ListTitle from './ListTitle'

class ClothesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clothes: null,
      details: null
    };
  }

  async componentDidMount() {
    await this.fetchClothes();
  }

  async fetchClothes() {
    this.setState({ clothes: await getClothesSummary() });
  }

  showDetails = async (id) => {
    this.setState({ details: await getClothDetails(id) });
  }

  render() {
    const { clothes, details } = this.state;

    return (
      <div>
        <ListTitle />
        { clothes && <ClothItems clothes={clothes} showDetails={this.showDetails} /> }
        { details && <ClothesDetails size={details.size} forMen={details.forMen} outlet={details.outlet} /> }
      </div>
    );
  };
}

export default ClothesList;
