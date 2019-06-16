import React, { Component } from 'react'

import { getClothesSummary, getClothDetails, deleteCloth } from '../../services/ClothesApi';

import ClothesDetails from './ClothesDetails'
import ClothItems from './ClothItems'
import ListTitle from './ListTitle'
import AddClothForm from '../AddClothForm';

class ClothesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clothes: null,
      details: null,
      edited: null
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

  deleteCloth = async (id) => {
    await deleteCloth(id);
    this.setState({ clothes: await getClothesSummary() });
    if (this.state.details !== null && id === this.state.details.id) (
      this.setState({ details: null })
    )
  }

  updateCloth = (cloth) => {
    this.setState({ edited: cloth });
  }

  updated = async () => {
    this.setState({ edited: null });

    await this.fetchClothes();
  }

  render() {
    const { clothes, details, edited } = this.state;

    return (
      <div>
        <ListTitle />
        {clothes && <ClothItems clothes={clothes} showDetails={this.showDetails} deleteCloth={this.deleteCloth} updateCloth={this.updateCloth} />}
        {details && <ClothesDetails size={details.size} forMen={details.forMen} outlet={details.outlet} />}
        {edited && <AddClothForm initialValues={edited} updateCallback={this.updated} />}
      </div>
    );
  };
}

export default ClothesList;
