import React from 'react';

const Modal = ({children, onClose }) => {
  return (
    <>
    <div 
      style={{position: 'fixed',top: 0,left: 0,width: '100%', height: '100vh',backgroundColor: 'rgba(0, 0, 0, 0.75)',display: 'flex',justifyContent: 'center',alignItems: 'center',zIndex: 9}} 
      onClick={onClose} 
    ></div>
      <dialog
        style={{position: 'relative',padding: '2rem',borderRadius: '6px',backgroundColor: 'white',width: '40%',zIndex: 10,border: 'none',}}
        open
      >
        {children}
      </dialog>
    
    </>
  )
}

export default Modal

