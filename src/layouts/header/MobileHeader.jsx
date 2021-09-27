import React from 'react'
import { Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const MobileHeader = () => {
  return (
    <div>
      <div style={{
        padding: "8px 20px", position: "fixed",
        width: "100%", backgroundColor: "#fc9066", zIndex: 5
      }}>
        <Row>
          <Col xs={10} className="cs-dis-flex cs-vt-center">
            <div className="cs-font-instyle cs-clr-fff cs-font-26">
              Doggiesthan
          </div>
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
