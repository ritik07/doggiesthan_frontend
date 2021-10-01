import React from 'react'
import MobileFooter from './MobileFooter'
import WebFooter from './WebFooter'

const Footer = ({history}) => {
  return (
    <div>
      <div className="cs-show-web">
        <WebFooter history={history}/>
      </div>

      <div className="cs-show-mobile">
        <MobileFooter history={history}/>
      </div>
    </div>
  )
}

export default Footer
