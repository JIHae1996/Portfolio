import React, { useRef } from 'react'
import { FiX } from 'react-icons/fi'
import '../../styles/OtherModal.scss'
import '../../styles/modal/jordy.css'

import useOnClickOutside from '../../hook/useOneClickOutside'

function Modal01({ setModalOpen }) {
  const ref = useRef()

  useOnClickOutside(ref, () => {
    setModalOpen(false)
  })

  return (
    <div className="OtherModal">
      <div className="OtherModal_container">
        <div className="OtherModal_main" ref={ref}>
          <span className="modal-close" onClick={() => setModalOpen(false)}>
            <FiX />
          </span>
          <div class="jordy-container">
            <div class="jordy">
              <div class="apple"></div>
              <div class="hair">
                <div class="hair1"></div>
                <div class="hair2"></div>
                <div class="hair3"></div>
              </div>
              <div class="face">
                <div class="eyebrows">
                  <div class="eyebrows1"></div>
                  <div class="eyebrows2"></div>
                  <div class="eyebrows3"></div>
                </div>
                <div class="eyes"></div>
                <div class="mouth">
                  <div class="mouth1"></div>
                  <div class="mouth2"></div>
                </div>
              </div>
              <div class="jordy-body"></div>
              <div class="legs">
                <div class="legs1"></div>
                <div class="legs2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal01
