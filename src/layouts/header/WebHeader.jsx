import React, { useState } from "react";
import { SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Input, Popover, Menu, Badge, Avatar } from "antd";
import { Row, Col } from 'reactstrap'
import "./style.css";
import Reward from '../../static/images/icons/reward.png'

const { SubMenu } = Menu;

const menu = (
  <Menu mode="inline" theme="light" style={{ zIndex: 5 }} >
    <SubMenu key="sub1" title="Bed" >
      <Menu.Item key="1">dummy</Menu.Item>
    </SubMenu>
  </Menu>
);


export const WebHeader = ({ history }) => {

  const [searchText, setSearchText] = useState("")
  const [isFocus, setIsFocus] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(true)


  const { Search } = Input;

  const inspireContent = (
    <div className="header-item-drop" >
      <ul style={{ listStyle: 'none', textAlign: 'left', padding: 0 }}>
        <li onClick={() => history.push('/blog')} className="list-item">Blog</li>
      </ul>
    </div>
  );

  const handleOnFocus = () => {
    setIsFocus(true)
  }

  const handleOnBlur = () => {
    setIsFocus(false)
  }

  const onSearch = value => console.log(value);

  return (
    <div className="cs-web-container">
      <div className="cs-web-navbar">
        <Row>
          <Col xl={3} lg={2} md={3}>
            <div className="cs-font-instyle cs-font-26">Doggiesthan</div>
          </Col>

          <Col xl={6} lg={6} md={5} className="cs-h-v-center">
            <div className="d ai-center">
              <Input size="large" placeholder="serach in category" allowClear={true} prefix={<SearchOutlined />} />
              <div className="search-cat">
                Search
							</div>
            </div>
          </Col>

          <Col xl={3} lg={4} md={4} className="cs-h-v-center">
            <Row>
              <Col xl={1} lg={1} >

              </Col>
              <Col xl={4} lg={4} md={3}>
                <Badge count={5} style={{ backgroundColor: "#14beac" }} offset={[0, 0]}>
                  {/* <Avatar src={Reward} shape="square" size="large" /> */}
                  <img src={Reward} style={{ width: 35, height: 35 }} />
                </Badge>
              </Col>

              <Col xl={3} lg={3} md={3}>
                <Badge count={5} style={{ backgroundColor: "#14beac" }} offset={[0, 0]}>
                  <ShoppingCartOutlined style={{ fontSize: 35 }} />
                </Badge>
                {/* <ShoppingCartOutlined style={{ fontSize: 35 }} /> */}
                {/* <img src={Reward} style={{ width: 35, height: 35 }} /> */}
              </Col>

              <Col xl={3} lg={3} md={4}>
                <div className="cs-dis-flex">
                  <div className="cs-dis-flex cs-vt-center">
                    <UserOutlined style={{ fontSize: 30 }} />
                  </div>
                  <div className="cs-font-18 cs-fw-500 cs-lm-10">
                    Login
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>);
};
