import React from 'react'
import FeaturedProduct from './FeaturedProduct'
import Banners from './Banners'
import FeaturedBanner from './FeaturedBanner'

const WebHome = () => {
  return (
    <div>
      <Banners />
      <FeaturedBanner/>
      <FeaturedProduct/>
    </div>
  )
}

export default WebHome
