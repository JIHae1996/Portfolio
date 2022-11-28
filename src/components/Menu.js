import React, { useRef } from 'react'
import '../styles/Menu.scss'
import { MdOpenInNew } from 'react-icons/md'

function Menu({ setModalOpen }) {
  const ref = useRef()

  return (
    <div className="allMenu" ref={ref}>
      <div className="topMenu">
        <a href="#"></a>
        <span className="modal-close" onClick={() => setModalOpen(false)}>
          X
        </span>
        <ul>
          <a>INTRO</a>
          <li>
            <a href="#">COVER</a>
          </li>
          <li>
            <a href="#">INTRODUCTION</a>
          </li>
        </ul>
        <ul>
          <a>PROJECT</a>
          <li>
            <a href="#">NCSOFT</a>
          </li>
          <li>
            <a href="#">CJONE</a>
          </li>
          <li>
            <a href="#">KAKAOAPP</a>
          </li>
          <li>
            <a href="#">FOREST</a>
          </li>
        </ul>
        <ul>
          <a>OTHER</a>
          <li>
            <a href="#">EMOTICON</a>
          </li>
          <li>
            <a href="#">ANIMATION</a>
          </li>
          <li>
            <a href="#">DESIGN WORK</a>
          </li>
        </ul>
        <ul>
          <a>SOCIAL</a>
          <li>
            <a href="https://github.com/jihae96" target="_blank">
              GITHUB <MdOpenInNew />
            </a>
          </li>
          <li>
            <a href="https://www.behance.net/wlgo333e88d" target="_blank">
              BEHANCE <MdOpenInNew />
            </a>
          </li>
          <li>
            <a href="https://www.artstation.com/gaon_96" target="_blank">
              ARTSTATION <MdOpenInNew />
            </a>
          </li>
        </ul>
      </div>
      <div className="topMenu_bg"></div>
    </div>
  )
}

export default Menu