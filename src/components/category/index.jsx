import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product1 from '../../static/images/products/product1.jpg'
import Product2 from '../../static/images/products/product2.jpg'
import Product3 from '../../static/images/products/product3.jpg'
import Product4 from '../../static/images/products/product4.jpg'
import SideCart from '../sidecart'
import { Menu, Switch, Divider, Select } from 'antd';
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import ProductCard from '../productcard'
import { isMobile } from 'react-device-detect'


const { SubMenu } = Menu;

const Category = ({ history }) => {
  const { Option } = Select;
  const categoryData = [
    {
      img: Product1,
      parent: "Toys",
      catName: "Hard Toys",
      descp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo consequatur...",
    },
    {
      img: Product2,
      parent: "Toys",
      catName: "Soft Toys",
      descp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo consequatur...",
    },
    {
      img: Product3,
      parent: "Dog Food",
      catName: "Wet Food",
      descp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo consequatur...",
    },
    {
      img: Product4,
      parent: "Dog Food",
      catName: "Dry Food",
      descp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo consequatur...",
    }]


  const cartData = [
    {
      img: Product1,
      name: "Bella Bowl",
      qty: 4,
      sp: 140,
    },
    {
      img: Product2,
      name: "Bella Bowl",
      qty: 8,
      sp: 180,
    },
    {
      img: Product4,
      name: "Bella Bowl",
      qty: 1,
      sp: 80,
    }]

  const bestDeals = [
    {
      img: Product1,
      name: "Chew Ball",
      descp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo consequatur...",
      mrp: 4500,
      sp: 3500,
      rating: 3.5,
      category: "Toys"
    },
    {
      img: Product2,
      name: "Cookie Bones",
      descp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo consequatur...",
      mrp: 25,
      sp: 15,
      rating: 3,
      category: "Food"
    },
    {
      img: Product3,
      name: "Crate Mats",
      descp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo consequatur...",
      mrp: 800,
      sp: 550,
      rating: 5,
      category: "Beds"
    },
    {
      img: Product4,
      name: "Dry Food",
      descp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo consequatur...",
      mrp: 999,
      sp: 599,
      rating: 3.5,
      category: "Food"
    }
  ]

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <div className="cs-web-container cs-tp-60 cs-bp-100">
      <Row>

        <Col xl={3} xs={12} sm={12}>
          <div className="cs-fix-it">

            <div className="cs-font-instyle cs-font-24 cs-bp-25">
              Product Category
            </div>
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={isMobile ? [] : ['sub1', 'sub1-2', 'sub1-4', 'sub2', 'sub3', 'sub1-4']}
              mode="inline">
              <SubMenu key="sub1" title="Dogs">
                <SubMenu key="sub1-2" title="Food">
                  <Menu.Item key="5">Dry Food</Menu.Item>
                  <Menu.Item key="6">Wet Food</Menu.Item>
                </SubMenu>

                <SubMenu key="sub1-4" title="Toys">
                  <Menu.Item key="55">Soft Toys</Menu.Item>
                  <Menu.Item key="66">Hard Toys</Menu.Item>
                </SubMenu>
              </SubMenu>


              <SubMenu key="sub2" title="Cats">
                <SubMenu key="sub1-4" title="Food">
                  <Menu.Item key="7">Dry Food</Menu.Item>
                  <Menu.Item key="8">Wet Food</Menu.Item>
                </SubMenu>
              </SubMenu>
            </Menu>

            {/* <SideCart cartData={cartData} /> */}
          </div>
        </Col>

        <Col xl={9}>
          <div className="cs-dis-flex">
            <div className="cs-bp-25 cs-tp-20 cs-rp-20">
              <Select className="cs-cat-def-sorting" placeholder="Filter by price"
                style={{ width: 150 }} onChange={handleChange} size="large">
                <Option value="jack">A-Z</Option>
                <Option value="lucy">Low to High Price</Option>
                <Option value="Yiminghe">High to Low Price</Option>
              </Select>
            </div>

            <div className="cs-bp-25 cs-tp-20">
              <Select className="cs-cat-def-sorting" placeholder="Filter by brand"
                style={{ width: 150 }} onChange={handleChange} size="large">
                <Option value="jack">Puma</Option>
                <Option value="lucy">Addidas</Option>
                <Option value="Yiminghe">Nike</Option>
              </Select>
            </div>

          </div>
          <ProductCard bestDeals={bestDeals} gridXl={4} gridMd={4} gridLg={3} history={history} isGrid={true} />
        </Col>
      </Row>

    </div>
  )
}

export default Category
