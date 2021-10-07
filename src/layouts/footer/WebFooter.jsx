import React from 'react'
import footerTop from '../../static/images/Footer/footer-top.png'
import backgroundFooter from '../../static/images/Footer/background_footer.jpg'
import logo from '../../static/images/logo.png'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faClock, faDog, faCat, faBlog } from '@fortawesome/free-solid-svg-icons'
import { Input, Button } from 'antd'


const WebFooter = ({ history }) => {
  return (
    <div>
      <div style={{ position: "relative", zIndex: 10 }}>
        <img className="cs-w-100" src={footerTop} />
      </div>
      <div style={{ position: "relative" }}>
        <div style={{ backgroundImage: `url(${backgroundFooter})`, height: "70vh", marginTop: "-135px", position: "relative" }}>
          <div style={{ position: "absolute", zIndex: 10, top: 260 }}>
            <div className="cs-web-container">
              <Row>
                <Col xl={3}>
                  <img src={logo} className="cs-w-80" />
                  {/* <div className="cs-tp-10">
                    Address: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div> */}
                </Col>

                <Col xl={3}>
                  <div className="cs-font-28">
                    About
                  </div>
                  <div className="cs-dis-flex">
                    <div className="cs-dis-flex cs-vt-center">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="cs-rm-5" />
                    </div>

                    <div>
                      PO BOX Collins Street West
                    </div>
                  </div>

                  <div className="cs-dis-flex cs-tp-5">
                    <div className="cs-dis-flex cs-vt-center">
                      <FontAwesomeIcon icon={faPhone} className="cs-rm-5" />
                    </div>

                    <div>
                      95096367777
                    </div>
                  </div>

                  <div className="cs-dis-flex cs-tp-5">
                    <div className="cs-dis-flex cs-vt-center">
                      <FontAwesomeIcon icon={faClock} className="cs-rm-5" />
                    </div>

                    <div>
                      Morning 8 AM - Evening 9 PM
                    </div>
                  </div>

                </Col>


                <Col xl={3}>
                  <div className="cs-font-28">
                    Quick Links
                  </div>
                  <div className="cs-dis-flex cs-pointer" onClick={() => history.push("/dogs/7")}>
                    <div className="cs-dis-flex cs-vt-center">
                      <FontAwesomeIcon icon={faDog} className="cs-rm-5" />
                    </div>

                    <div>
                      Dog Accessories & Products
                    </div>
                  </div>

                  <div className="cs-dis-flex cs-tp-5 cs-pointer" onClick={() => history.push("/cats/8")}>
                    <div className="cs-dis-flex cs-vt-center">
                      <FontAwesomeIcon icon={faCat} className="cs-rm-5" />
                    </div>

                    <div>
                      Cat Accessories & Products
                    </div>
                  </div>

                  <div className="cs-dis-flex cs-tp-5 cs-pointer" onClick={() => history.push("/blogs")}>
                    <div className="cs-dis-flex cs-vt-center">
                      <FontAwesomeIcon icon={faBlog} className="cs-rm-5" />
                    </div>

                    <div>
                      Blogs
                    </div>
                  </div>

                </Col>

                <Col xl={3}>
                  <div className="cs-font-28">
                    Newsletter
                  </div>
                  <div className="cs-dis-flex cs-tp-5">
                    <Input placeholder="Enter your email" />
                  </div>

                  <div className="cs-tp-10">
                    <Button type="primary">
                      SUBSCRIBE
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebFooter
