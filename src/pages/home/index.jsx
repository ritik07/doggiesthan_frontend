import React from 'react'
import { AppController } from '../../appController/AppController'
import WebHome from '../../components/home/'


export const HomePage = ({ history }) => {
  return (
    <AppController history={history}>
      <div>
        <WebHome history={history}/>
      </div>
      {/* <div className="cs-show-mobile">

      </div> */}
    </AppController>
  )
}
