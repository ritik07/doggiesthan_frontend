import React, { useState } from "react";
import { BulbOutlined, FileOutlined, SearchOutlined, MobileOutlined, BellFilled, UserOutlined } from "@ant-design/icons";
import { Button, Input, Popover, Menu, Badge } from "antd";
import { Row, Col } from 'reactstrap'
import logo from '../../assets/images/logo/logo.jpeg'
import "./style.css";
import CustomerServcie from '../../static/images/icons/customer-service.png'

const { SubMenu } = Menu;

const menu = (
  <Menu mode="inline" theme="light" style={{
    zIndex: 5
  }} >
    <SubMenu key="sub1" title="Bed" >
      <Menu.Item key="1">dummy</Menu.Item>
    </SubMenu>
  </Menu>
);

export const WebHeader = ({ history }) => {

  const [searchText, setSearchText] = useState("")
  const [isFocus, setIsFocus] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  const inspireContent = (
    <div className="header-item-drop" >
      <ul style={{ listStyle: 'none', textAlign: 'left', padding: 0 }}>
        <li onClick={() => history.push('/blog')} className="list-item">Blog</li>
      </ul>
    </div>
  );

  const userContent = (
    <div className="header-item-drop" >
      <ul style={{ listStyle: 'none', textAlign: 'left', padding: 0 }}>
        <li onClick={() => history.push('/quote')} className="list-item">Second Consultation Drafts</li>
        <li onClick={() => history.push('/order')} className="list-item">Active Second Consultation</li>
        <li onClick={() => history.push('/favourite')} className="list-item">Second Consultation History</li>
        <li onClick={() => history.push('/favourite')} className="list-item">Payments History</li>
        <li onClick={() => history.push('/favourite')} className="list-item">User and Family Details</li>
      </ul>
    </div>
  );

  const handleOnFocus = () => {
    setIsFocus(true)
  }

  const handleOnBlur = () => {
    setIsFocus(false)
  }

  return (
    <div className="cs-not-for-mobile cs-web-container">
      <Row className="cs-vt-center cs-dis-flex">
        <Col xl={2} lg={2} md={3}>
          <Row className="cs-vt-center cs-dis-flex">
            <Col xl={10} lg={12} md={4}>
              <img src={logo} className="cs-w-100" />
            </Col>
          </Row>
        </Col>

        <Col xl={4}>

        </Col>

        <Col xl={3} className="cs-vt-line-header">
          <div className="cs-dis-flex cs-float-right cs-pointer">
          <div className="cs-fw-600 cs-font-18 cs-clr-green cs-tp-5 cs-bp-5">
            Get Second Consultation
          </div>
          </div>
        </Col>


        <Col xl={3} lg={2} md={2}>
          <Row>
            <Col xl={1}></Col>
            <Col xl={2}>
              <div className="cs-btn-login cs-pointer cs-float-right">
                <div>
                  <img src={CustomerServcie} style={{ width: 25, height: 25 }} />
                </div>
              </div>
            </Col>
            <Col xl={2}>
              <div className="cs-btn-login cs-pointer cs-float-right">
                <div>
                  <SearchOutlined />
                </div>
              </div>
            </Col>
            <Col xl={2} lg={6} md={6}>
              <div className="cs-btn-login cs-pointer cs-float-right">
                <div>
                  <Badge size="small" count={5}>
                    <BellFilled style={{ fontSize: 20, color: "#009378" }} />
                  </Badge>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={6} md={6}>
              <Popover content={userContent} placement="bottomRight">
                <div className="cs-btn-signup cs-pointer cs-float-right">
                  <div className="cs-dis-flex cs-vt-center cs-rm-5">
                    <UserOutlined className="cs-clr-orange" />
                  </div>
                  <div className="cs-dis-flex cs-vt-center cs-clr-orange">
                    Ritik
                    </div>
                </div>
              </Popover>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>);
};
