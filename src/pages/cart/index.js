import React from 'react'
import { AppController } from '../../appController/AppController'
import CartComp from '../../components/cart'

export const Cart = ({ history }) => {
  return (
    <div>
      <AppController history={history}>
        <CartComp history={history}/>
      </AppController>
    </div>
  )
}
