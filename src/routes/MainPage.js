import React, { useState, useEffect, useRef } from 'react'
import '../styles/MainPage.scss'
import Canvas from '../components/Canvas'
import Dots from '../components/Dot'
import Title from '../components/Title'
import Circle from '../components/Circle'
import Lottie from 'lottie-react'

import { MdArrowRightAlt } from 'react-icons/md'
import OtherPage from './OtherPage'
import SubPage from './SubPage'
import Contect from './Contect'

import { motion } from 'framer-motion'
import scroll from '../assets/scroll_down.json'
import DesingPage from './DesingPage'

const DIVIDER_HEIGHT = 5

function MainPage() {
  // Scroll
  const outerDivRef = useRef()
  const [scrollIndex, setScrollIndex] = useState(1)
  const [show01, setShow01] = useState(false)
  const [show02, setShow02] = useState(false)
  const [show03, setShow03] = useState(false)
  const [show04, setShow04] = useState(false)
  const [show05, setShow05] = useState(false)

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault()
      const { deltaY } = e
      const { scrollTop } = outerDivRef.current // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight // 화면 세로길이, 100vh와 같습니다.
      console.log(scrollTop)

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log('현재 1페이지, down')
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: 'smooth'
          })
          setShow01(true)
          setShow02(false)
          setShow03(false)
          setShow04(false)
          setShow05(false)
          setScrollIndex(1)
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log('현재 2페이지, down')
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: 'smooth'
          })
          setShow01(false)
          setShow02(true)
          setShow03(false)
          setShow04(false)
          setShow05(false)
          setScrollIndex(2)
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          //현재 3페이지
          console.log('현재 3페이지, down')
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: 'smooth'
          })
          setShow01(false)
          setShow02(false)
          setShow03(true)
          setShow04(false)
          setShow05(false)
          setScrollIndex(3)
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
          //현재 4페이지
          console.log('현재 3페이지, down')
          outerDivRef.current.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
            left: 0,
            behavior: 'smooth'
          })
          setShow01(false)
          setShow02(false)
          setShow03(false)
          setShow04(true)
          setShow05(false)
          setScrollIndex(4)
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 5) {
          //현재 5페이지
          console.log('현재 3페이지, down')
          outerDivRef.current.scrollTo({
            top: pageHeight * 5 + DIVIDER_HEIGHT * 5,
            left: 0,
            behavior: 'smooth'
          })
          setShow01(false)
          setShow02(false)
          setShow03(false)
          setShow04(false)
          setShow05(true)
          setScrollIndex(5)
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 1페이지
          console.log('현재 1페이지, up')
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
          setScrollIndex(2)
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          //현재 2페이지
          console.log('현재 2페이지, up')
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: 'smooth'
          })
          setShow01(true)
          setShow02(false)
          setShow03(false)
          setShow04(false)
          setShow05(false)
          setScrollIndex(3)
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
          //현재 3페이지
          console.log('현재 3페이지, up')
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: 'smooth'
          })
          setShow01(false)
          setShow02(true)
          setShow03(false)
          setShow04(false)
          setShow05(false)
          setScrollIndex(4)
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 5) {
          //현재 3페이지
          console.log('현재 3페이지, up')
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: 'smooth'
          })
          setShow01(false)
          setShow02(false)
          setShow03(true)
          setShow04(false)
          setShow05(false)
          setScrollIndex(5)
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 6) {
          //현재 3페이지
          console.log('현재 3페이지, up')
          outerDivRef.current.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
            left: 0,
            behavior: 'smooth'
          })
          setShow01(false)
          setShow02(false)
          setShow03(false)
          setShow04(true)
          setShow05(false)
          setScrollIndex(5)
        }
      }
    }
    const outerDivRefCurrent = outerDivRef.current
    outerDivRefCurrent.addEventListener('wheel', wheelHandler)
    return () => {
      outerDivRefCurrent.removeEventListener('wheel', wheelHandler)
    }
  }, [])

  return (
    <>
      {/* main_container */}
      <div ref={outerDivRef} className="main_container">
        <section className="main__main">
          <div className="main_content1">
            <Title />
          </div>
          <p className="main_cont1_text">
            <span>Interactive UI Developer를 꿈꾸는,</span>
            <br />
            <span>이지해 입니다</span>
          </p>
          <Lottie
            className="Lottieicon_scroll"
            mode={'bounce'}
            speed={2}
            loop
            style={{ display: 'block', width: 50, fontSize: '16', margin: '0 auto', marginBottom: '4px' }}
            animationData={scroll}
          />
          <p className="scroll_down">Scroll Down</p>
          <Dots />
        </section>
        <section className={`main__main2 ${show01 && 'main__main2_on'}`}>
          <h3 className="main2_h3">Hello, my name is JiHae Lee.</h3>
          <p className="subtitle">Welcome to my web-page!</p>
          <div className="main_content2">
            <div className="profile_1">
              <motion.h3
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1,
                  ease: [0, 0.71, 0.2, 1.01]
                }}>
                이지해 1996.06.18
              </motion.h3>
              <div className="profile_1_1">
                <p>
                  <strong>을지대학교 성남(4년제)</strong>
                </p>
                <p>의료홍보디자인과</p>
                <p>
                  <em>
                    졸업작품 도록팀 소속(5인작업)
                    <br />
                    전반적인 레이아웃 수정 및 도록 간지 담당
                  </em>
                </p>
              </div>
              <div className="profile_1_2">
                <p>
                  <strong>이젠아카데미컴퓨터학원</strong>
                </p>
                <p>UI/UX 웹&amp;앱 디자인 &amp; 프론트엔드(React.js)_B 수강중</p>
              </div>
              <div className="profile_1_3">
                <ul>
                  <li className="group01">
                    <div className="skill_icon01">
                      <p>React</p>
                    </div>
                    <div className="skill_icon02">
                      <p>HTML5</p>
                    </div>
                    <div className="skill_icon03">
                      <p>CSS3</p>
                    </div>
                    <div className="skill_icon04">
                      <p>Javascript</p>
                    </div>
                    <div className="skill_icon05">
                      <p>Sass</p>
                    </div>
                  </li>
                  <li className="group02">
                    <div className="skill_icon06">
                      <p>Photoshop</p>
                    </div>
                    <div className="skill_icon07">
                      <p>Illustrator</p>
                    </div>
                    <div className="skill_icon08">
                      <p>InDesign</p>
                    </div>
                    <div className="skill_icon09">
                      <p>AfterEffects</p>
                    </div>
                    <div className="skill_icon10">
                      <p>Premiere</p>
                    </div>
                    <div className="skill_icon11">
                      <p>XD</p>
                    </div>
                  </li>
                  <li className="group03">
                    <div className="skill_icon12">
                      <p>Figma</p>
                    </div>
                    <div className="skill_icon13">
                      <p>Clipstudio</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="profile_line"></div>
            <div className="profile_2">
              <div className="profile_2_1">
                <ul className="profile_2_1_ul">
                  <p>2021.04 - 2021.09</p>
                  <p>
                    <strong>캐릭터 콘텐츠 스타트업 미디어콘텐츠팀 사원(정규직)</strong>
                  </p>
                  <p>
                    <em>중국계 싱가포르인 외국 CEO회사</em>
                  </p>
                  <li>
                    <p>
                      ● SBA 정부 기획서
                      <br />
                      2021.04~2021.05
                      <br />
                      <em>사용 Tool : Illustrator, InDesign</em>
                      <br />
                      캐릭터 매뉴얼북 제작
                      <br />
                      기업 CIP 매뉴얼북 제작
                      <br />
                      브랜드 카탈로그 제작
                      <br />
                      비즈니스플랜 레이아웃 정리
                    </p>
                    <p>
                      <MdArrowRightAlt className="MdArrowRightAlt" />
                      G밸리 수출 상담회, 프랑스 안시 MIFA, 대기업 임원 멘토링 분야 기획서 통과
                    </p>
                  </li>
                  <li>
                    <p>
                      ● 삼성 갤럭시 모바일 테마
                      <br />
                      <em>사용 Tool : Photoshop, Clip Studio</em>
                      <br />자 회사 캐릭터를 이용한 갤럭시 테마 앱 디자인
                    </p>
                    <p>
                      <MdArrowRightAlt className="MdArrowRightAlt" />
                      삼성 포트폴리오 통과 및 제작, 런칭, 프로모션 과정까지 1인 제작
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="profile_3">
              <div className="profile_3_1">
                <ul>
                  <p>2021.09 - 2021.12</p>
                  <p>
                    <strong>캐릭터 콘텐츠 스타트업 디지털 아터(프리랜서)</strong>
                  </p>
                  <li>
                    <p>
                      ●인스타툰
                      <br />
                      <em>
                        자 회사 캐릭터를 이용한 K-culture MZ타겟 4컷 웹툰 <br />
                        영문/ 한글 ver.
                      </em>
                    </p>
                  </li>
                  <li>
                    <p>●자 회사 캐릭터를 이용한 그래픽 아트 & 일러스트 제작</p>
                  </li>
                </ul>
                <ul>
                  <p>2021.09 - 2022.04</p>
                  <p>
                    <strong>NFT앱 스타트업 디자이너(정규직)</strong>
                  </p>
                  <li>
                    <p>
                      ●사내 CIP디자인
                      <br />
                      <em>사용 Tool : Illustrator, InDesign</em>
                      <br />자 회사 로고 및 명함 어플리케이션 제작
                    </p>
                  </li>
                  <li>
                    <p>
                      ●UIUX 디자인
                      <br />
                      <em>사용 Tool : Figma, After Effects</em>
                      <br />
                      자 회사 출시 기획 앱 Wire Frame & Prototype 1차 draft 디자인
                      <br />
                      After Effects아이콘 잡업 및 Lottie 플러그인을 통한 json파일 추출
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Circle />
          <div id="scene">
            <div className="main_content2_circle1">
              <Canvas />
            </div>
          </div>
        </section>
        <div className="main__bg"></div>
        <div className="main__bg_2"></div>
        <section className={`sub_main ${show02 && 'sub_main_on'}`}>
          <div>
            <SubPage />
          </div>
        </section>
        <section className={`other_main ${show03 && 'other_main_on'}`}>
          <div>
            <OtherPage />
          </div>
        </section>
        <section className={`Desing_main ${show04 && 'Desing_main_on'}`}>
          <div>
            <DesingPage />
          </div>
        </section>
        <section className={`contectpage_main ${show05 && 'contectpage_main_on'}`}>
          <div>
            <Contect />
          </div>
        </section>
      </div>
    </>
  )
}

export default MainPage
