import React,{Fragment} from 'react'
import ReactDom from 'react-dom'; 
import styles from './Modal.module.css'
import Controller  from '../Layout/Controller';


const BackDrop =({close})=>{
    return (
        <div className={styles.backDrop} onClick={close} >  </div>
    )
}

const OverLay =()=>{
    return (
        <div className={styles.overLay}>
            <form>
                <Controller>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' placeholder='Enter Name' />
                </Controller>       
            </form>
        </div>
    )
}

const Modal = ({showModal,closeModal}) => {
  return (
    showModal && (
    <Fragment>
        {ReactDom.createPortal(
        <Fragment>
           <BackDrop close={closeModal}></BackDrop>
           <OverLay></OverLay>
        </Fragment>,document.getElementById('modal')
        )}
    </Fragment>
    )
  )
}

export default Modal
