import React, { useState } from 'react'
import '../styles/SubPage.scss'
import Comp2 from '../assets/Comp2.mp4'
import Comp3 from '../assets/Comp3.mp4'
import Comp4 from '../assets/Comp4.mp4'
import Comp5 from '../assets/Comp5.mp4'
import Comp6 from '../assets/Comp6.mp4'

import { MdOpenInNew } from 'react-icons/md'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

import Modal03 from '../components/modal/Maodal03'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import Lottie from 'lottie-react'
import swipe from '../assets/swipe.json'

import { VscCircleFilled } from 'react-icons/vsc'
import SubBg from '../components/SubBg'

function SubPage() {
  const [modalOpen03, setModalOpen03] = useState(false)

  const ModalCont03 = () => {
    setModalOpen03(true)
  }

  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
        <div className="sub_container">
          {/* sub_container */}
          <SwiperSlide>
            {/* 1 */}
            <section className="sub_container_section">
              <article className="on">
                <div className="sub_inner">
                  <div className="Subpage_Modal03">
                    {modalOpen03 && <Modal03 setModalOpen={setModalOpen03} />}
                    <div className="Subpage_modal_btn" onClick={ModalCont03}>
                      <p>유효성 검사</p>
                    </div>
                  </div>
                  <h2 className="sub_number">01</h2>
                  <div className="sub_video"></div>
                  <div className="sub_line"></div>
                  <div className="sub_content">
                    <h3>
                      NCSOFT<span>100%</span>
                    </h3>
                    <p className="sub_date">2022.09.26-2022.10.00</p>
                    <ul className="sub_lang">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JAVASCRIPT</li>
                    </ul>
                    <ul className="sub_cont">
                      <li className="sub_cont_title">주요업무</li>
                      <li>
                        <ul className="sub_cont_text">
                          <li>
                            <h4>1.웹 표준 준수</h4>
                            <p>
                              <VscCircleFilled className="VscCircleFilled" /> HTML/CSS WC 유효성 검사 Pass
                            </p>
                          </li>
                          <li>
                            <br />
                            <h4>2.주요기술</h4>
                            <p>
                              <VscCircleFilled className="VscCircleFilled" /> CSS animation 속성과, 마우스 Hover 인터렉션 구현.
                            </p>
                            <p>
                              <VscCircleFilled className="VscCircleFilled" /> Javascript와 스크롤 위치에 따라 달라지는 perspective를 이용한 transition 구현.
                            </p>
                            <p>
                              <VscCircleFilled className="VscCircleFilled" /> form 태그를 이용한 페이지 구현.
                            </p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="sub_circle_inner on">
                    <div className="sub_circle"></div>
                  </div>
                  <div className="sub_video1">
                    <video id="video" preload="auto" autoPlay={true} loop="loop" muted="muted" volume="0">
                      <source src={Comp2} width="700" height="420"></source>
                    </video>
                  </div>
                </div>
              </article>
              <div className="sub_btn">
                <div className="sub_btn_1">
                  <button>
                    <a onClick={() => window.open('https://jihaelee1996.github.io/NCSOFT/', '_blank')}>
                      Page <MdOpenInNew className="MdOpenInNew" />
                    </a>
                  </button>
                  <button>
                    <a onClick={() => window.open('https://github.com/jihaelee1996/NCSOFT', '_blank')}>
                      Repository <MdOpenInNew className="MdOpenInNew" />
                    </a>
                  </button>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            {/* 2 */}
            <section className="sub_container_section">
              <article>
                <div className="sub_inner">
                  <h2 className="sub_number">02</h2>
                  <div className="sub_video"></div>
                  <div className="sub_line"></div>
                  <div className="sub_content">
                    <h3>
                      CJONE<span>100%</span>
                    </h3>
                    <p className="sub_date">2022.09.21-2022.09.26</p>
                    <ul className="sub_lang">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JAVASCRIPT</li>
                    </ul>
                    <ul className="sub_cont">
                      <li className="sub_cont_title">주요업무</li>
                      <li>
                        <ul className="sub_cont_text">
                          <li>
                            <h4>1.반응형 웹 제작</h4>
                            <p>
                              <VscCircleFilled className="VscCircleFilled" /> pc,tablet,mobile
                            </p>
                          </li>
                          <br />
                          <li>
                            <h4>2.주요기술</h4>
                            <p>
                              <VscCircleFilled className="VscCircleFilled" /> Javascript를 이용한 이미지 배열. gif animation 구현.
                            </p>
                            <p>
                              <VscCircleFilled className="VscCircleFilled" /> CSS animation 속성과 마우스 Hover 인터렉션 등 구현.
                            </p>
                            <p>
                              <VscCircleFilled className="VscCircleFilled" /> Javascript class추가와 스크롤값이 따라 달라지는 classname 에 따라 변경되는 css
                              animation 구현.
                            </p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="sub_circle_inner">
                    <div className="sub_circle"></div>
                  </div>
                  <div className="sub_video1">
                    <video id="video" preload="auto" autoPlay={true} loop="loop" muted="muted" volume="0">
                      <source src={Comp3}></source>
                    </video>
                  </div>
                </div>
              </article>
              <div className="sub_btn">
                <div className="sub_btn_1">
                  <button>
                    <a onClick={() => window.open('https://jihaelee1996.github.io/webProject02/', '_blank')}>
                      Page <MdOpenInNew className="MdOpenInNew" />
                    </a>
                  </button>
                  <button>
                    <a onClick={() => window.open('https://github.com/jihaelee1996/webProject02', '_blank')}>
                      Repository <MdOpenInNew className="MdOpenInNew" />
                    </a>
                  </button>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            {/* 3 */}
            <section className="sub_container_section">
              <article>
                <div className="sub_inner">
                  <h2 className="sub_number">03</h2>
                  <div className="sub_video"></div>
                  <div className="sub_line"></div>
                  <div className="sub_content">
                    <h3>
                      REACT TALK APP<span>100%</span>
                    </h3>
                    <p className="sub_date">2022.10.18-2022.11.01</p>
                    <ul className="sub_lang">
                      <li>React</li>
                      <li>Javascript</li>
                      <li>Scss</li>
                      <li>Spa</li>
                      <li>Firebase</li>
                      <li>React-router-dom</li>
                    </ul>
                    <ul className="sub_cont">
                      <li className="sub_cont_title">주요업무</li>
                      <li>
                        <ul className="sub_cont_text">
                          <li>
                            <h4>1.주요기술</h4>
                            <p>
                              <VscCircleFilled className="VscCircleFilled" /> firebase를 이용한 스토리지, 실시간 데이터 베이스 구현 및 로그인 기능
                            </p>
                            <p>
                              <VscCircleFilled className="VscCircleFilled" /> router를 이용한 페이지 정리화와 이동 기능
                            </p>
                            <p>
                              <VscCircleFilled className="VscCircleFilled" /> scss를 이용한 css정리 구현
                            </p>
                            <p>
                              <VscCircleFilled className="VscCircleFilled" /> React-icons를 이용한 아이콘 연결
                            </p>
                            <p>
                              <VscCircleFilled className="VscCircleFilled" /> props를 통해 컴포넌트에게 값 전달하기
                            </p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="sub_circle_inner">
                    <div className="sub_circle"></div>
                  </div>
                  <div className="sub_video2">
                    <video id="video" preload="auto" autoPlay={true} loop="loop" muted="muted" volume="0">
                      <source src={Comp4} width="300" height="600"></source>
                    </video>
                  </div>
                </div>
              </article>
              <div className="sub_btn">
                <div className="sub_btn_1">
                  <button>
                    <a onClick={() => window.open('https://jihaelee1996.github.io/kakao_app/', '_blank', 'width=480, height=1200')}>
                      Page <MdOpenInNew className="MdOpenInNew" />
                    </a>
                  </button>
                  <button>
                    <a onClick={() => window.open('https://github.com/jihaelee1996/kakao_app', '_blank')}>
                      Repository <MdOpenInNew className="MdOpenInNew" />
                    </a>
                  </button>
                  {/* 뜨는 팝업페이지가 모바일 크기로 지정해야함 */}
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            {/* 4 */}
            <section className="sub_container_section">
              <article>
                <div className="sub_inner">
                  <h2 className="sub_number">04</h2>
                  <div className="sub_video"></div>
                  <div className="sub_line"></div>
                  <div className="sub_content">
                    <h3>
                      REACT NETFLIX APP<span>100%</span>
                    </h3>
                    <p className="sub_date">2022.11.02-2022.11.08</p>
                    <ul className="sub_lang">
                      <li>React</li>
                      <li>Javascript</li>
                      <li>Scss</li>
                      <li>Spa</li>
                      <li>Firebase</li>
                      <li>Axios</li>
                      <li>React-router-dom</li>
                    </ul>
                    <ul className="sub_cont">
                      <li className="sub_cont_title">주요업무</li>
                      <li>
                        <ul className="sub_cont_text">
                          <li>
                            <h4>1.반응형 앱 제작</h4>
                            <p>
                              <VscCircleFilled className="VscCircleFilled" /> pc,tablet,mobile
                            </p>
                          </li>
                          <br />
                          <li>
                            <h4>2.주요기술</h4>
                            <p>
                              <VscCircleFilled className="VscCircleFilled" /> firebase를 이용한 스토리지 구현 및 로그인 기능
                            </p>
                            <p>
                              <VscCircleFilled className="VscCircleFilled" /> router를 이용한 페이지 정리화와 이동 기능
                            </p>
                            <p>
                              <VscCircleFilled className="VscCircleFilled" /> Swiper Slid 구현
                            </p>
                            <p>
                              <VscCircleFilled className="VscCircleFilled" /> 외부 데이터를 props를 통해 컴포넌트에게 값 전달하기
                            </p>
                            <p>
                              <VscCircleFilled className="VscCircleFilled" /> Modal창을 이용한 팝업창 구현
                            </p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="sub_circle_inner">
                    <div className="sub_circle"></div>
                  </div>
                  <div className="sub_video3">
                    <video id="video" preload="auto" autoPlay={true} loop="loop" muted="muted" volume="0">
                      <source src={Comp5} width="300" height="600"></source>
                    </video>
                  </div>
                </div>
              </article>
              <div className="sub_btn">
                <div className="sub_btn_1">
                  <button>
                    <a onClick={() => window.open('https://jihaelee1996.github.io/netflix_app/', '_blank', 'width=480, height=1200')}>
                      Page <MdOpenInNew className="MdOpenInNew" />
                    </a>
                  </button>
                  <button>
                    <a onClick={() => window.open('https://github.com/jihaelee1996/netflix_app', '_blank')}>
                      Repository <MdOpenInNew className="MdOpenInNew" />
                    </a>
                  </button>
                  {/* 뜨는 팝업페이지가 모바일 크기로 지정해야함 */}
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            {/* 5 */}
            <section className="sub_container_section">
              <article>
                <div className="sub_inner">
                  <h2 className="sub_number">05</h2>
                  <div className="sub_video"></div>
                  <div className="sub_line"></div>
                  <div className="sub_content">
                    <h3>
                      REACT FOREST APP<span>100%</span>
                    </h3>
                    <p className="sub_date">2022.00.00-2022.00.00</p>
                    <ul className="sub_lang">
                      <li>React</li>
                      <li>Javascript</li>
                      <li>Scss</li>
                      <li>Spa</li>
                      <li>Firebase</li>
                      <li>React-router-dom</li>
                      <li>Lottie</li>
                    </ul>
                    <ul className="sub_cont">
                      <li className="sub_cont_title">주요업무</li>
                      <li>
                        <ul className="sub_cont_text">
                          <li>
                            <h4>1.기획</h4>
                            <p>
                              <VscCircleFilled className="VscCircleFilled" /> 기존 앱 핵심기능, 경쟁사 분석. 정보구조 설계 및 SWOT 분석과 페르소나 분석
                            </p>
                            <p>
                              <VscCircleFilled className="VscCircleFilled" /> LO-Fi 프로토타입 제작 및 Task Flow 제작.
                            </p>
                          </li>
                          <br />
                          <li>
                            <h4>2.디자인</h4>
                            <p>
                              <VscCircleFilled className="VscCircleFilled" /> Photoshop을 이용한 오브젝트 디지털 아트.
                            </p>
                            <p>
                              <VscCircleFilled className="VscCircleFilled" /> AfterEffect를 이용한 아이콘 구현.
                            </p>
                            <p>
                              <VscCircleFilled className="VscCircleFilled" /> Figma를 이용한 프로토타입 및 DesignSystem 제작.
                            </p>
                          </li>
                          <br />
                          <li>
                            <h4>3.주요기술</h4>
                            <p>
                              <VscCircleFilled className="VscCircleFilled" /> React를 이용한 로그인 및 페이지 구현, 마우스 Hover 인터렉션 등 구현.
                            </p>
                            <p>
                              <VscCircleFilled className="VscCircleFilled" /> props 를 통해 컴포넌트에게 값 전달하기
                            </p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="sub_circle_inner">
                    <div className="sub_circle"></div>
                  </div>
                </div>
                <div className="sub_video2">
                  <video id="video" preload="auto" autoPlay={true} loop="loop" muted="muted" volume="0">
                    <source src={Comp6} width="300" height="600"></source>
                  </video>
                </div>
              </article>
              <div className="sub_btn">
                <div className="sub_btn_1">
                  <button>
                    <a onClick={() => window.open('https://jihaelee1996.github.io/portfolio_forest/', '_blank', 'width=480, height=1200')}>
                      Page <MdOpenInNew className="MdOpenInNew" />
                    </a>
                  </button>
                  <button>
                    <a onClick={() => window.open('https://github.com/jihaelee1996/portfolio_forest', '_blank')}>
                      Repository <MdOpenInNew className="MdOpenInNew" />
                    </a>
                  </button>
                  <button>
                    <a onClick={() => window.open('https://drive.google.com/file/d/1WMDe42rOgTvBDAuoyoWfLIyk6MYhNCDm/view?usp=sharing', '_blank')}>
                      기획파일 <MdOpenInNew className="MdOpenInNew" />
                    </a>
                  </button>
                  <button>
                    <a onClick={() => window.open('https://www.behance.net/gallery/156630789/forest', '_blank')}>
                      behance <MdOpenInNew className="MdOpenInNew" />
                    </a>
                  </button>
                </div>
              </div>
            </section>
          </SwiperSlide>
        </div>
      </Swiper>
      <div className="sub__bg">
        <SubBg className="sub__bg" />
        <p className="Lottieicon_swipe_text">swipe</p>
        <Lottie
          className="Lottieicon_swipe"
          mode={'bounce'}
          speed={2}
          loop
          style={{ display: 'block', width: 200, fontSize: '16', margin: '0 auto', marginBottom: '4px' }}
          animationData={swipe}
        />
      </div>
    </>
  )
}

export default SubPage
