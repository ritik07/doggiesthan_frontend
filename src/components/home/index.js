import React from 'react'
import FeaturedProduct from './FeaturedProduct'
import Banners from './Banners'
import FeaturedBanner from './FeaturedBanner'
import Category from './Category'

const WebHome = ({ history }) => {
  return (
    <div>
      <Banners />
      <FeaturedBanner />
      <FeaturedProduct />
      <Category history={history} />
    </div>
  )
}

export default WebHome
