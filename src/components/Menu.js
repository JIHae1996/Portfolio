import React, { useRef } from 'react'
import '../styles/Menu.scss'
import { MdOpenInNew } from 'react-icons/md'
import { FiX } from 'react-icons/fi'

function Menu({ setModalOpen }) {
  const ref = useRef()

  return (
    <div className="allMenu" ref={ref}>
      <div className="topMenu">
        <a href="#"></a>
        <span className="modal-close" onClick={() => setModalOpen(false)}>
          <FiX className="modal-close_fix" />
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
        <ul className="border_none">
          <li className="OTHER">
            <ul>
              <a className="title_a">OTHER</a>
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
          </li>
          <li className="Social">
            <ul>
              <li>
                <a className="socialClass" href="https://github.com/jihae96" target="_blank">
                  GITHUB <MdOpenInNew className="MdOpenInNew" />
                </a>
              </li>
              <li>
                <a className="socialClass" href="https://www.behance.net/wlgo333e88d" target="_blank">
                  BEHANCE <MdOpenInNew className="MdOpenInNew" />
                </a>
              </li>
              <li>
                <a className="socialClass" href="https://www.artstation.com/gaon_96" target="_blank">
                  ARTSTATION <MdOpenInNew className="MdOpenInNew" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="topMenu_bg"></div>
    </div>
  )
}

export default Menu
