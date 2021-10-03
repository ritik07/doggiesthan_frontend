import React from 'react'
import { Row, Col } from 'reactstrap'
import { Rate } from 'antd';
import { ImageUrl } from '../../lib/constant'
import ReactHtmlParser from 'react-html-parser';
import AddToCart from '../addtocart';

const ProductCardWeb = (props) => {
  const { gridMd, gridXl, gridLg, history, noRating, noPrice, openCat, toMainProduct } = props


  const handleOnProductSelect = (id) => {
    // console.log("event", id)
    if (id) {
      history.push(`/product/${id}`)
    }
  }

  const truncateString = (str, num) => {
    // If the length of str is less than or equal to num
    // just return str--don't truncate it.
    if (str.length <= num) {
      return str
    }
    // Return str truncated with '...' concatenated to the end of str.
    return str.slice(0, num) + '...'
  }

  return (
    <Row>
      {props.bestDeals.map((data, index) => {
        console.log("all data", props.bestDeals)
        return (
          <Col key={index} xl={gridXl ? gridXl : 3} md={gridLg ? gridLg : 4} lg={gridMd ? gridMd : 3}
            className="cs-bp-30">
            <div className="cs-product-card">
              <div className="cs-dis-flex cs-hrz-center cs-vt-center">
                <img src={`${ImageUrl}/${data.images.split(',')[0]}`} className="cs-w-75 cs-pointer"
                  onClick={toMainProduct ? (e) => handleOnProductSelect(data.id) : ""} />
              </div>

              {/* <div className="cs-divider-line" /> */}

              <div className="cs-product-card-info cs-dis-flex cs-hrz-center">
                <div>
                  <div className="cs-dis-flex cs-hrz-center">
                    <div className="cs-font-caps cs-clr-cream cs-font-14 cs-pointer">
                      {data.category}
                    </div>
                  </div>

                  <div className="cs-product-card-name cs-dis-flex cs-hrz-center cs-font-instyle cs-font-26 cs-pointer">
                    {data.title}
                  </div>

                  <div className="cs-product-card-descp cs-font-16 cs-pointer cs-dis-flex cs-hrz-center" style={{ textAlign: "center" }}>
                    {/* <div dangerouslySetInnerHTML={{ __html: data.description }} /> */}
                    <div> {ReactHtmlParser(truncateString(data.description, 120))} </div>
                    {/* {data.description} */}
                  </div>

                  {!noRating && <div className="cs-dis-flex cs-hrz-center cs-golden-star">
                    <Rate style={{ fontSize: 16 }} disabled defaultValue={data.rating} allowHalf />
                  </div>}
                </div>
              </div>

              {!noPrice && <div className="cs-product-card-pricing-section">
                <div className="cs-dis-flex cs-hrz-center">
                  <div className="cs-product-card-mrp cs-rp-15">
                    ₹{data.mrp}.00
                  </div>
                  <div>
                    ₹{data.price}.00
                  </div>
                </div>
              </div>}
              {openCat ?
                <div className="cs-dis-flex cs-hrz-center cs-tp-15 cs-bp-20" onClick={() => history.push("/category")}>
                  <div className="cs-product-card-addtocart cs-pointer">
                    View Category
                  </div>
                </div>
                :
                <div className="cs-dis-flex cs-hrz-center">
                  <AddToCart history={history} productId={data.id} />
                </div>
              }
            </div>
          </Col>)
      })}
    </Row>
  )
}

export default ProductCardWeb