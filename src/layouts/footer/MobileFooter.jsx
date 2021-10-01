import React from 'react'
import { Row, Col } from 'reactstrap'
import { HomeOutlined, ShoppingOutlined, GiftOutlined, ShoppingCartOutlined } from '@ant-design/icons'

const MobileFooter = ({ history }) => {
  return (
    <div className="cs-mobile-bottom-nav">
      <div className="cs-mobile-container">
        <Row>
          <Col xs={3} className="cs-dis-flex cs-hrz-center">
            <HomeOutlined style={{ fontSize: 24, color: "#129b88" }} onClick={() => history.push("/")} />
          </Col>

          <Col xs={3} className="cs-dis-flex cs-hrz-center">
            <ShoppingOutlined style={{ fontSize: 24 }}  onClick={() => history.push("/category")}/>
          </Col>

          <Col xs={3} className="cs-dis-flex cs-hrz-center">
            <GiftOutlined style={{ fontSize: 24 }} />
          </Col>

          <Col xs={3} className="cs-dis-flex cs-hrz-center">
            <ShoppingCartOutlined style={{ fontSize: 24 }} onClick={() => history.push("/cart")}/>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default MobileFooter
