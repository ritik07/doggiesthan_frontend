import React from 'react'
import { Table, Tag, Space, Input, Button } from 'antd';

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

const CartTable = () => {
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
      <div className="cs-dis-flex cs-justify-sb cs-lp-10 cs-rp-10 cs-tp-20 cs-bp-20">
        <div>
          Subtotal
        </div>
        <div>
          (Free Shipping)
        </div>
        <div>
          Rs 132
        </div>
      </div>

      <div>
        <div className="cs-dis-flex cs-justify-sb cs-lp-10 cs-rp-10 cs-tp-20 cs-bp-20">
          <div>
            Shipping Address
          </div>

          <div className="cs-hrz-divion-light" />

          <div style={{ width: 200 }}>
            Shipping to Victoria asdsd d sadasd dsad asdsa ddsa sadasdsad das.
            <br />
            <span className="cs-clr-cream">
              Change Address
            </span>
          </div>
        </div>
      </div>

      <div className="cs-hrz-divion-light" />
    </div>
  )
}

export default CartTable
