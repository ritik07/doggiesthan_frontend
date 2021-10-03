import React from 'react'
import { AppController } from '../../appController/AppController'
import ProductSingleComp from '../../components/productsingle'

const ProductSingle = ({ history }) => {
  return (
    <AppController history={history}>
      <ProductSingleComp history={history} />
    </AppController>
  )
}

export default ProductSingle
