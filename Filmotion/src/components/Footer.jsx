import React from 'react'

import "../styles/footer.css"
const Footer = () => {
  return (
    <div className='last'>
        <div className="left">
          <p>All © Right On Reserved. </p>
        </div>
        <div className="mid">
          <p>Made With ♡ Bishwa Bandhu Parmar.</p>
        </div>
        <div className="right">
          <a href="https://github.com/bishwa-bandhu-parmar-06" target={'blank'}>GitHub</a>
          <a href="https://www.linkedin.com/in/bishwabandhu06/" target={'blank'}>LinkedIn</a>
          <a href="https://www.facebook.com/bishwa.bandhu.parmar.06" target={'blank'}>FaceBook</a>
          <a href="https://www.instagram.com/bikash_singh_08/" target={'blank'}>Instagram</a>
          <a href="https://x.com/bishwabandhu06" target={'blank'}>Twitter</a>
        </div>
    </div>
  )
}

export default Footer