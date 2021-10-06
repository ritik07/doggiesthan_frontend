import React, { useEffect, useState } from 'react'
import CoverImg from '../../pages/coverimg'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../productcard';

const AllBrandComp = ({ history }) => {
  const [data, setData] = useState([]);

  const allData = useSelector(state => state.allData);
  let allBrandId = window.location.pathname.split("/")[3]
  useEffect(() => {
    if (allData.products.length) {
      let tempData = false
      tempData = allData.products.filter((e) => e.brandId === allBrandId).map((data) => {
        if (allData.subCategory.length) {
          if (allData.brand.length) {
            return Object.assign({}, data, { brandData: allData.brand.filter((filterBranddata) => filterBranddata.id == data.brandId) },
              { subcat: allData.subCategory.filter((filterdata) => filterdata.id === data.subMasterId) })
            // return Object.assign({}, data, { subcat: allData.subCategory.filter((filterdata) => filterdata.id === data.subMasterId) })
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
        <div>
          <CoverImg coverName={"Shop by Brands"} />
        </div>
        <div className="cs-web-container">
          <ProductCard bestDeals={data} history={history} toMainProduct={true} />
        </div>
      </div>
      : <div>
      </div>
  )
}

export default AllBrandComp
