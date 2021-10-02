import React, { useEffect, useState } from 'react'
import { Row, Col } from 'reactstrap'
import { HomeOutlined, ShoppingOutlined, GiftOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Badge } from 'antd'

const MobileFooter = ({ history }) => {

  const [acive, setAcive] = useState("home")

  useEffect(() => {
    getActiveBar()
  }, [acive])

  const getActiveBar = () => {
    // setAcive()
    // console.log("...", window.location.pathname.split("/")[1])
    setAcive(window.location.pathname.split("/")[1])
  }

  return (
    <div className="cs-mobile-bottom-nav">
      <div className="cs-mobile-container">
        <Row>
          <Col xs={3} className="cs-dis-flex cs-hrz-center">
            <HomeOutlined style={{ fontSize: 24, color: acive === "home" ? "#129b88" : "" }} onClick={() => history.push("/")} />
          </Col>

          <Col xs={3} className="cs-dis-flex cs-hrz-center">
            <ShoppingOutlined style={{ fontSize: 24, color: acive === "category" ? "#129b88" : "" }} onClick={() => history.push("/category")} />
          </Col>

          <Col xs={3} className="cs-dis-flex cs-hrz-center" onClick={() => history.push("/rewards")}>
            <GiftOutlined style={{ fontSize: 24, color: acive === "rewards" ? "#129b88" : "" }} />
          </Col>

          <Col xs={3} className="cs-dis-flex cs-hrz-center">
            <Badge count={5} style={{ backgroundColor: "#37bead" }} offset={[0, 0]}>
              <ShoppingCartOutlined style={{ fontSize: 24, color: acive === "cart" ? "#129b88" : "" }} onClick={() => history.push("/cart")} />
            </Badge>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default MobileFooter
