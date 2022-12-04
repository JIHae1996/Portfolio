import React from 'react'
import '../styles/Contect.scss'
import Lottie from 'lottie-react'
import { MdEmail } from 'react-icons/md'
import { AiFillBehanceCircle, AiFillGithub } from 'react-icons/ai'
import { FaArtstation } from 'react-icons/fa'
import contect from '../assets/contact.json'

function Contect() {
  return (
    <div className="contect_main">
      <h2 className="contect_h2">"I hope we can have a good relationship."</h2>
      <p className="contect_email">
        <MdEmail className="email_icon" />
        wlgo3333@gmail.com
      </p>
      <div className="contect_sns">
        <ul className="sns_ul">
          <li onClick={() => window.open('https://github.com/jihae96', '_blank')}>
            <AiFillGithub className="Footer_icon" />
            <a className="Footer_a">Github</a>
          </li>
          <li onClick={() => window.open('https://www.behance.net/wlgo333e88d', '_blank')}>
            <AiFillBehanceCircle className="Footer_icon" />
            <a className="Footer_a">Behance</a>
          </li>
          <li onClick={() => window.open('https://www.artstation.com/gaon_96', '_blank')}>
            <FaArtstation className="Footer_icon" />
            <a className="Footer_a">Artstation</a>
          </li>
        </ul>
      </div>
      <Lottie
        className="Lottieicon_contect"
        mode={'bounce'}
        speed={3}
        loop
        style={{ display: 'block', width: 500, fontSize: '16', margin: '0 auto', marginBottom: '4px' }}
        animationData={contect}
      />
      <div className="copyright">
        <p>&copy; 2022 JiHae Lee All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Contect
