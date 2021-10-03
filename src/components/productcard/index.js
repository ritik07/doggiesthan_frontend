import React from 'react'
import ProductCardWeb from './ProductCardWeb';
import ProductCardMobile from './ProductCardMobile';

const ProductCard = (props) => {
  const { gridXl, gridMd, gridLg, history, isGrid, noPrice, noRating, openCat, toMainProduct } = props
  return (
    <div>
      <div className="cs-show-web">
        <ProductCardWeb history={history} gridXl={gridXl} gridMd={gridMd}
          ridLg={gridLg} bestDeals={props.bestDeals} noPrice={noPrice} noRating={noRating}
          openCat={openCat} toMainProduct={toMainProduct}/>
      </div>

      <div className="cs-show-mobile">
        <ProductCardMobile bestDeals={props.bestDeals} isGrid={isGrid} />
      </div>
    </div>
  )
}

export default ProductCard
