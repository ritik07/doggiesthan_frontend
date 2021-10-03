import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { store } from "./redux/index";
import PublicRoute from "./custom-routes/PublicRoute";
import PrivateRoute from "./custom-routes/PrivateRoute";
import { history } from "./config/history";
import { Login } from "./pages/login";
import { SignUp } from "./pages/SignUp";
import { HomePage } from "./pages/home";
import "./theme/antd.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './globalStyle/antd.css'
import './globalStyle/style.css';
import "./globalStyle/globalStyle.css";
import "./static/style/main.css";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Category from "./pages/category";
import { Cart } from "./pages/cart";
import Checkout from "./pages/checkout";
import { Spin } from 'antd'
import Dogs from "./pages/dogs";
import ScrollToTop from "./config/ScrollToTop";
import Cats from "./pages/cat";
import TodayDeal from "./pages/todaydeals";
import Brands from "./pages/brands";
import Exclusive from "./pages/exclusive";
import Blogs from "./pages/blogs";
import Rewards from "./pages/rewards";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { usePromiseTracker } from "react-promise-tracker";
import ProductSingle from "./pages/productsingle";

const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();

  return promiseInProgress &&
    <div style={{
      top: 0,
      zIndex: 99999,
      position: "absolute",
      width: "100vw",
      height: "100vh",
      background: "#FFFFFF88"
    }}>
      <span style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }} ><Spin size={'large'} /></span>
    </div>;
}


const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router history={history} >
          <ScrollToTop />
          <Switch>
            <PublicRoute path="/home" component={HomePage} />
            <PublicRoute path="/category" component={Category} />
            <PublicRoute path="/log-in" component={Login} />
            <PublicRoute path="/sign-up" component={SignUp} />
            <PublicRoute path="/cart" component={Cart} />
            <PublicRoute path="/checkout" component={Checkout} />
            <PublicRoute path="/product/:id" component={ProductSingle} />
            <PublicRoute path="/:category/:id" component={Dogs} />
            <PublicRoute path="/bestdeals" component={TodayDeal} />
            <PublicRoute path="/brands" component={Brands} />
            <PublicRoute path="/exclusive" component={Exclusive} />
            <PublicRoute path="/blogs" component={Blogs} />
            <PublicRoute path="/rewards" component={Rewards} />
            <PublicRoute path="/login" component={Login} />
            <Redirect from="/" to="/home/" />
          </Switch>
        </Router>
      </Provider>
      <ToastContainer autoClose={3200} />

      <LoadingIndicator />
    </div>
  );
};

export default App;
