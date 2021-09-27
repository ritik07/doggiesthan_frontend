import React from 'react'
import ProductCardWeb from './ProductCardWeb';
import ProductCardMobile from './ProductCardMobile';

const ProductCard = (props) => {
 
  return (
    <div>
      <div className="cs-show-web">
        <ProductCardWeb bestDeals={props.bestDeals} />
      </div>

      <div className="cs-show-mobile">
        <ProductCardMobile bestDeals={props.bestDeals} />
      </div>
    </div>
  )
}

export default ProductCard
