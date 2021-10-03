import React, { useEffect, useState } from 'react'
import CoverImg from '../../pages/coverimg'
import Product1 from '../../static/images/products/product1.jpg'
import Product2 from '../../static/images/products/product2.jpg'
import Product3 from '../../static/images/products/product3.jpg'
import Product4 from '../../static/images/products/product4.jpg'
import ProductCard from '../productcard'
import { useDispatch, useSelector } from 'react-redux'
import { ImageUrl } from '../../lib/constant'

const DogComp = ({ history }) => {
  const [data, setData] = useState([]);
  const [allImages, setAllImages] = useState([]);

  const allData = useSelector(state => state.allData);

  useEffect(() => {
    let id = window.location.pathname.split('/')[2]

    if (allData.completeData.length) {
      let productsData = allData.products;
      productsData = productsData.filter(data => data.parentId === id)
      setData(productsData)
    }
  }, [allData, window.location.pathname.split('/')[2]])
  return (
    <div>
      <div>
        <CoverImg coverName={`${window.location.pathname.split('/')[1]} Accessories & Products`} />
      </div>
      <div className="cs-web-container">
        <ProductCard bestDeals={data} history={history} toMainProduct={true} />
      </div>
    </div>
  )
}

export default DogComp
