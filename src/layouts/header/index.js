import React from 'react'
import MobileHeader from './MobileHeader'
import { WebHeader } from './WebHeader'
import facebook from '../../static/images/icons/facebook.png'
import twitter from '../../static/images/icons/twitter.png'
import instagram from '../../static/images/icons/instagram.png'
import youtube from '../../static/images/icons/youtube.png'


const Header = ({ history }) => {
  return (
    <div>
      <div className="cs-show-web">
        <div className="cs-dis-flex cs-justify-sb">
          {/* <div className="cs-dis-flex cs-vt-center cs-rp-10">
            Follow us on:
          </div> */}
          <div className="cs-dis-flex">
            <div className="cs-font-16 cs-rp-20 cs-lp-10">
              About us
            </div>

            <div className="cs-font-16 cs-rp-20">
              Contact us
            </div>

            <div className="cs-font-16 cs-rp-20">
              Gallery
            </div>
          </div>

          <div className="cs-dis-flex">
            <div style={{ padding: 4 }}>
              <img src={facebook} style={{ width: 18 }} />
            </div>

            <div style={{ padding: 4 }}>
              <img src={twitter} style={{ width: 18 }} />
            </div>

            <div style={{ padding: 4 }}>
              <img src={instagram} style={{ width: 18 }} />
            </div>

            <div style={{ padding: 4 }}>
              <img src={youtube} style={{ width: 18 }} />
            </div>
          </div>
        </div>
        <WebHeader history={history} />
      </div>

      <div className="cs-show-mobile">
        <MobileHeader />
      </div>

    </div>
  )
}

export default Header
