import React, { useEffect, useState } from 'react'
import ProductCard from '../productcard'
import { useDispatch, useSelector } from 'react-redux'

const ComboProduct = ({ history }) => {
  const [data, setData] = useState([]);

  const allData = useSelector(state => state.allData);

  useEffect(() => {
    if (allData.products.length) {
      let tempData = false
      tempData = allData.products.filter((e) => e.isCombo === "Yes")
      // console.log("tempData", tempData)
      setData(tempData)
    }
  }, [allData])

  return (
    data ?
      <div>
        <div className="cs-web-container cs-bp-100">
          <div className="cs-tp-40">
            <div className="cs-font-instyle cs-font-38 cs-bp-20">
              Combo Products
            </div>
          </div>
          <ProductCard bestDeals={data} history={history} toMainProduct={true} />
        </div>
      </div>
      : null
  )
}

export default ComboProduct
