import React, { useEffect, useState } from 'react'
import CoverImg from '../../pages/coverimg'
import Product1 from '../../static/images/products/product1.jpg'
import Product2 from '../../static/images/products/product2.jpg'
import Product3 from '../../static/images/products/product3.jpg'
import Product4 from '../../static/images/products/product4.jpg'
import ProductCard from '../productcard'
import { useDispatch, useSelector } from 'react-redux'
import { ImageUrl } from '../../lib/constant'

const BrandsComp = ({ history }) => {
  const [data, setData] = useState([]);
  const [allImages, setAllImages] = useState([]);

  const allData = useSelector(state => state.allData);

  useEffect(() => {
    if (allData.brand.length) {
      setData(allData.brand)
      if (allData.brand[0].images)
        setAllImages(allData.brand[0].images.split(','))
    }
  }, [allData])

  return (
    data ?
      <div>
        <div>
          <CoverImg coverName={"Shop with world's top most brands"} />
        </div>
        <div className="cs-web-container">

          <ProductCard bestDeals={data} history={history} noPrice={true} noRating={true} openCat={true} />

        </div>
      </div>
      : <div>
        NO DATA FOUND
      </div>
  )
}


export default BrandsComp
