import React from 'react'
import footerTop from '../../static/images/Footer/footer-top.png'
import backgroundFooter from '../../static/images/Footer/background_footer.jpg'

const WebFooter = () => {
  return (
    <div>
      <div>
        <img className="cs-w-100" src={footerTop} />
      </div>
      <div style={{ backgroundImage: `url(${backgroundFooter})`, height: "70vh", marginTop: "-125px" }}>
      </div>
    </div>
  )
}

export default WebFooter
