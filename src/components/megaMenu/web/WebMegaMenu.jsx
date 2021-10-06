import React, { useEffect, useState } from 'react'
import { Popover, Menu } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from 'react-redux'

const { SubMenu } = Menu


const Foodmenu = <div className="menu-popover menu-popover-submenu">
  <div>
    <div className="cs-fw-600 cs-font-18 cs-bm-15">
      Dog Food
    </div>
    <div className="cs-fw-500 cs-font-16 cs-bm-10 cs-pointer">Dry Food</div>
    <div className="cs-fw-500 cs-font-16 cs-bm-10 cs-pointer">Wet Food</div>
    <div className="cs-fw-500 cs-font-16 cs-bm-10 cs-pointer">Gain Food</div>
    <div className="cs-fw-500 cs-font-16 cs-bm-10 cs-pointer">Puppy Food</div>
  </div>

  <div className="cs-tm-20">
    <div className="cs-fw-600 cs-font-18 cs-bm-15">
      Cat Food
    </div>
    <div className="cs-fw-500 cs-font-16 cs-bm-10 cs-pointer">Dry Food</div>
    <div className="cs-fw-500 cs-font-16 cs-bm-10 cs-pointer">Wet Food</div>
    <div className="cs-fw-500 cs-font-16 cs-bm-10 cs-pointer">Gain Food</div>
    <div className="cs-fw-500 cs-font-16 cs-bm-10 cs-pointer">Kittne Food</div>
  </div>
</div>;


const GroomingMenu = <div className="menu-popover menu-popover-submenu">
  <div>
    <div className="cs-fw-600 cs-font-18 cs-bm-15">
      Dog Grooming
    </div>
    <div className="cs-fw-500 cs-font-16 cs-bm-10 cs-pointer">Shampoo</div>
    <div className="cs-fw-500 cs-font-16 cs-bm-10 cs-pointer">Conditioner</div>
    <div className="cs-fw-500 cs-font-16 cs-bm-10 cs-pointer">Puppy Grooming</div>
    <div className="cs-fw-500 cs-font-16 cs-bm-10 cs-pointer">Oral Hygiene</div>
    <div className="cs-fw-500 cs-font-16 cs-bm-10 cs-pointer">Tick and Flea</div>
    <div className="cs-fw-500 cs-font-16 cs-bm-10 cs-pointer">Brushes and Combs</div>
  </div>
</div>;


// const menu = (catData) => <div className="menu-popover">
//   <div>
//     {data.map((catData, index) => {
//       <div className="cs-fw-500 cs-font-16 cs-bm-10 cs-pointer">Food</div>
//     })}
//   </div>
// </div>;

const services = <div className="menu-popover">
  <div>
    <div className="cs-fw-500 cs-font-16 cs-bm-10 cs-pointer">Grooming</div>
  </div>
</div>;

const cateogryPopoverData = (data) => <div className="menu-popover">
  {/* {console.log("dadasd", data)} */}
  <div>
    {data.map((mainCategory, index) => {
      return mainCategory.children.map((categoryData, index) => {
        if (categoryData.parentId === mainCategory.id) {
          return (
            <div className="cs-fw-500 cs-font-16 cs-bm-10 cs-pointer">{categoryData.title}</div>
          )
        }
      })
    })}
  </div>
</div>;


export const WebMegaMenu = ({ history }) => {
  const [data, setData] = useState([]);

  const allData = useSelector(state => state.allData);

  useEffect(() => {
    if (allData.completeData.length) {
      // console.log("completeData", allData.completeData)
      setData(allData.completeData)
    }
  }, [allData])
  return (
    data &&
    <>
      <div>
        <div className="mega-menu-wrapper">
          <ul className="menu-ul">
            {/* <Popover content={<div className="menu-popover">
              <div>
                {data.map((catData, index) => {
                  return (
                    <Popover content={cateogryPopoverData(data)} placement="rightBottom">
                      <div key={index} className="cs-fw-500 cs-font-16 cs-bm-10 cs-pointer">
                        {catData.title}
                      </div>
                    </Popover>
                  )
                })}
              </div>
            </div>} placement="bottomLeft">
              <li className="menu-li">
                <div className="cs-dis-flex">
                  <div className="cs-clr-fff cs-fw-600">Shop by Category</div>
                  <div className="cs-vt-center cs-dis-flex cs-clr-fff"><CaretDownOutlined /></div>
                </div>
              </li>
            </Popover> */}

            <Popover content={services} placement="bottomLeft">
              <li className="menu-li">
                <div className="cs-dis-flex">
                  <div className="cs-clr-fff cs-fw-600">Services</div>
                  <div className="cs-vt-center cs-dis-flex cs-clr-fff"><CaretDownOutlined /></div>
                </div>
              </li>
            </Popover>

            <li className="menu-li" onClick={() => history.push("/brands")}>
              <div className="cs-dis-flex">
                <div className="cs-clr-fff cs-fw-600">All Brands</div>
              </div>
            </li>

            <li className="menu-li" onClick={() => history.push("/blogs")}>
              <div className="cs-dis-flex">
                <div className="cs-clr-fff cs-fw-600">Blogs</div>
              </div>
            </li>

            <li className="menu-li">
              <div className="cs-dis-flex">
                <div className="cs-clr-fff cs-fw-600">FAQs</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
