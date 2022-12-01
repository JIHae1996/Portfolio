import React from 'react'
import { AiFillBehanceCircle, AiFillGithub } from 'react-icons/ai'
import { FaArtstation } from 'react-icons/fa'
import '../styles/Footer.scss'

function Footer() {
  return (
    <ul className="Footer_ul">
      <li>
        <a className="Footer_a" href="https://github.com/jihae96" target="_blank">
          <AiFillGithub className="Footer_a" />
        </a>
      </li>
      <li>
        <a className="Footer_a" href="https://www.behance.net/wlgo333e88d" target="_blank">
          <AiFillBehanceCircle className="Footer_a" />
        </a>
      </li>
      <li>
        <a className="Footer_a" href="https://www.artstation.com/gaon_96" target="_blank">
          <FaArtstation className="Footer_a" />
        </a>
      </li>
    </ul>
  )
}

export default Footer
