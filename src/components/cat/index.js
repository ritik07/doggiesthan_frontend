import React from 'react'
import CoverImg from '../../pages/coverimg'
import Product1 from '../../static/images/products/product1.jpg'
import Product2 from '../../static/images/products/product2.jpg'
import Product3 from '../../static/images/products/product3.jpg'
import Product4 from '../../static/images/products/product4.jpg'
import ProductCard from '../productcard'

const CatComp = ({history}) => {
  const bestDeals = [
    {
      img: Product1,
      name: "Chew Ball",
      descp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo consequatur...",
      mrp: 4500,
      sp: 3500,
      rating: 3.5,
      category: "Toys"
    },
    {
      img: Product2,
      name: "Cookie Bones",
      descp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo consequatur...",
      mrp: 25,
      sp: 15,
      rating: 3,
      category: "Food"
    },
    {
      img: Product3,
      name: "Crate Mats",
      descp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo consequatur...",
      mrp: 800,
      sp: 550,
      rating: 5,
      category: "Beds"
    },
    {
      img: Product4,
      name: "Dry Food",
      descp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo consequatur...",
      mrp: 999,
      sp: 599,
      rating: 3.5,
      category: "Food"
    },
    {
      img: Product1,
      name: "Chew Ball",
      descp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo consequatur...",
      mrp: 4500,
      sp: 3500,
      rating: 3.5,
      category: "Toys"
    },
    {
      img: Product2,
      name: "Cookie Bones",
      descp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo consequatur...",
      mrp: 25,
      sp: 15,
      rating: 3,
      category: "Food"
    },
    {
      img: Product3,
      name: "Crate Mats",
      descp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo consequatur...",
      mrp: 800,
      sp: 550,
      rating: 5,
      category: "Beds"
    },
    {
      img: Product4,
      name: "Dry Food",
      descp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo consequatur...",
      mrp: 999,
      sp: 599,
      rating: 3.5,
      category: "Food"
    }
  ]

  return (
    <div>
      <div>
        <CoverImg coverName={"Cat Accessories & Products"} />
      </div>
      <div className="cs-web-container">
        <ProductCard bestDeals={bestDeals} history={history} />
      </div>
    </div>
  )
}

export default CatComp
