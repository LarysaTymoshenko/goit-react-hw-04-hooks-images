import React from "react";
// import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ src, user, onClick }) => {
  return (
  
      <li className={s.imageItem}>
        <img
          className={s.image}
          onClick={onClick}
          src={src}
          alt={user}
          width="380px"
          height="280px"
        />
      </li>
    
  );
};

export default ImageGalleryItem;
