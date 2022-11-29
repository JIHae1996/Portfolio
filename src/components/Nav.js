import React, { useEffect, useState } from 'react'
import logo from '../assets/Portfolio.svg'
import { BiMenu } from 'react-icons/bi'
import '../styles/Nav.scss'
import Menu from './Menu'

function Nav() {
  const [show, setShow] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const handleClick = () => {
    setModalOpen(true)
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      // console.log("window.scrolly", window.scrollY);
      // 스크롤을 내릴때 Y값이 나온다.
      if (window.scrollY > 50) {
        setShow(true)
      } else {
        setShow(false)
      }
    })
    // Show값이 if문 기준 true면 배경이 흰색 . flase 면 배경이 검정이 되게 한다.
    return () => {
      window.removeEventListener('scroll', () => {})
      /*컨포넌트가 더이상 사용되지 않을때는 위쪽의 
        윈도우 스크롤 이벤트를 더이상 사용할 필요가 없기때문에 
        윈도우 스크롤 이벤트를 지워준다.*/
    }
  }, [])
  //useEffect(() => {},[]); 컨포넌트가 마운트 되었을때 , 딱 그때만 실행된다.
  // 헤더가 처음엔 흰색이였다가 스크롤 내릴수록 검정색으로 변하게 하는 함수.

  return (
    <nav className={`nav ${show && 'nav__white'}`}>
      <img src={logo} alt="logo" className="Nav_logo" onClick={() => (window.location.href = '/Portfolio')} />
      <div>
        <BiMenu alt="menu" className="Nav_menu" onClick={handleClick} />
        {modalOpen && <Menu setModalOpen={setModalOpen} />}
      </div>
    </nav>
  )
}

export default Nav
