import React, { useEffect, useState } from "react";
import { Layout, Affix } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined, CaretRightOutlined, AlignLeftOutlined } from "@ant-design/icons";
import "./appController.css";
import { SideMenu } from "../components/sideMenu/SideMenu";
import Header from "../layouts/header";
import { MegaMenu } from "../components/megaMenu";
import Footer from "../layouts/footer";
import publicIp from "public-ip";
import { useDispatch, useSelector } from "react-redux";
import {
  updateFeatureBannerAction, updateMainBannerAction, updateSubCategoryAction,
  updateProductsAction, updateMasterAction, updateParentAction, updateCompleteDataAction,
  updateBlogDataAction, updateBrandAction, updateUserCartAction
} from "../redux/actions/allData";

const { Content } = Layout;

export const AppController = ({ history, children }) => {
  const [top, setTop] = useState(0);
  const [collapsed, setcollapsed] = useState(true);

  const dispatch = useDispatch();
  const allData = useSelector(state => state.allData);

  const getClientIp = async () => await publicIp.v4({
    fallbackUrls: ["https://ifconfig.co/ip"]
  });

  const toggle = () => {
    setcollapsed(!collapsed);
  };

  const init = async () => {
    console.log("render")

    let ip = await getClientIp()
    dispatch(updateUserCartAction(ip))
    dispatch(updateFeatureBannerAction())
    dispatch(updateMainBannerAction())
    // dispatch(updateSubCategoryAction())
    // dispatch(updateProductsAction())
    // dispatch(updateMasterAction())
    // dispatch(updateParentAction())
    dispatch(updateBlogDataAction())
    dispatch(updateBrandAction())
    dispatch(updateCompleteDataAction())
  }

  useEffect(() => {
    init()
  }, [])

  // useEffect(() => {
  //   if (allData) {
  //     getCompleteData()
  //   }
  // }, [allData])

  // const getCompleteData = () => {
  //   let completeData = [];
  //   if (allData.products.length) {
  //     completeData.push(allData.products)
  //     if(allData.subCategory.length){
  //       completeData
  //     }
  //     console.log("allData.products", allData.products)
  //   }
  //   // dispatch(updateCompleteDataAction(data))
  // }

  // const getMobileBuggerMenu = history => {
  //   return (
  //     <div className="mobile-header">
  //       <div>
  //         {React.createElement(
  //           collapsed ? AlignLeftOutlined : AlignLeftOutlined,
  //           { className: "trigger", onClick: toggle }
  //         )}
  //       </div>
  //       <div>
  //         <span className="">
  //           <h3 className="cs-txt-fff">Logo</h3>
  //         </span>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div>
      <div className="cs-show-web">
        <Layout>
          <Layout className={"site-layout " + (collapsed ? "" : "over-hid")}>
            <Affix offsetTop={.1}>
              <header className="app-header">
                <Header history={history} />
              </header>
              <MegaMenu history={history} />
            </Affix>
            <Content
              style={{
                //  margin: "24px 16px",
                //  marginLeft: 12,
                //  marginRight: 12,
                // padding: 0,
                // height: "100vh",
                // minHeight: 280
              }}
            >
              {children}
            </Content>
            <Footer history={history} />
          </Layout>
        </Layout>
      </div>

      <div className="cs-show-mobile">
        <Layout>
          {/* <SideMenu history={history} collapsed={collapsed} setcollapsed={setcollapsed} /> */}
          <Layout className={"site-layout " + (collapsed ? "" : "over-hid")}>
            <header className="app-header">
              <Header history={history} />
            </header>
            {/* <div>
              <MegaMenu history={history} />
            </div> */}
            <Content
              style={{
                //  margin: "24px 16px",
                //  marginLeft: 12,
                //  marginRight: 12,
                padding: 0,
                height: "100%",
                minHeight: 280
              }}
            >
              {children}
            </Content>
          </Layout>
          {/* for mobile */}
          <Footer history={history} />
        </Layout>
      </div>
    </div>
  );
};
