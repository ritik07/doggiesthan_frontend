import React from 'react'
import CartTable from './CartTable'

const CartComp = ({history}) => {
  return (
    <div className="cs-web-container cs-tp-40 cs-bp-100">
      <CartTable history={history}/>
    </div>
  )
}

export default CartComp
