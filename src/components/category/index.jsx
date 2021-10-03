import React, { useEffect, useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { ImageUrl } from '../../lib/constant'

const { SubMenu } = Menu;

const Category = ({ history }) => {
  const { Option } = Select;

  const [data, setData] = useState([]);
  const [product, setProduct] = useState([])

  const allData = useSelector(state => state.allData);

  useEffect(() => {
    if (allData.completeData.length) {
      setData(allData.completeData)
    }
  }, [allData])

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
              {
                data.map((data, index) =>
                  <SubMenu key={data.id} title={data.title}>
                    {data.children.map((catData, ind) => {
                      return (
                        <SubMenu key={catData.id} title={catData.title}>
                          {catData.children.map(subCatData => (
                            <Menu.Item key={subCatData.id} onClick={() => setProduct(subCatData.children)}>
                              {subCatData.title}
                            </Menu.Item>
                          ))}
                        </SubMenu>
                      )
                    })}
                  </SubMenu>
                )}
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
          <ProductCard bestDeals={product} gridXl={4} gridMd={4} gridLg={3} history={history} isGrid={true} />
        </Col>
      </Row>

    </div>
  )
}

export default Category
