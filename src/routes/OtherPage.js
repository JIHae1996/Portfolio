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
            <a href="https://notefolio.net/jihae_96/258472">
              <div className="other_article2_img"></div>
              <div className="other_article2_content">
                <h5>
                  Galaxy
                  <br />
                  Theme,
                </h5>
                <p>intern yangyang</p>
              </div>
            </a>
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
            <a href="https://www.artstation.com/gaon_96">
              <div className="other_article4_img"></div>
              <div className="other_article4_content">
                <h5>
                  Artstation
                  <br />
                  Works
                </h5>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OtherPage
