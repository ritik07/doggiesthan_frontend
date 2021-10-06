import React, { useEffect, useState } from 'react'
import { AppController } from '../../appController/AppController'
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../components/productcard';

const SearchPage = ({ history }, props) => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState(false)

  const allData = useSelector(state => state.allData);
  const location = useLocation();

  useEffect(() => {
    if (location.state && data.length) {
      let tempFilteredData = ""
      console.log(data)
      tempFilteredData = data.filter((e) => e.name.toLowerCase() == location.state.text.toLowerCase())
      console.log("tempFilteredData", tempFilteredData)
      setFilterData(tempFilteredData)
    }
  }, [location.state])

  useEffect(() => {
    if (allData.products.length) {
      let tempData = false
      tempData = allData.products.map((data) => {
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
    <AppController history={history}>
      <div>
        {filterData ?
          <div className="cs-web-container cs-tp-40">
            <ProductCard bestDeals={filterData} history={history} toMainProduct={true} />
          </div>
          : null}
      </div>
    </AppController>
  )
}

export default SearchPage
