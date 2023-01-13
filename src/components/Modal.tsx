import React, { ReactNode } from "react";
import ReactDOM from 'react-dom';

interface ModalProps {
    show: boolean,
    closeModal: () => void,
    children?: ReactNode
}
const Modal = ({ show, closeModal, children }: ModalProps) => {
  if (!show) {
    return null
  }

  return ReactDOM.createPortal(
      <div className="modal">
        <div className="body">
            <button className='close' onClick={closeModal}>Close Modal</button>
          {children}
        </div>
      </div>
    , document.body
  )
}

export  { Modal }
