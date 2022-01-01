import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import s from "./Modal.module.css";

const root = document.createElement("div");

export default  function Modal ({onClose}) {
  useEffect(() => {
    document.body.appendChild(root);
    window.addEventListener("keydown", closeKeyDown);
    document.body.style.overflow = "hidden";
     window.removeEventListener("keydown", closeKeyDown);
    document.body.style.overflow = "scroll";
    
  })
  
  
 const closeKeyDown = (el) => {
    if (el.code === "Escape") {
      onClose();
    }
  };
 const closeBackDrop = (el) => {
    if (el.target === el.currentTarget) {
     onClose();
    }
  };


    const { openImgModal, alt } = this.props;
    return createPortal(
      <div className={s.overlay} onClick={closeBackDrop}>
        <div className={s.modal}>
          <button className={s.button} onClick={closeBackDrop}>
            Close
          </button>
          <img className={s.modal__image} src={openImgModal} alt={alt} />
        </div>
      </div>,
      root
    );
  }


Modal.propTypes = {
 onClose: PropTypes.func.isRequired,
}