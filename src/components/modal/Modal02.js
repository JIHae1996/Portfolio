import React, { useRef, useState } from 'react'
import { FiX } from 'react-icons/fi'
import '../../styles/OtherModal.scss'
import '../../styles/modal/animation.scss'
import Lottie from 'lottie-react'

import community from '../../assets/community.json'
import home from '../../assets/home.json'
import my_account from '../../assets/my_account.json'
import news from '../../assets/news.json'

import useOnClickOutside from '../../hook/useOneClickOutside'

function Modal02({ setModalOpen }) {
  const ref = useRef()
  const [play, setPlay] = useState(false)

  function startPlay() {
    setPlay(true)
  }

  function stopPlay() {
    setPlay(false)
  }

  useOnClickOutside(ref, () => {
    setModalOpen(false)
  })

  return (
    <div className="OtherModal">
      <div className="OtherModal_container">
        <div className="OtherModal_main" ref={ref}>
          <span className="modal-close" onClick={() => setModalOpen(false)}>
            <FiX className="modal-close_fix" />
          </span>
          <h2>Json animation</h2>
          <ul className="List">
            <li onMouseOver={startPlay} onMouseLeave={stopPlay}>
              <Lottie
                className="Lottieicon"
                mode={'bounce'}
                speed={2}
                play={play}
                loop
                style={{ display: 'block', width: 100, fontSize: '16', margin: '0 auto', marginBottom: '4px' }}
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
                style={{ display: 'block', width: 100, fontSize: '16', margin: '0 auto', marginBottom: '4px' }}
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
                style={{ display: 'block', width: 100, fontSize: '16', margin: '0 auto', marginBottom: '4px' }}
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
                style={{ display: 'block', width: 100, fontSize: '16', margin: '0 auto', marginBottom: '4px' }}
                animationData={community}
              />
            </li>
          </ul>
          <p>After Effects를 이용한 직접 만든 json파일 형식 아이콘</p>
        </div>
      </div>
    </div>
  )
}

export default Modal02
