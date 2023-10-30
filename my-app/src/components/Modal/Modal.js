import React,{Fragment} from 'react'
import ReactDom from 'react-dom'; 
import styles from './Modal.module.css'


const BackDrop =({close})=>{
    return (
        <div className={styles.backDrop} onClick={close} >  </div>
    )
}

const OverLay =({children})=>{

    return (
        <div className={styles.overLay}>
        {children}
        </div>
    )
}

const Modal = ({showModal,closeModal,children}) => {
  return (
    showModal && (
    <Fragment>
        {ReactDom.createPortal(
        <Fragment>
           <BackDrop close={closeModal}></BackDrop>
           <OverLay>{children}</OverLay>
        </Fragment>,document.getElementById('modal')
        )}
    </Fragment>
    )
  )
}

export default Modal
