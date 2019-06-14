import React, { Component } from 'react'
import clothes from '../service/ClothesDB.js'

class ClothesList extends Component {
  componentDidMount() {
    this.getData()
  }

  getData = () => clothes

  showDetails = cloth => console.log(cloth)

  render() {
    const clothesList = clothes.map(cloth => (
      <li onClick={this.showDetails(cloth.type)}>
        {cloth.model} {cloth.type} {cloth.price}
      </li>
    ))

    return <div>{clothesList}</div>
  }
}

export default ClothesList
