import React from 'react'
import { Row, Col } from 'react-bootstrap'

const SideCart = ({ cartData }) => {
  return (
    <div>
      <div className="cs-font-instyle cs-font-24 cs-bp-10">
        Cart
      </div>

      {cartData.map((data) => {
        return (
          <Row className="cs-bp-20">
            <Col xl={4}>
              <div className="cs-product-card cs-dis-flex cs-hrz-center cs-vt-center">
                <img src={data.img} className="cs-w-80" />
              </div>
            </Col>

            <Col xl={8}>
              <div className="cs-dis-flex cs-justify-sb">
                <div>
                  <div className="cs-font-instyle cs-font-18">
                    {data.name}
                  </div>
                  <div>
                    {data.qty} x {data.sp}
                  </div>
                </div>

                <div className="cs-cross-icon cs-dis-flex cs-hrz-center cs-vt-center cs-pointer">
                  x
                </div>
              </div>
            </Col>
          </Row>
        )
      })}


    </div>
  )
}

export default SideCart
