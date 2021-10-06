import React from 'react'
import { AppController } from '../../appController/AppController'
import AllBrandComp from '../../components/allbrand'

const AllBrands = ({ history }) => {
  return (
    <div>
      <AppController history={history}>
        <AllBrandComp history={history} />
      </AppController>
    </div>
  )
}

export default AllBrands
