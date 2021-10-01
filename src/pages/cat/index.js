import React from 'react'
import { AppController } from '../../appController/AppController'
import CatComp from '../../components/cat'

const Cats = ({ history }) => {
  return (
    <AppController history={history}>
      <div>
        <CatComp history={history} />
      </div>
    </AppController>
  )
}

export default Cats