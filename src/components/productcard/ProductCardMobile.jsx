import React from 'react';
import { Row, Col } from 'reactstrap';
import Slider from "react-slick";
import { Rate } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

//

import Product1 from '../../static/images/products/product1.jpg'
import Product2 from '../../static/images/products/product2.jpg'
import Product3 from '../../static/images/products/product3.jpg'
import Product4 from '../../static/images/products/product4.jpg'


const ProductCardMobile = (props) => {

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

  return (
    <div>
      <Row>
        <Col>
          <Slider {...settings}>
            {props.bestDeals.map((data) => {
              return (
                <div className="cs-product-card cs-pointer">
                  <div className="cs-dis-flex cs-hrz-center cs-vt-center">
                    <img src={data.img} className="cs-w-75" />
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

                      <div>
                        <Rate className="cs-product-card-rate" disabled defaultValue={data.rating} allowHalf />
                      </div>
                    </div>
                  </div>

                  <div className="cs-product-card-pricing-section">
                    <div className="cs-dis-flex cs-hrz-center">
                      <div className="cs-product-card-mrp cs-rp-15">
                        ₹{data.mrp}
                      </div>
                      <div>
                        ₹{data.sp}
                      </div>
                    </div>
                  </div>

                  <div className="cs-dis-flex cs-hrz-center cs-tp-15 cs-bp-20">
                    <div className="cs-product-card-addtocart cs-pointer">
                      Add to Cart
                  </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </Col>
      </Row>
    </div>
  )
}

export default ProductCardMobile
