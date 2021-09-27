import React from 'react'
import { Row, Col } from 'reactstrap'
import { Rate } from 'antd';

const ProductCardWeb = (props) => {
  const { gridMd, gridXl, gridLg } = props
  return (
    <Row>
      {props.bestDeals.map((data) => {
        return (
          <Col xl={gridXl ? gridXl : 3} md={gridLg ? gridLg : 4} lg={gridMd ? gridMd : 3} className="cs-bp-30">
            <div className="cs-product-card cs-pointer">
              <div className="cs-dis-flex cs-hrz-center cs-vt-center">
                <img src={data.img} className="cs-w-75" />
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
                    {data.name}
                  </div>

                  <div className="cs-product-card-descp cs-font-16 cs-pointer cs-dis-flex cs-hrz-center" style={{ textAlign: "center" }}>
                    {data.descp}
                  </div>

                  <div className="cs-dis-flex cs-hrz-center cs-golden-star">
                    <Rate style={{ fontSize: 16 }} disabled defaultValue={data.rating} allowHalf />
                  </div>
                </div>
              </div>

              <div className="cs-product-card-pricing-section">
                <div className="cs-dis-flex cs-hrz-center">
                  <div className="cs-product-card-mrp cs-rp-15">
                    ₹{data.mrp}.00
                      </div>
                  <div>
                    ₹{data.sp}.00
                      </div>
                </div>
              </div>

              <div className="cs-dis-flex cs-hrz-center cs-tp-15 cs-bp-20">
                <div className="cs-product-card-addtocart cs-pointer">
                  Add to Cart
                  </div>
              </div>
            </div>
          </Col>)
      })}
    </Row>
  )
}

export default ProductCardWeb