import React from 'react'
import { AppController } from '../../appController/AppController'
import TodayDealComp from '../../components/todaydeal'

const TodayDeal = ({history}) => {
  return (
    <AppController history={history}>
      <div>
        <TodayDealComp history={history} />
      </div>
    </AppController>
  )
}

export default TodayDeal
