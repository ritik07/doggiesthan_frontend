import React, { useEffect, useState } from 'react'
import ProductCard from '../productcard'
import { useDispatch, useSelector } from 'react-redux'

const FeaturedProduct = ({ history }) => {
  const [data, setData] = useState([]);

  const allData = useSelector(state => state.allData);

  useEffect(() => {
    if (allData.products.length) {
      let tempData = false
      tempData = allData.products.filter((e) => e.isBestDeal === "Yes").map((data) => {
        if (allData.subCategory.length) {
          if (allData.brand.length) {
            return Object.assign({}, data, { brandData: allData.brand.filter((filterBranddata) => filterBranddata.id == data.brandId) },
              { subcat: allData.subCategory.filter((filterdata) => filterdata.id === data.subMasterId) })
          }
        }
      })
      // console.log("tempData", tempData)
      setData(tempData)
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
