import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { searchImages } from "../api/api";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";

 const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default function ImageGallery({ imgName }) {
 
  const [imgArr, setImgArr] = useState([]);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [currentName, setCurrentName] = useState("");
   
  useEffect(() => {
    if (!imgName) {
      setImgArr([]);
    }
    const fetch = async () => {
      setStatus(Status.PENDING);

      const someImg = await searchImages(imgName, page);
        
      setImgArr([...imgArr, ...someImg]),
        setStatus(Status.RESOLVED),
        setCurrentName(imgName);
    
      fetch(); 
    }
    if (imgName !== currentName) {
      clearOnNewRequest();
    }
  }, [imgArr, page, currentName]);



 const clearOnNewRequest = () => {
    setImgArr([]);
    setPage(1);
    setCurrentName(imgName);
  };
 const buttonOnclickNextPage = () => {
    // const { page } = this.state;
    setPage((page) => page + 1);
    scrollTop();
  };

 const  onClickImgToggleModal = () => {
    setIsOpen((isOpen) => !isOpen);
  };

 const imgModalWriting = (largeImageURL) => {
    onClickImgToggleModal();
    setLargeImageURL( largeImageURL );
  };

 const scrollTop = () => {
    setTimeout(
      () =>
        window.scrollTo({
          top: window.pageYOffset + document.documentElement.clientHeight,
          behavior: "smooth",
          block: "end",
        }),
      500
    );
  };
    return (
      <>
        <div>
          {imgArr.length > 0 && (
            <ul className={s.gallery}>
              {imgArr.map((img) => (
                <ImageGalleryItem
                  key={img.id}
                  src={img.webformatURL}
                  alt={img.tags}
                  onClick={() => imgModalWriting(img.largeImageURL)}
                />
              ))}
            </ul>
          )}
        </div>

        {imgArr.length > 0 && status === "idle" && (
          <Button nextPage={buttonOnclickNextPage} />
        )}
        {status === "pending" && <Loader />}

        {isOpen && (
          <Modal
            onClose={onClickImgToggleModal}
            openImgModal={largeImageURL}
          />
        )}
      </>
    );
  }

ImageGallery.propTypes = {
  imagName: PropTypes.string.isRequired,
}


