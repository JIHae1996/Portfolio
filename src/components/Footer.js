import React from 'react'
import { AiFillBehanceCircle, AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import '../styles/Footer.scss'

function Footer() {
  return (
    <ul className='Footer_ul'>
      <li><a><AiFillGithub /></a></li>
      <li><a><AiFillBehanceCircle /></a></li>
      <li><a><MdEmail /></a></li>
    </ul>
  )
}

export default Footer