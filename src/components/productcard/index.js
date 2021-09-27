import React from 'react'
import ProductCardWeb from './ProductCardWeb';
import ProductCardMobile from './ProductCardMobile';

const ProductCard = (props) => {
  const { gridXl, gridMd, gridLg } = props
  return (
    <div>
      <div className="cs-show-web">
        <ProductCardWeb gridXl={gridXl} gridMd={gridMd} gridLg={gridLg} bestDeals={props.bestDeals} />
      </div>

      <div className="cs-show-mobile">
        <ProductCardMobile bestDeals={props.bestDeals} />
      </div>
    </div>
  )
}

export default ProductCard
