import React from 'react'
import CoverImg from '../../pages/coverimg'


const CatComp = ({history}) => {

  return (
    <div>
      <div>
        <CoverImg coverName={"Cat Accessories & Products"} />
      </div>
      <div className="cs-web-container">
        {/* <ProductCard bestDeals={bestDeals} history={history} /> */}
      </div>
    </div>
  )
}

export default CatComp
