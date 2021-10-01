import React from 'react'
import { AppController } from '../../appController/AppController'
import DogComp from '../../components/dog/index'

const Dogs = ({ history }) => {
  return (
    <AppController history={history}>
      <div>
        <DogComp history={history} />
      </div>
    </AppController>
  )
}

export default Dogs
