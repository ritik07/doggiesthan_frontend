import React from 'react'
import MobileHeader from './MobileHeader'
import { WebHeader } from './WebHeader'

const Header = () => {
  return (
    <div>

      <div className="cs-show-web">
        <WebHeader />
      </div>

      <div className="cs-show-mobile">
        <MobileHeader />
      </div>

    </div>
  )
}

export default Header
