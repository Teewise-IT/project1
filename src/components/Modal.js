import React from 'react';
import { AiOutlineClose, AiOutlineInfoCircle } from 'react-icons/ai';
import './style.css';

const Modal = ({onCloseModal}) => {
  return (
    <div onClick={onCloseModal} className='modalsection cm'>
        <div className='modal'>
            <div><AiOutlineClose className='closeicon cm' onClick={onCloseModal} size={8} color="red" /></div>
            <div className='modalhead'>
                <AiOutlineInfoCircle size={16} color="orangered" />
                <h3 className='h3'>Do you wish to continue?</h3>
            </div>
            <div className='modalbody'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, harum. Neque voluptate eius quaerat suscipit recusandae sit doloribus ea odio, in, nisi aliquam, et eligendi sunt iusto! Quia, ut reprehenderit.</p>
            </div>
            <div className='footer'>
                <button className='cm' onClick={onCloseModal}>Cancel</button>
                <button style={{backgroundColor: "blue", color: "white"}}>Continue</button>
            </div>
        </div>
    </div>
  )
}

export default Modal