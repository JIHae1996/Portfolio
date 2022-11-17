import React, { useRef, useEffect, useState } from 'react'
import '../styles/SubPage.scss'
import Comp2 from '../assets/Comp2.mp4'
import Comp3 from '../assets/Comp3.mp4'
import Comp4 from '../assets/Comp4.mp4'
import Comp5 from '../assets/Comp5.mp4'
import Comp6 from '../assets/Comp6.mp4'

import { MdOpenInNew } from "react-icons/md";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SubPage() {


  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    <div className='sub_container'>
    {/* sub_container */}
      <SwiperSlide>
      {/* 1 */}
      <section className='sub_container_section'>
          <article className="on">
            <div className="sub_inner">
              <h2 className='sub_number'>01</h2>
              <div className='sub_video'>
              </div>
              <div className='sub_line'></div>
              <div className='sub_content'>
                <h3>NCSOFT<span>100%</span></h3>
                <p className='sub_date'>2022.09.26-2022.10.00</p>
                <ul className='sub_lang'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                </ul>
                <ul className='sub_cont'>
                  <li className='sub_cont_title'>주요업무</li>
                  <li>
                    <ul className='sub_cont_text'>
                      <li>
                        <h4>1.반응형 웹 제작</h4>
                        <p>● pc,tablet,mobile</p>
                      </li>
                      <li>
                        <h4>2.웹 표준 준수</h4>
                        <p>● HTML/CSS WC 유효성 검사 Pass</p>
                      </li>
                      <li>
                        <h4>3.주요기술</h4>
                        <p>● CSS animation 속성과 JS를 이용한 스크롤 animation,<br />
                        마우스 Hover 인터렉션 등 구현.</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className='sub_circle_inner on'>
                <div className='sub_circle'>  
                </div>
              </div>
              <div className='sub_video1'>
                <video id="video" preload="auto" autoplay="true" loop="loop" muted="muted" volume="0">
                <source src={Comp2} width="700" height="420" autoplay></source>
                </video>
              </div>
            </div>
          </article>
          <div class='sub_btn'> 
                <div class='sub_btn_1'>        
                <button>Page <MdOpenInNew /></button>
                <button>Repository <MdOpenInNew /></button>
                </div>
            </div>
      </section>
      </SwiperSlide>
      <SwiperSlide>
      {/* 2 */}
      <section className='sub_container_section'>
        <article>
          <div className="sub_inner">
            <h2 className='sub_number'>02</h2>
            <div className='sub_video'></div>
            <div className='sub_line'></div>
            <div className='sub_content'>
              <h3>CJONE<span>100%</span></h3>
              <p className='sub_date'>2022.09.21-2022.09.26</p>
              <ul className='sub_lang'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
              </ul>
              <ul className='sub_cont'>
                <li className='sub_cont_title'>주요업무</li>
                <li>
                  <ul className='sub_cont_text'>
                    <li>
                      <h4>1.반응형 웹 제작</h4>
                      <p>● pc,tablet,mobile</p>
                    </li>
                    <li>
                      <h4>2.웹 표준 준수</h4>
                      <p>● HTML/CSS WC 유효성 검사 Pass</p>
                    </li>
                    <li>
                      <h4>3.주요기술</h4>
                      <p>● CSS animation 속성과 JS를 이용한 스크롤 animation,<br />
                      마우스 Hover 인터렉션 등 구현.</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className='sub_circle_inner'>
                <div className='sub_circle'>  
                </div>
              </div>
            <div className='sub_video1'>
                <video id="video" preload="auto" autoplay="true" loop="loop" muted="muted" volume="0">
                <source src={Comp3} width="300" height="300" autoplay></source>
                </video>
            </div>
          </div>
        </article>
        <div class='sub_btn'> 
          <div class='sub_btn_1'>        
          <button>Page <MdOpenInNew /></button>
          <button>Repository <MdOpenInNew /></button>
          </div>
        </div>
      </section>
      </SwiperSlide>
      <SwiperSlide>
      {/* 3 */}
      <section className='sub_container_section'>
        <article>
          <div className="sub_inner">
            <h2 className='sub_number'>03</h2>
            <div className='sub_video'></div>
            <div className='sub_line'></div>
            <div className='sub_content'>
              <h3>REACT TALK APP<span>100%</span></h3>
              <p className='sub_date'>2022.10.18-2022.11.01</p>
              <ul className='sub_lang'>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
              </ul>
              <ul className='sub_cont'>
                <li className='sub_cont_title'>주요업무</li>
                <li>
                  <ul className='sub_cont_text'>
                    <li>
                      <h4>1.웹 표준 준수</h4>
                      <p>● HTML/CSS WC 유효성 검사 Pass</p>
                    </li>
                    <li>
                      <h4>3.주요기술</h4>
                      <p>● React를 이용한 로그인 및 페이지 구현,  마우스 Hover 인터렉션 등 구현.</p>
                      <p>● props 를 통해 컴포넌트에게 값 전달하기</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className='sub_circle_inner'>
                <div className='sub_circle'>  
                </div>
            </div>
            <div className='sub_video2'>
                <video id="video" preload="auto" autoplay="true" loop="loop" muted="muted" volume="0">
                <source src={Comp4} width="300" height="600" autoplay></source>
                </video>
            </div> 
          </div>
        </article>
        <div class='sub_btn'> 
          <div class='sub_btn_1'>        
          <button>Page <MdOpenInNew /></button>
          <button>Repository <MdOpenInNew /></button>
          </div>
        </div>
      </section>
      </SwiperSlide>
      <SwiperSlide>
      {/* 4 */}
      <section className='sub_container_section'>
        <article>
          <div className="sub_inner">
            <h2 className='sub_number'>04</h2>
            <div className='sub_video'></div>
            <div className='sub_line'></div>
            <div className='sub_content'>
              <h3>NETFLIX APP<span>100%</span></h3>
              <p className='sub_date'>2022.11.02-2022.11.08</p>
              <ul className='sub_lang'>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
              </ul>
              <ul className='sub_cont'>
                <li className='sub_cont_title'>주요업무</li>
                <li>
                  <ul className='sub_cont_text'>
                    <li>
                      <h4>1.반응형 웹 제작</h4>
                      <p>● pc,tablet,mobile</p>
                    </li>
                    <li>
                      <h4>2.웹 표준 준수</h4>
                      <p>● HTML/CSS WC 유효성 검사 Pass</p>
                    </li>
                    <li>
                      <h4>3.주요기술</h4>
                      <p>● React를 이용한 로그인 및 페이지 구현,  마우스 Hover 인터렉션 등 구현.</p>
                      <p>● props 를 통해 컴포넌트에게 값 전달하기</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className='sub_circle_inner'>
                <div className='sub_circle'>  
                </div>
            </div>
            <div className='sub_video2'>
                <video id="video" preload="auto" autoplay="true" loop="loop" muted="muted" volume="0">
                <source src={Comp5} width="300" height="600" autoplay></source>
                </video>
            </div> 
          </div>
        </article>
        <div class='sub_btn'> 
          <div class='sub_btn_1'>        
          <button>Page <MdOpenInNew /></button>
          <button>Repository <MdOpenInNew /></button>
          </div>
        </div>
      </section>
      </SwiperSlide>
      <SwiperSlide>
      {/* 5 */}
      <section className='sub_container_section'>
        <article>
          <div className="sub_inner">
            <h2 className='sub_number'>05</h2>
            <div className='sub_video'></div>
            <div className='sub_line'></div>
            <div className='sub_content'>
              <h3>REACT FOREST APP<span>100%</span></h3>
              <p className='sub_date'>2022.00.00-2022.00.00</p>
              <ul className='sub_lang'>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
              </ul>
              <ul className='sub_cont'>
                <li className='sub_cont_title'>주요업무</li>
                <li>
                  <ul className='sub_cont_text'>
                    <li>
                      <h4>1.반응형 웹 제작</h4>
                      <p>● pc,tablet,mobile</p>
                    </li>
                    <li>
                      <h4>2.웹 표준 준수</h4>
                      <p>● HTML/CSS WC 유효성 검사 Pass</p>
                    </li>
                    <li>
                      <h4>3.주요기술</h4>
                      <p>● React를 이용한 로그인 및 페이지 구현,  마우스 Hover 인터렉션 등 구현.</p>
                      <p>● props 를 통해 컴포넌트에게 값 전달하기</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className='sub_circle_inner'>
                <div className='sub_circle'>  
                </div>
            </div>
          </div>
          <div className='sub_video2'>
                <video id="video" preload="auto" autoplay="true" loop="loop" muted="muted" volume="0">
                <source src={Comp6} width="300" height="600" autoplay></source>
                </video>
            </div> 
        </article>
        <div class='sub_btn'> 
          <div class='sub_btn_1'>        
          <button>Page <MdOpenInNew /></button>
          <button>Repository <MdOpenInNew /></button>
          <button>기획파일 <MdOpenInNew /></button>
          <button>behance <MdOpenInNew /></button>
          </div>
        </div>
      </section>
      </SwiperSlide>
      
    </div>
    </Swiper>
  )
}

export default SubPage