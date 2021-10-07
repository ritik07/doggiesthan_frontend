import React, { useEffect, useState } from 'react'
import { Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import logo from '../../static/images/logo.png'
import { Input, Menu, Badge } from "antd";

const MobileHeader = ({ history }) => {

  const [isSearch, setIsSearch] = useState(false)
  const [searchText, setSearchText] = useState("")


  const handleOnSearchText = (e) => {
    setSearchText(e.target.value)
  }

  const handleOnSearch = (value) => {
    if (value) {
      history.push('/search')
    } else {
      history.push("/")
    }
  }


  useEffect(() => {
    if (searchText.length > 0) {
      history.push({
        pathname: '/search',
        search: searchText,
        state: { text: searchText }
      })
    }
  }, [searchText])



  return (
    <div>
      <div style={{
        padding: "8px 20px", position: "fixed",
        width: "100%", backgroundColor: "#1eacbd", zIndex: 5
      }}>
        {window.location.pathname.split('/')[1] === "search" ?
          <Row>
            <Col xs={10}>
              <Input autoFocus size="large" placeholder="Search Products" style={{ width: "100%" }}
                // onBlur={() => handleOnSearch(false)}
                onChange={(e) => handleOnSearchText(e)} />
            </Col>
            <Col xs={2} className="cs-dis-flex cs-vt-center cs-pointer" onClick={() => handleOnSearch(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </Col>
          </Row>
          :
          <Row>
            <Col xs={6} className="cs-dis-flex cs-vt-center">
              <img src={logo} className="cs-w-80" />
              {/* <div className="cs-font-instyle cs-clr-fff cs-font-26">
              Doggiesthan
            </div> */}
            </Col>

            <Col xs={4} className="cs-dis-flex cs-vt-center">
            </Col>

            <Col xs={2} className="cs-dis-flex cs-vt-center">
              <FontAwesomeIcon icon={faSearch} size="lg" color="#fff" autoFocus={true} onClick={() => handleOnSearch(true)} />
            </Col>
          </Row>}
      </div>
      <div style={{ paddingBottom: 25 }} />
    </div>
  )
}

export default MobileHeader

