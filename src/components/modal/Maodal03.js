import React, { useRef } from 'react'
import { FiX } from 'react-icons/fi'
import '../../styles/modal/submodal01.scss'
import useOnClickOutside from '../../hook/useOneClickOutside'

function Modal03({ setModalOpen }) {
  const ref = useRef()

  useOnClickOutside(ref, () => {
    setModalOpen(false)
  })

  return (
    <div className="SubModal">
      <div className="SubModal_container" ref={ref}>
        <span className="modal-close" onClick={() => setModalOpen(false)}>
          <FiX className="modal-close_fix" />
        </span>
        <div className="SubModal_container01"></div>
        <div className="SubModal_container02"></div>
        <div className="SubModal_container03"></div>
      </div>
    </div>
  )
}

export default Modal03
