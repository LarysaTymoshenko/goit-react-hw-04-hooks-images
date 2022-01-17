import {useState } from "react";
import { FcSearch } from "react-icons/fc";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import s from "./Searchbar.module.css";

export default function Searchbar ({onSubmit}){
  
  const [imgName, setImgName] = useState("");
  

 const  handleInput = (e) => {
   setImgName( e.currentTarget.value.toLowerCase());
  
  };
 const handleSubmit = (e) => {
    e.preventDefault();

    if (imgName.trim() === "") {
      toast("Enter please request");
      return;
    }
   onSubmit(imgName);
    setImgName('');
  };
  
    return (
      <header className={s.searchbar}>
        <form onSubmit={handleSubmit} className={s.searchForm}>
          <button type="submit" className={s.searchForm_button}>
            <FcSearch />
          </button>

          <input
            className={s.search_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={imgName}
            onChange={handleInput}
          />
        </form>
      </header>
    );
  }


Searchbar.propType = {
  imgName: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
