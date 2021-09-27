import React from "react";
import { Popover, Menu } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

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


const menu = <div className="menu-popover">
  <div>
    <Popover content={Foodmenu} placement="rightBottom">
      <div className="cs-fw-500 cs-font-16 cs-bm-10 cs-pointer">Food</div>
    </Popover>

    <Popover content={GroomingMenu} placement="rightBottom">
      <div className="cs-fw-500 cs-font-16 cs-bm-10 cs-pointer">Grooming</div>
    </Popover>
    <div className="cs-fw-500 cs-font-16 cs-bm-10 cs-pointer">Treats</div>
    <div className="cs-fw-500 cs-font-16 cs-bm-10 cs-pointer">Toys</div>
    <div className="cs-fw-500 cs-font-16 cs-bm-10 cs-pointer">Accessories</div>
    <div className="cs-fw-500 cs-font-16 cs-bm-10 cs-pointer">Health and Medication</div>
  </div>
</div>;

const getForPc = () => {
  return (
    <div>
      <div className="mega-menu-wrapper">
        <ul className="menu-ul">
          <Popover content={menu} placement="bottomLeft">
            <li className="menu-li">
              <div className="cs-dis-flex">
                <div className="cs-clr-fff cs-fw-600">Shop by Category</div>
                <div className="cs-vt-center cs-dis-flex cs-clr-fff"><CaretDownOutlined /></div>
              </div>
            </li>
          </Popover>

          <li className="menu-li">
            <div className="cs-dis-flex">
              <div className="cs-clr-fff cs-fw-600">Services</div>
              <div className="cs-vt-center cs-dis-flex cs-clr-fff"><CaretDownOutlined /></div>
            </div>
          </li>

          <li className="menu-li">
            <div className="cs-dis-flex">
              <div className="cs-clr-fff cs-fw-600">All Brands</div>
            </div>
          </li>

          <li className="menu-li">
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
  )
}


export const WebMegaMenu = ({ history }) => {
  return (
    <>
      {getForPc(history)}
    </>
  );
};
