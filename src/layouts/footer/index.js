import React from 'react'
import MobileFooter from './MobileFooter'
import WebFooter from './WebFooter'

const Footer = () => {
  return (
    <div>
      <div className="cs-show-web">
        <WebFooter />
      </div>

      <div className="cs-show-mobile">
        <MobileFooter />
      </div>
    </div>
  )
}

export default Footer
