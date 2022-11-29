import React, { useEffect, useState, useRef } from 'react'
import logo from '../assets/Portfolio.svg'
import { BiMenu } from 'react-icons/bi'
import '../styles/Nav.scss'
import Menu from './Menu'

function Nav() {
  const outerDivRef = useRef()
  const [scrollIndex, setScrollIndex] = useState(1)
  const [show, setShow] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const handleClick = () => {
    setModalOpen(true)
  }

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     console.log('window.scrolly', window.scrollY)
  //     // 스크롤을 내릴때 Y값이 나온다.
  //     if (window.scrollY > 50) {
  //       setShow(true)
  //     } else {
  //       setShow(false)
  //     }
  //   })
  //   // Show값이 if문 기준 true면 배경이 흰색 . flase 면 배경이 검정이 되게 한다.
  //   return () => {
  //     window.removeEventListener('scroll', () => {})
  //     /*컨포넌트가 더이상 사용되지 않을때는 위쪽의
  //       윈도우 스크롤 이벤트를 더이상 사용할 필요가 없기때문에
  //       윈도우 스크롤 이벤트를 지워준다.*/
  //   }
  // }, [])

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault()
      const { scrollTop } = outerDivRef.current // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight // 화면 세로길이, 100vh와 같습니다.
      console.log(scrollTop)
      if (scrollTop >= 50 && scrollTop < pageHeight) {
        //현재 1페이지
        setShow(true)
        setScrollIndex(1)
      } else {
        //나머지 페이지
        setShow(false)
        setScrollIndex(2)
      }
    }
    const outerDivRefCurrent = outerDivRef.current
    outerDivRefCurrent.addEventListener('wheel', wheelHandler)
    return () => {
      outerDivRefCurrent.removeEventListener('wheel', wheelHandler)
    }
  }, [])

  return (
    <nav className={`nav ${show && 'nav__white'}`} ref={outerDivRef}>
      <img src={logo} alt="logo" className="Nav_logo" onClick={() => (window.location.href = '/Portfolio')} />
      <div>
        <BiMenu alt="menu" className="Nav_menu" onClick={handleClick} />
        {modalOpen && <Menu setModalOpen={setModalOpen} />}
      </div>
    </nav>
  )
}

export default Nav
