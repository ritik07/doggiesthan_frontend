import React, { useEffect, useState } from 'react'
import ProductCard from '../productcard'
import Product1 from '../../static/images/products/product1.jpg'
import Product2 from '../../static/images/products/product2.jpg'
import Product3 from '../../static/images/products/product3.jpg'
import Product4 from '../../static/images/products/product4.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { ImageUrl } from '../../lib/constant'



const FeaturedProduct = ({ history }) => {
  const [data, setData] = useState([]);
  const [allImages, setAllImages] = useState([]);

  const allData = useSelector(state => state.allData);

  useEffect(() => {
    if (allData.products.length) {
      let tempData = allData.products;
      tempData = tempData.filter((e) => e.isBestDeal === "Yes")
      setData(tempData)
      if (allData.products[0].images)
        setAllImages(allData.products[0].images.split(','))
    }
  }, [allData])

  return (
    data ?
      <div>
        <div className="cs-web-container">
          <div className="cs-tp-128">
            <div className="cs-font-instyle cs-font-38 cs-bp-20">
              Best Deals
            </div>
          </div>
          <ProductCard bestDeals={data} history={history} toMainProduct={true} />
        </div>
      </div>
      : null
  )
}

export default FeaturedProduct
