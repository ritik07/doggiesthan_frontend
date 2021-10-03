import React from 'react'
import bgColor from '../../static/images/coverpic/bg_back_color.jpeg'
import bgCurve from '../../static/images/coverpic/bg_curve.png'

const CoverImg = ({coverName}) => {
  return (
    <div>
      <div>
        <div className="cs-dis-flex cs-vt-center" style={{ backgroundImage: `url(${bgColor})`, height: "40vh" }}>
          <div className="cs-font-45 cs-font-instyle cs-lm-40">
            {coverName}
          </div>
        </div>
        <div>
          <img className="cs-w-100 cs-cover-image-curve" src={bgCurve} style={{marginTop: "-125px"}}/>
        </div>
      </div>
    </div>
  )
}

export default CoverImg
