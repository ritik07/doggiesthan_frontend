import React from 'react'
import { AppController } from '../../appController/AppController'
import RewardsComp from '../../components/rewards'

const Rewards = ({ history }) => {
  return (
    <AppController history={history}>
      <div>
        <RewardsComp history={history} />
      </div>
    </AppController>
  )
}

export default Rewards
