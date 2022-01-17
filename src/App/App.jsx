import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import ImageGallery from "../ImageGallery/ImageGallery";
import Searchbar from "../Searchbar/Searchbar";

export default function App () {
  
  const [imgName, setimgName] = useState('');

 const onFormSubmit = (imgName) => {
    setimgName(imgName);
  };

    return (
      <div>
        <Searchbar onSubmit={onFormSubmit} />

        <ImageGallery imgName={imgName} />

        <ToastContainer autoClose={3000} />
      </div>
    );
  }

