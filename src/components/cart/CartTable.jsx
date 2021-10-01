import React from 'react'
import { Table, Tag, Space, Input, Button } from 'antd';
import { Row, Col } from "react-bootstrap"

const columns = [
  {
    title: 'Product',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Quantity',
    dataIndex: 'qty',
    key: 'qty',
  },
  {
    title: 'Subtotal',
    dataIndex: 'subtotal',
    key: 'subtotal',
  },
  // {
  //   title: 'Action',
  //   key: 'action',
  //   render: (text, record) => (
  //     <Space size="middle">
  //       <a>Invite {record.name}</a>
  //       <a>Delete</a>
  //     </Space>
  //   ),
  // },
];

const data = [
  {
    key: '1',
    name: 'Bella Soft Toy',
    price: 132,
    qty: 1,
    subtotal: 132
  },
];

const CartTable = ({ history }) => {
  return (
    <div>
      <div>
        <div>
          <div className="cs-font-instyle cs-font-24 cs-bp-20">
            Shopping Cart
          </div>
          <Table className="cs-cart-table" columns={columns} dataSource={data} pagination={false} />
        </div>

        <div className="cs-dis-flex cs-tp-20">
          <Input style={{ width: 300, marginRight: 20 }} placeholder="Apply Coupon" />

          <Button type="primary" className="cs-lp-20">
            Apply
          </Button>
        </div>
      </div>

      <div className="cs-font-instyle cs-font-24 cs-tp-30 cs-bp-15">
        Cart totals
      </div>

      <div className="cs-hrz-divion" />
      <Row className="cs-tp-20 cs-bp-20">
        <Col xl={6}>
          Subtotal
        </Col>
        <Col xl={6}>
          Rs 132
        </Col>
      </Row>

      <div className="cs-hrz-divion-light" />

      <Row className="cs-tp-20 cs-bp-20">
        <Col xl={6}>
          Shipping Address
        </Col>
        <Col xl={6}>
          <div className="cs-bp-10">
            (Free Shipping)
          </div>
          <div className="cs-bp-10">
            Shipping to Victoria asdsd d sadasd dsad asdsa ddsa sadasdsad das.
          </div>
          <div className="cs-clr-cream">
            Change Address
          </div>
        </Col>
      </Row>

      <div className="cs-hrz-divion-light" />

      <Row className="cs-tp-20 cs-bp-20">
        <Col xl={6} className="cs-fw-700 cs-font-20">
          Total
        </Col>
        <Col xl={6} className="cs-fw-700 cs-font-20">
          Rs 132
        </Col>
      </Row>

      <div className="cs-hrz-divion-bold" />

      <div className="cs-dis-flex cs-hrz-center cs-tp-20 cs-pointer">
        <div className="cs-btn-proceed-chkout" onClick={() => history.push("/checkout")}>
          PROCEED TO CHECKOUT
        </div>
      </div>
    </div>
  )
}

export default CartTable
