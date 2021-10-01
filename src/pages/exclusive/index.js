import React from 'react'
import { AppController } from '../../appController/AppController'
import ExclusiveComp from '../../components/exclusive'

const Exclusive = ({ history }) => {
  return (
    <AppController history={history}>
      <div>
        <ExclusiveComp history={history} />
      </div>
    </AppController>
  )
}

export default Exclusive
