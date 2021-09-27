import React from 'react'
import ProductCard from '../productcard'

import Product1 from '../../static/images/products/product1.jpg'
import Product2 from '../../static/images/products/product2.jpg'
import Product3 from '../../static/images/products/product3.jpg'
import Product4 from '../../static/images/products/product4.jpg'


const FeaturedProduct = () => {



  const bestDeals = [
    {
      img: Product1,
      name: "Chew Ball",
      mrp: 4500,
      sp: 3500,
      rating: 3.5,
      category: "Toys"
    },
    {
      img: Product2,
      name: "Cookie Bones",
      mrp: 25,
      sp: 15,
      rating: 3,
      category: "Food"
    },
    {
      img: Product3,
      name: "Crate Mats",
      mrp: 800,
      sp: 550,
      rating: 5,
      category: "Beds"
    },
    {
      img: Product4,
      name: "Dry Food",
      mrp: 999,
      sp: 599,
      rating: 3.5,
      category: "Food"
    }
  ]

  return (
    <div>

      <div className="cs-web-container cs-bp-100">
        <div className="cs-tp-128">
          <div className="cs-font-instyle cs-font-38 cs-bp-20">
            Best Deals
        </div>
        </div>

        <ProductCard bestDeals={bestDeals} />

      </div>
    </div>
  )
}

export default FeaturedProduct
