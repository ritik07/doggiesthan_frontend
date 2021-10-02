import React from 'react'
import { Table, Tag, Space, Input, Button } from 'antd';
import { Row, Col } from "react-bootstrap"
import CoverImg from '../../pages/coverimg';


const columns = [
  {
    title: 'Credits',
    dataIndex: 'credit',
    key: 'credit',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Shop Now',
    dataIndex: '',
    key: 'price',
    render: text => <Button type="primary">Shop now</Button>,
  },
  // {
  //   title: 'Quantity',
  //   dataIndex: 'qty',
  //   key: 'qty',
  // },
  // {
  //   title: 'Subtotal',
  //   dataIndex: 'subtotal',
  //   key: 'subtotal',
  // },
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
    credit: 500,
    // price: 132,
    // qty: 1,
    // subtotal: 132
  },
];

const RewardsComp = () => {
  return (
    <div>
      <div>
        <CoverImg coverName={"Your Credits"} />
      </div>
      <div className="cs-web-container cs-tp-20">
        <div>
          <div>
            {/* <div className="cs-font-instyle cs-font-32">
              Your Credits
            </div> */}
            {/* <div className="cs-hrz-divion-light cs-bm-20" /> */}

            {/* <Table className="cs-cart-table" columns={columns} dataSource={data} pagination={false} /> */}
          </div>

          <div className="cs-dis-flex">
            <div className="cs-font-instyle cs-font-24">
              Total Credit Amount -
            </div>

            <div className="cs-lp-20 cs-font-24">
              Rs 500
            </div>
          </div>

          <div className="cs-tp-20">
            <Button type="primary" className="cs-lp-20">
              Shop Now
            </Button>
          </div>

          {/* <div className="cs-dis-flex cs-tp-20">
          <Input style={{ width: 300, marginRight: 20 }} placeholder="Apply Coupon" />
          
          <Button type="primary" className="cs-lp-20">
          Apply
          </Button>
        </div> */}
        </div>
      </div>
    </div>
  )
}

export default RewardsComp
