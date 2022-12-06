import React, { useRef, useState } from 'react'
import Lottie from 'lottie-react'
import scroll from '../assets/scroll_down.json'

import community from '../assets/community.json'
import home from '../assets/home.json'
import my_account from '../assets/my_account.json'
import news from '../assets/news.json'
import '../styles/OtherPage.scss'

function OtherPage() {
  const [play, setPlay] = useState(false)

  function startPlay() {
    setPlay(true)
  }

  function stopPlay() {
    setPlay(false)
  }
  return (
    <div>
      {/* other_container */}
      <section className="other_section">
        <div className="other_content">
          <div className="other_article1">
            <div className="article1_main">
              <h2>Pure CSS</h2>
              <p>Jordy Animation</p>
              <div className="jordy-container">
                <div className="jordy">
                  <div className="apple"></div>
                  <div className="hair">
                    <div className="hair1"></div>
                    <div className="hair2"></div>
                    <div className="hair3"></div>
                  </div>
                  <div className="face">
                    <div className="eyebrows">
                      <div className="eyebrows1"></div>
                      <div className="eyebrows2"></div>
                      <div className="eyebrows3"></div>
                    </div>
                    <div className="eyes"></div>
                    <div className="mouth">
                      <div className="mouth1"></div>
                      <div className="mouth2"></div>
                    </div>
                  </div>
                  <div className="jordy-body"></div>
                  <div className="legs">
                    <div className="legs1"></div>
                    <div className="legs2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="other_article2">
            <div className="OtherModal_container">
              <div className="OtherModal_main">
                <h2>Json animation</h2>
                <p>After Effects를 이용한 직접 만든 json파일 형식 아이콘</p>
                <ul className="List">
                  <li onMouseOver={startPlay} onMouseLeave={stopPlay}>
                    <Lottie
                      className="Lottieicon"
                      mode={'bounce'}
                      speed={2}
                      play={play}
                      loop
                      style={{ display: 'block', width: 120, fontSize: '16', margin: '0 auto', marginBottom: '4px' }}
                      animationData={home}
                    />
                  </li>
                  <li onMouseOver={startPlay} onMouseLeave={stopPlay}>
                    <Lottie
                      className="Lottieicon"
                      mode={'bounce'}
                      speed={2}
                      play={play}
                      loop
                      style={{ display: 'block', width: 120, fontSize: '16', margin: '0 auto', marginBottom: '4px' }}
                      animationData={my_account}
                    />
                  </li>
                  <li>
                    <Lottie
                      className="Lottieicon"
                      mode={'bounce'}
                      speed={2}
                      play={play}
                      loop
                      style={{ display: 'block', width: 120, fontSize: '16', margin: '0 auto', marginBottom: '4px' }}
                      animationData={news}
                    />
                  </li>
                  <li>
                    <Lottie
                      className="Lottieicon"
                      mode={'bounce'}
                      speed={2}
                      play={play}
                      loop
                      style={{ display: 'block', width: 120, fontSize: '16', margin: '0 auto', marginBottom: '4px' }}
                      animationData={community}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="other_article3">
            <h2>Pure CSS</h2>
            <p>Facebook Emoticon</p>
            <div className="article3_main">
              <div className="emoji emoji_like">
                <div className="emoji_hand">
                  <div className="emoji_thumb"></div>
                </div>
              </div>

              <div className="emoji emoji_love">
                <div className="emoji_heart"></div>
              </div>

              <div className="emoji emoji_haha">
                <div className="emoji_face">
                  <div className="emoji_eyes"></div>
                  <div className="emoji_mouth">
                    <div className="emoji_tongue"></div>
                  </div>
                </div>
              </div>

              <div className="emoji emoji_yay">
                <div className="emoji_face">
                  <div className="emoji_eyebrows"></div>
                  <div className="emoji_mouth"></div>
                </div>
              </div>

              <div className="emoji emoji_wow">
                <div className="emoji_face">
                  <div className="emoji_eyebrows"></div>
                  <div className="emoji_eyes"></div>
                  <div className="emoji_tongue"></div>
                </div>
              </div>

              <div className="emoji emoji_sad">
                <div className="emoji_face">
                  <div className="emoji_eyebrows"></div>
                  <div className="emoji_eyes"></div>
                  <div className="emoji_mouth"></div>
                </div>
              </div>

              <div className="emoji emoji_angry">
                <div className="emoji_face">
                  <div className="emoji_eyebrows"></div>
                  <div className="emoji_eyes"></div>
                  <div className="emoji_mouth"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Lottie
          className="Othersection_scroll"
          mode={'bounce'}
          speed={2}
          loop
          style={{ display: 'block', width: 50, fontSize: '16', margin: '0 auto', marginBottom: '4px' }}
          animationData={scroll}
        />
        <p className="otherscroll_down">scroll down</p>
      </section>
    </div>
  )
}

export default OtherPage
