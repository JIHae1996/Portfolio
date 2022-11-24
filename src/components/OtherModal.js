import React, { useRef } from 'react'
import { FiX } from 'react-icons/fi'
import '../styles/OtherModal.scss'

function OtherModal({ setModalOpen }) {
  const ref = useRef()

  return (
    <>
      <div className="OtherModal" ref={ref}>
        <div className="OtherModal_container">
          <div className="OtherModal_main">
            <span className="modal-close" onClick={() => setModalOpen(false)}>
              <FiX />
            </span>
          </div>
        </div>
      </div>
      <div className="OtherModal_bg"></div>
    </>
  )
}

export default OtherModal
