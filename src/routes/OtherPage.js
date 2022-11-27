import React, { useRef, useState } from 'react'
import Modal01 from '../components/modal/Modal01'
import Modal02 from '../components/modal/Modal02'

import '../styles/OtherPage.scss'

function OtherPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalOpen02, setModalOpen02] = useState(false)

  // const handleClick = () => {
  //   setModalOpen(true)
  // }

  const ModalCont01 = () => {
    setModalOpen(true)
  }

  const ModalCont02 = () => {
    setModalOpen02(true)
  }

  return (
    <div>
      {/* other_container */}
      <section className="other_section">
        <div className="other_content">
          <div className="Otherpage_Modal">{modalOpen && <Modal01 setModalOpen={setModalOpen} />}</div>
          <div className="other_article1" onClick={ModalCont01}>
            <div className="other_article1_img"></div>
            <div className="other_article1_content">
              <h5>
                The
                <br />
                Emoticon,
              </h5>
              <p>
                Jordy
                <br />
                animation
              </p>
            </div>
          </div>

          <div className="other_article2">
            <div className="other_article2_img"></div>
            <div className="other_article2_content">
              <h5>
                Galaxy
                <br />
                Theme,
              </h5>
              <p>intern yangyang</p>
            </div>
          </div>
          <div className="Otherpage_Modal">{modalOpen02 && <Modal02 setModalOpen={setModalOpen02} />}</div>
          <div className="other_article3" onClick={ModalCont02}>
            <div className="other_article3_img"></div>
            <div className="other_article3_content">
              <h5>
                The
                <br />
                Animation,
              </h5>
              <p>
                After Effects
                <br />
                and json
              </p>
            </div>
          </div>

          <div className="other_article4">
            <div className="other_article4_img"></div>
            <div className="other_article4_content">
              <h5>
                Galaxy
                <br />
                Theme Icon
              </h5>
            </div>
          </div>
        </div>
        <div className="circle_wrap">
          <span className="doughnut_Left_L"></span>
          <span className="doughnut_Left_s"></span>
          <span className="doughnut_Left"></span>

          <span className="doughnut_right_M"></span>
          <span className="doughnut_right_s"></span>
          <span className="doughnut_right"></span>
        </div>
      </section>
    </div>
  )
}

export default OtherPage
