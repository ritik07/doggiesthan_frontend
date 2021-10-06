import React, { useEffect, useState } from 'react'
import { SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Menu, Badge } from "antd";
import { Row, Col } from 'reactstrap'
import "./style.css";
import Reward from '../../static/images/icons/reward.png'
import logo from '../../static/images/icons/logo.jpeg'
import { useDispatch, useSelector } from 'react-redux'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const { SubMenu } = Menu;

const menu = (
  <Menu mode="inline" theme="light" style={{ zIndex: 5 }} >
    <SubMenu key="sub1" title="Bed" >
      <Menu.Item key="1">dummy</Menu.Item>
    </SubMenu>
  </Menu>
);


export const WebHeader = ({ history }) => {

  const [data, setData] = useState([]);
  const [totalCartItem, setTotalCartItem] = useState(false)
  const [isSearch, setIsSearch] = useState(false)

  const allData = useSelector(state => state.allData);

  useEffect(() => {
    if (allData.completeData.length) {
      setData(allData.completeData)
    }
    if (allData.userCart.length) {
      setTotalCartItem(allData.userCart.length)
    }
  }, [allData, data])

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

  const handleOnSearch = (value) => {
    if (value) {
      history.push('/search')
    } else {
      history.push("/")
    }
  }

  useEffect(() => {
    if (searchText.length > 0) {
      history.push({
        pathname: '/search',
        search: searchText,
        state: { text: searchText }
      })
    }
  }, [searchText])

  const handleOnSearchText = (e) => {
    setSearchText(e.target.value)
  }

  return (
    <div className="cs-web-container">
      <div className="cs-web-navbar">
        {window.location.pathname.split('/')[1] === "search" ? <Row>
          <Col xl={11}>
            <Input autoFocus size="large" placeholder="Search Products" style={{ width: "100%" }}
              // onBlur={() => handleOnSearch(false)}
              onChange={(e) => handleOnSearchText(e)} />
          </Col>
          <Col xl={1} className="cs-dis-flex cs-vt-center cs-pointer" onClick={() => handleOnSearch(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </Col>
        </Row> : <Row>
          <Col xl={1} lg={1} md={1} className="cs-vt-center cs-dis-flex">
            {/* <div className="cs-font-instyle cs-font-26">Doggiesthan</div> */}
            <SearchOutlined style={{ fontSize: 22 }} autoFocus={true} onClick={() => handleOnSearch(true)} />
          </Col>

          {data.map((data, index) => {
            if (index <= 1) {
              return (
                <Col xl={1} lg={1} md={1} className="cs-vt-center cs-dis-flex">
                  <div className="cs-font-18 cs-fw-500 cs-lm-10 cs-pointer" onClick={() => history.push(`/${data.title}/${data.id}`)}>
                    {data.title}
                  </div>
                </Col>
              )
            }
          })}

          {/* <Col xl={1} lg={1} md={1} className="cs-vt-center cs-dis-flex">
            <div className="cs-font-18 cs-fw-500 cs-lm-10 cs-pointer" onClick={() => history.push("/dogs")}>
              DOG
            </div>
          </Col>

          <Col xl={1} lg={1} md={1} className="cs-vt-center cs-dis-flex">
            <div className="cs-font-18 cs-fw-500 cs-lm-10 cs-pointer" onClick={() => history.push("/cats")}>
              CAT
            </div>
          </Col> */}

          <Col xl={2} lg={1} md={1} className="cs-vt-center cs-dis-flex">
            <div className="cs-font-18 cs-fw-500 cs-lm-10 cs-pointer" onClick={() => history.push("/bestdeals")}>
              TODAY'S DEAL
            </div>
          </Col>


          <Col xl={2} lg={6} md={5} className="cs-hrz-center cs-dis-flex cs-pointer" onClick={() => history.push('/')}>
            <div style={{ width: 165 }}>
              <img src={logo} className="cs-w-100" />
            </div>
            {/* <div className="d ai-center">
              <Input size="large" placeholder="serach in category" allowClear={true} prefix={<SearchOutlined />} />
              <div className="search-cat">
                Search
							</div>
            </div> */}
          </Col>

          <Col xl={1} lg={1} md={1} className="cs-vt-center cs-dis-flex">
            <div className="cs-font-18 cs-fw-500 cs-lm-10 cs-pointer" onClick={() => history.push("/brands")}>
              BRANDS
            </div>
          </Col>

          <Col xl={1} lg={1} md={1} className="cs-vt-center cs-dis-flex">
            <div className="cs-font-18 cs-fw-500 cs-lm-10 cs-pointer" onClick={() => history.push("/exclusive")}>
              EXCLUSIVE
            </div>
          </Col>


          <Col xl={1} lg={1} md={1} className="cs-vt-center cs-dis-flex">
          </Col>

          <Col xl={2} lg={4} md={4} className="cs-h-v-center">
            <Row>

              <Col xl={4} lg={4} md={3} onClick={() => history.push("/rewards")}>
                <Badge count={500} style={{ backgroundColor: "#37bead" }} offset={[0, 0]}>
                  <img src={Reward} style={{ width: 35, height: 35 }} />
                </Badge>
              </Col>

              <Col xl={1} lg={1} >

              </Col>

              <Col xl={3} lg={3} md={3} onClick={() => history.push("/cart")} className="cs-pointer">
                <Badge count={totalCartItem} style={{ backgroundColor: "#37bead" }} offset={[0, 0]}>
                  <ShoppingCartOutlined style={{ fontSize: 35 }} />
                </Badge>
                {/* <ShoppingCartOutlined style={{ fontSize: 35 }} /> */}
                {/* <img src={Reward} style={{ width: 35, height: 35 }} /> */}
              </Col>

              <Col xl={1} lg={1} >

              </Col>

              <Col xl={1} lg={3} md={4}>
                <div className="cs-dis-flex">
                  <div className="cs-dis-flex cs-vt-center">
                    <UserOutlined style={{ fontSize: 30 }} />
                  </div>
                  {/* <div className="cs-font-18 cs-fw-500 cs-lm-10">
                    Login
                  </div> */}
                </div>
              </Col>

            </Row>
          </Col>
        </Row>}
      </div>
    </div>);
};
