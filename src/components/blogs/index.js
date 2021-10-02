import React from 'react'
import { Row, Col } from 'reactstrap'
import CoverImg from '../../pages/coverimg'
import blog from '../../static/images/coverpic/blog.jpeg'
import coverpic from '../../static/images/coverpic/coverpic.jpeg'

const BlogsComp = () => {
  return (
    <div>
      <div>
        <CoverImg coverName={"Blogs"} />
        <div className="cs-web-container">
          <Row>
            <Col xl={10} className="cs-bp-80">
              <img src={blog} className="cs-w-100 frz-br-8" />
              <div className="cs-font-instyle cs-font-32 cs-tp-10">
                Tips and tricks: Puppy’s First Grooming
              </div>
              <div className="cs-tp-10 cs-lp-5">
                July 10, 2019
              </div>

              <div className="cs-tp-20 cs-font-20">
                Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.
                Completely synergize resource taxing relationships via premier niche markets professionally cultivate.
              </div>
            </Col>

            <Col xl={10}>
              <img src={coverpic} className="cs-w-100 frz-br-8" />
              <div className="cs-font-instyle cs-font-32 cs-tp-10">
                Cat Health – Keeping Them Purr-fect
              </div>
              <div className="cs-tp-10 cs-lp-5">
                July 10, 2019
              </div>

              <div className="cs-tp-20 cs-font-20">
                Holistically pontificate installed base portals after maintainable products. Phosfluorescently engage worldwide methodologies with technology. Dramatically engage top-line web services vis-a-vis for better cutting-edge deliverables. Proactively envisioned multimedia based expertise and cross-media growth.
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default BlogsComp
