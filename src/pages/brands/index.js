import React from 'react'
import { AppController } from '../../appController/AppController'
import BrandsComp from '../../components/brands'

const Brands = ({ history }) => {
  return (
    <AppController history={history}>
      <div>
        <BrandsComp history={history} />
      </div>
    </AppController>
  )
}

export default Brands