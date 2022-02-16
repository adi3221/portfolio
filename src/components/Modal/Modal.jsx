import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import './Modal.css'

const Modal = ({closeModal}) => {
    return ReactDOM.createPortal(
        <div onClick={(e)=>closeModal()} className="modal-overlay">
            <div onClick={(e)=>e.stopPropagation()} className="modal-container">
                <div className="upper-section">
                    <h1>Welcome To My Portfolio</h1>
                    <p onClick={(e)=>closeModal()} className='close'>&times;</p>
                </div>
                <div className="middle-section">
                    <h3>This Portfolio has been built in React Only.</h3>
                    <p>Hope this portfolio will speak everything about me!!!</p>
                </div>
                <div className="lower-section">
                <a onClick={(e)=>closeModal()} className='modal-btn btn-red'>Close</a>
                    <Link to="/about" className='modal-btn btn-green'>
                        <p>About Me</p>
                    </Link>
                </div>
            </div>
        </div>,
        document.getElementById("modal")
    );
}
export default Modal;