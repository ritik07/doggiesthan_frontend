import React from 'react'
import { Row, Col } from 'reactstrap'
import Slider from "react-slick";
//local imports
import templateblank from '../../static/images/slider/finaltemplate.png'
import sliderimg from '../../static/images/slider/sliderimg.png'
import sliderimg1 from '../../static/images/slider/sldierimg1.jpg'
import sliderimg2 from '../../static/images/slider/sliderimg2.jpg'
import HeroPrices from '../../static/images/slider/hero_prices.png'

const Banners = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div>
      <Row noGutters={true}>
        <Col xl={5}>
          <div className="cs-web-container cs-tp-60">
            <Slider {...settings}>
              <div>
                <div>
                  LOYALTY PROGRAMS
                </div>

                <div className="cs-font-instyle cs-font-50 cs-tm-20">
                  Earn Points to Get Discounts
                </div>
              </div>

              <div>
                <div>
                  FREE DELIVERY
                </div>

                <div className="cs-font-instyle cs-font-50 cs-tm-20">
                  Free delivery on your first order
                </div>
              </div>

              <div>
                <div>
                  Order above 1999/-
                </div>

                <div className="cs-font-instyle cs-font-50 cs-tm-20">
                  Order above 1999/- and get free hostel service for 3 days
                </div>
              </div>
            </Slider>
          </div>
        </Col>

        <Col xl={7}>
          <img src={HeroPrices} className="cs-w-100" />
        </Col>
      </Row>
    </div>

    // <div className="cs-web-container cs-tp-10">
    //   <Row>
    //     <Col xl={8}>
    //       {/* <div>
    //         <Slider {...settings}>
    //           <div>
    //             <img className="cs-w-100" src={templateblank} />
    //           </div>
    //           <div>
    //             <img className="cs-w-100" src={sliderimg1} />
    //           </div>
    //           <div>
    //             <img className="cs-w-100" src={sliderimg2} />
    //           </div>
    //         </Slider>
    //       </div> */}
    //     </Col>

    //     <Col xl={4}>
    //       {/* <Slider {...settings}>
    //         <div className="cs-side-cards cs-bg-red">
    //           <div className="cs-clr-fff cs-fw-600">
    //             LOYALTY PROGRAMS
    //           </div>

    //           <h1 className="cs-discount-style cs-tp-20 cs-clr-fff">
    //             Earn Points to Get Discounts
    //           </h1>
    //         </div>
    //       </Slider> */}

    //       {/* <Slider {...settings}>
    //         <div className="cs-side-cards cs-bg-cream">
    //           <h1 className="cs-discount-style">
    //             hello
    //           </h1>
    //         </div>
    //       </Slider> */}

    //       {/* <Slider {...settings}>
    //         <div className="cs-side-cards cs-bg-green">
    //           <h1 className="cs-discount-style">
    //             hello
    //           </h1>
    //         </div>
    //       </Slider> */}
    //     </Col>
    //   </Row>


    // <div className="cs-tp-30">
    //     <div className="cs-long-slider">
    //       <div className="cs-dis-flex">
    //         <div>
    //           <div className="cs-font-14 cs-ws-3 cs-fw-600 cs-tm-20 cs-bm-20">
    //             MANSOON PROMO CODE
    //           </div>
    //           <div className="cs-discount-style cs-font-38 cs-clr-fff">
    //             Big Brand
    //           </div>

    //           <div className="cs-discount-style cs-font-60">
    //             40% off
    //          </div>
    //         </div>
    //         <img className="cs-long-slider-img" src={catdog} />
    //       </div>
    //     </div>
    //   </div> 


    // </div>
  )
}

export default Banners
