import React, { useEffect, useState } from 'react'
import { Row, Col } from 'reactstrap'
import { HomeOutlined, ShoppingOutlined, GiftOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Badge } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

const MobileFooter = ({ history }) => {

  const [acive, setAcive] = useState("home")
  const [totalCartItem, setTotalCartItem] = useState(false)

  useEffect(() => {
    getActiveBar()
  }, [acive])

  const allData = useSelector(state => state.allData);

  useEffect(() => {
    if (allData.userCart.length) {
      setTotalCartItem(allData.userCart.length)
    }
  }, [allData])

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
            <Badge count={totalCartItem} style={{ backgroundColor: "#37bead" }} offset={[0, 0]}>
              <ShoppingCartOutlined style={{ fontSize: 24, color: acive === "cart" ? "#129b88" : "" }} onClick={() => history.push("/cart")} />
            </Badge>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default MobileFooter
