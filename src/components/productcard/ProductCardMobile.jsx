import React from 'react';
import { Row, Col } from 'reactstrap';
import Slider from "react-slick";
import { Rate } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { ImageUrl } from '../../lib/constant'
import AddToCart from '../addtocart';

const ProductCardMobile = (props) => {
  const { gridMd, gridXl, gridLg, history, noRating, noPrice, openCat, toMainProduct, isBrand } = props
  // const SamplePrevArrow = (props) => {
  //   return (
  //     <FontAwesomeIcon icon={faArrowLeft} style={{ ...style, display: "block", background: "green" }} />
  //   );
  // }

  // const SampleNextArrow = (props) => {
  //   return (
  //     <FontAwesomeIcon icon={faArrowRight} style={{ ...style, display: "block", background: "green" }} />
  //   );
  // }



  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };


  const handleOnProductSelect = (id) => {
    if (id) {
      history.push(`/product/${id}`)
    }
  }

  return (
    <div>
      {props.isGrid ?
        <Row className="cs-tp-20">
          {props.bestDeals.map((data) => {
            return (
              <Col sm={6} xs={6} className="cs-bp-25">
                <div className="cs-product-card cs-pointer">
                  <div className="cs-dis-flex cs-hrz-center cs-vt-center">
                    <img src={`${ImageUrl}/${data.images.split(',')[0]}`} className="cs-w-100 cs-pointer"
                      onClick={toMainProduct ? (e) => handleOnProductSelect(data.id) : openCat ? (e) => history.push("/category") : (e) => handleOnProductSelect(data.id)} style={{ height: 140 }} />
                  </div>

                  {/* <div className="cs-divider-line" /> */}

                  <div className="cs-product-card-info cs-dis-flex cs-hrz-center">
                    <div>
                      <div className="cs-dis-flex cs-hrz-center">
                        <div className="cs-font-caps cs-product-card-cat-txt cs-clr-cream cs-pointer">
                          {data.category}
                        </div>
                      </div>

                      <div className="cs-product-card-name cs-font-instyle cs-product-card-prod-name-txt cs-pointer cs-cs-lh-32">
                        {data.name}
                      </div>

                      <div className="cs-golden-star">
                        <Rate className="cs-product-card-rate" disabled defaultValue={data.rating} allowHalf />
                      </div>
                    </div>
                  </div>

                  {!noPrice ? <div className="cs-product-card-pricing-section">
                    <div className="cs-dis-flex cs-hrz-center">
                      <div className="cs-product-card-mrp cs-rp-15">
                        ₹{data.mrp}
                      </div>
                      <div>
                        ₹{data.price}
                      </div>
                    </div>
                  </div> : null}

                  {openCat ?
                    <div className="cs-dis-flex cs-hrz-center cs-tp-15 cs-bp-20" onClick={() => history.push("/category")}>
                      <div className="cs-product-card-addtocart cs-pointer">
                        View Category
                      </div>
                    </div>
                    : isBrand ? <div className="cs-dis-flex cs-hrz-center cs-tp-15 cs-bp-20" onClick={() => history.push(`/brand/allproducts/${data.id}`)}>
                      <div className="cs-product-card-addtocart cs-pointer">
                        View All Products
                      </div>
                    </div> :
                      <div className="cs-dis-flex cs-hrz-center cs-tp-15 cs-bp-20">
                        <AddToCart history={history} productId={data.id} />
                        {/* <div className="cs-product-card-addtocart cs-pointer">
                        Add to Cart
                      </div> */}
                      </div>}
                </div>
              </Col>
            )
          })}
        </Row> :
        <Row>
          <Col>
            <Slider {...settings}>
              {props.bestDeals.map((data) => {
                return (
                  <div className="cs-product-card cs-pointer">
                    <div className="cs-dis-flex cs-hrz-center cs-vt-center">
                      <img src={`${ImageUrl}/${data.images.split(',')[0]}`} className="cs-w-100 cs-pointer"
                        onClick={toMainProduct ? (e) => handleOnProductSelect(data.id) : ""} style={{ height: 140 }} />
                    </div>

                    {/* <div className="cs-divider-line" /> */}

                    <div className="cs-product-card-info cs-dis-flex cs-hrz-center">
                      <div>
                        <div className="cs-dis-flex cs-hrz-center">
                          <div className="cs-font-caps cs-product-card-cat-txt cs-clr-cream cs-pointer">
                            {data.category}
                          </div>
                        </div>

                        <div className="cs-product-card-name cs-font-instyle cs-product-card-prod-name-txt cs-pointer cs-cs-lh-32">
                          {openCat || isBrand ? data.title : data.name}
                        </div>

                        {data.brandData && data.brandData.length ?
                          <div className="cs-product-card-name cs-dis-flex cs-hrz-center cs-font-12 cs-tp-10 cs-pointer">
                            ( A product by {data.brandData[0].title} )
                          </div>
                          : null}

                        {!noRating &&
                          <div className="cs-golden-star">
                            <Rate className="cs-product-card-rate" disabled defaultValue={data.rating} allowHalf />
                          </div>}
                      </div>
                    </div>

                    {!noPrice ? <div className="cs-product-card-pricing-section">
                      <div className="cs-dis-flex cs-hrz-center">
                        <div className="cs-product-card-mrp cs-rp-15">
                          ₹{data.mrp}
                        </div>
                        <div>
                          ₹{data.price}
                        </div>
                      </div>
                    </div> : null}

                    {openCat ?
                      <div className="cs-dis-flex cs-hrz-center cs-tp-15 cs-bp-20" onClick={() => history.push("/category")}>
                        <div className="cs-product-card-addtocart cs-pointer">
                          View Category
                        </div>
                      </div>
                      : isBrand ? <div className="cs-dis-flex cs-hrz-center cs-tp-15 cs-bp-20" onClick={() => history.push(`/brand/allproducts/${data.id}`)}>
                        <div className="cs-product-card-addtocart cs-pointer">
                          View All Products
                        </div>
                      </div> :
                        <div className="cs-dis-flex cs-hrz-center cs-tp-15 cs-bp-20">
                          <AddToCart history={history} productId={data.id} />
                          {/* <div className="cs-product-card-addtocart cs-pointer">
                        Add to Cart
                      </div> */}
                        </div>}
                  </div>
                )
              })}
            </Slider>
          </Col>
        </Row>}
    </div>
  )
}

export default ProductCardMobile
