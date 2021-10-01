import React from 'react'
import { Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from '../../static/images/icons/logo.jpeg'

const MobileHeader = () => {
  return (
    <div>
      <div style={{
        padding: "8px 20px", position: "fixed",
        width: "100%", backgroundColor: "#1eacbd", zIndex: 5
      }}>
        <Row>
          <Col xs={6} className="cs-dis-flex cs-vt-center">
            {/* <img src={logo} className="cs-w-100" /> */}
            <div className="cs-font-instyle cs-clr-fff cs-font-26">
              Doggiesthan
            </div>
          </Col>

          <Col xs={4} className="cs-dis-flex cs-vt-center">
          </Col>

          <Col xs={2} className="cs-dis-flex cs-vt-center">
            <FontAwesomeIcon icon={faSearch} size="lg" color="#fff" />
          </Col>
        </Row>
      </div>
      <div style={{ paddingBottom: 25 }} />
    </div>
  )
}

export default MobileHeader

