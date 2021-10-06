import React, { useEffect, useState } from 'react'
import ProductCard from '../productcard'

import Product1 from '../../static/images/products/product1.jpg'
import Product2 from '../../static/images/products/product2.jpg'
import Product3 from '../../static/images/products/product3.jpg'
import Product4 from '../../static/images/products/product4.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { ImageUrl } from '../../lib/constant'

const Category = ({ history }) => {
  const [data, setData] = useState([]);

  const allData = useSelector(state => state.allData);

  useEffect(() => {
    if (allData.subCategory.length) {
      setData(allData.subCategory)
    }
  }, [allData])

  return (
    allData.subCategory.length &&
    <div>
      <div className="cs-web-container cs-bp-100">
        <div className="cs-tp-100 cs-dis-flex cs-justify-sb">
          <div className="cs-font-instyle cs-font-38 cs-bp-20">
            Shop by category
          </div>

          <div className="cs-dis-flex cs-vt-center cs-pointer" onClick={() => history.push("/category")}>
            See All
          </div>
        </div>
        <ProductCard bestDeals={data} history={history} noPrice={true} noRating={true} openCat={true} />
      </div>
    </div>
  )
}

export default Category
