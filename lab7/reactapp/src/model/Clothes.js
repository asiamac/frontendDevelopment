import React, { Component } from 'react'
import ClothesList from '../components/ClothesList.js'
import DatabaseTitle from '../components/DatabaseTitle.js'
import ClothesDetails from '../components/ClothesDetails.js'

class Clothes extends Component {
  render() {
    return (
      <div>
        <DatabaseTitle />
        <ClothesList />
        <ClothesDetails />
      </div>
    )
  }
}

export default Clothes
