import React from 'react'
import { AiFillBehanceCircle, AiFillGithub } from 'react-icons/ai'
import { FaArtstation } from 'react-icons/fa'
import '../styles/Footer.scss'

function Footer() {
  return (
    <ul className="Footer_ul">
      <li>
        <a href="https://github.com/jihae96">
          <AiFillGithub />
        </a>
      </li>
      <li>
        <a href="https://www.behance.net/wlgo333e88d">
          <AiFillBehanceCircle />
        </a>
      </li>
      <li>
        <a href="https://www.artstation.com/gaon_96">
          <FaArtstation />
        </a>
      </li>
    </ul>
  )
}

export default Footer
