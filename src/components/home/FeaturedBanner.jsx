import React from 'react'
import catdog from '../../static/images/slider/catdog.png'
import bone from '../../static/images/slider/bone.png'

const FeaturedBanner = () => {
  return (
    <div>
      <div className="cs-tp-128 cs-web-container">
        <div className="cs-long-slider">
          <div className="cs-dis-flex">
            <div className="cs-dis-flex">
              <div>
                <div className="cs-font-14 cs-ws-3 cs-fw-600 cs-tm-20 cs-bm-20">
                  MANSOON PROMO CODE
                </div>
                <div className="cs-font-instyle cs-font-38 cs-clr-fff">
                  Big Brand
                </div>
                <div className="cs-font-instyle cs-font-60">
                  40% off
                </div>
              </div>

              <div className="cs-show-web">
                <img className="cs-long-slider-img cs-hide-lg-tab cs-hide-md-tab" src={catdog} />

                <img className="cs-long-slider-bone-img" src={bone} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBanner
