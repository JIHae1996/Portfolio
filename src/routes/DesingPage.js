import React from 'react'
import '../styles/DesingPage.scss'
import Lottie from 'lottie-react'
import scroll from '../assets/scroll_down.json'
import DesingPagebg from '../assets/3dmonobg01.json'

function DesingPage() {
  return (
    <div className="DesingPage">
      <div className="DesingPage_inner">
        <div className="Desing_article1">
          <a onClick={() => window.open('https://notefolio.net/jihae_96/258472', '_blank')}>
            <div className="other_article1_img"></div>
            <div className="other_article1_content">
              <h5>
                Galaxy
                <br />
                Theme,
              </h5>
              <p>intern yangyang</p>
            </div>
          </a>
        </div>
        <div className="Desing_article2">
          <a onClick={() => window.open('https://www.artstation.com/gaon_96', '_blank')}>
            <div className="other_article2_img"></div>
            <div className="other_article2_content">
              <h5>
                Artstation
                <br />
                Works
              </h5>
            </div>
          </a>
        </div>
      </div>
      <Lottie
        className="Desing_scroll"
        mode={'bounce'}
        speed={2}
        loop
        style={{ display: 'block', width: 50, fontSize: '16', margin: '0 auto', marginBottom: '4px' }}
        animationData={scroll}
      />
      <p className="Desing_scrollDown">scroll down</p>
    </div>
  )
}

export default DesingPage
