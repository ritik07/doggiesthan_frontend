import React from 'react'
import { AppController } from '../../appController/AppController'
import CategoryComp from '../../components/category/index'
const Category = ({ history }) => {
  return (
    <AppController history={history}>
      <CategoryComp />
    </AppController>
  )
}

export default Category