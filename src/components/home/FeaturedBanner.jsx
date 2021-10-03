import React, { useEffect, useState } from 'react'
import catdog from '../../static/images/slider/catdog.png'
import bone from '../../static/images/slider/bone.png'
import { useDispatch, useSelector } from 'react-redux'
import { ImageUrl } from '../../lib/constant'

const FeaturedBanner = () => {
  const [data, setData] = useState([]);
  const [allImages, setAllImages] = useState([]);

  const allData = useSelector(state => state.allData);

  useEffect(() => {
    if (allData.featureBanner.length) {
      setData(allData.featureBanner)
      if (allData.featureBanner[0].images)
        setAllImages(allData.featureBanner[0].images.split(','))
    }
  }, [allData])

  return data.length === 0 ? <div>Loading..</div> : (
    <div>
      <div className="cs-tp-128 cs-web-container">
        <div className="cs-long-slider">
          <div className="cs-dis-flex">
            <div className="cs-dis-flex">
              <div>
                <div className="cs-font-14 cs-ws-3 cs-fw-600 cs-tm-20 cs-bm-20">
                  {data[0]["upperText"]}
                </div>
                <div className="cs-font-instyle cs-font-38 cs-clr-fff">
                  {data[0]["middleText"]}
                </div>
                <div className="cs-font-instyle cs-font-60">
                  {data[0]["lowerText"]}
                </div>
              </div>
              <div className="cs-show-web">
                {allImages[0] && <img className="cs-long-slider-img cs-hide-lg-tab cs-hide-md-tab" src={`${ImageUrl}/${allImages[0]}`} />}

                {allImages[1] && <img className="cs-long-slider-bone-img" src={`${ImageUrl}/${allImages[1]}`} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBanner
