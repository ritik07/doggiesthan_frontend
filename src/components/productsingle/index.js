import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ImageUrl } from '../../lib/constant'
import { Row, Col } from 'reactstrap'
import { Rate } from 'antd';
import ReactHtmlParser from 'react-html-parser';
import AddToCart from '../addtocart';

const ProductSingleComp = ({ history }) => {
  const [data, setData] = useState(false);
  const [allImages, setAllImages] = useState([]);
  const [catName, setCatName] = useState(false)
  const allData = useSelector(state => state.allData);

  let prodid = window.location.pathname.split('/')[2]

  useEffect(() => {
    if (allData.products.length) {
      let tempData = allData.products;
      tempData = tempData.filter((e) => e.id === prodid)
      setData(tempData)
      // console.log("tempData", tempData)
      if (tempData[0].images) {
        setAllImages(tempData[0].images.split(','))
      }
    }
  }, [allData])

  useEffect(() => {
    if (data.length) {
      getSubCategory()
    }
  }, [data])

  const getSubCategory = () => {
    let tempData = allData.subCategory;
    console.log(" tempData ..", tempData)
    tempData = tempData.filter((e) => e.id === data[0].parent_id)
    setCatName(tempData)
  }



  return (
    data &&
    <div className="cs-web-container cs-tp-30 cs-bp-100">
      <div className="cs-rp-40 cs-lp-30 cs-tp-30">
        <Row>
          {console.log("object", allImages)}
          <Col xl={4} xs={12}>
            <Row>
              <Col xl={12} xs={12} className="cs-dis-flex cs-hrz-center">
                <img src={`${ImageUrl}/${allImages[0]}`} className="cs-w-80" />
              </Col>
            </Row>

            <div className="cs-pic-display cs-lp-30">
              {allImages.map((data, index) => {
                if (index > 0 && index < data.length) {
                  return (
                    <img style={{ width: 80, height: 80 }} src={`${ImageUrl}/${data}`} />
                  )
                }
              })}
            </div>
          </Col>

          <Col xl={8}>
            <div className="cs-clr-cream cs-font-21">
              Food
            </div>

            <div className="cs-font-instyle cs-font-28">
              {data[0].name}
            </div>

            <div className="cs-golden-star cs-tp-10">
              <Rate style={{ fontSize: 16 }} disabled defaultValue={data.rating} allowHalf />
            </div>

            <div className="cs-dis-flex cs-tp-10">
              <div className="cs-product-card-mrp cs-rp-15 cs-font-18 cs-dis-flex cs-vt-center">
                ₹{data[0].mrp}.00
              </div>
              <div className="cs-font-24">
                ₹{data[0].price}.00
              </div>
            </div>

            <div className="cs-tp-20 cs-font-instyle cs-font-26 cs-bp-20">
              Description
            </div>

            <div className="cs-font-18">
              {ReactHtmlParser(data[0].description)}
            </div>

            <AddToCart history={history} productId={prodid} />
          </Col>
        </Row>
        {/* 
        <div className="cs-tp-20">
          Related Products
        </div>
        <Row>
          <Col xl={4}>

          </Col>
        </Row> */}
      </div>

    </div>
  )
}

export default ProductSingleComp
