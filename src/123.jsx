// // import React, { useState, useEffect } from "react";
// // import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
// // import s from "./ImageGallery.module.css";
// // import container from "../Container.module.css";
// // import Api from "../ApiService/ApiService";
// // import Button from "../Button/Button";
// // import ThreeDots from "../Loader/Loader";
// // import Modal from "../Modal/Modal";

// function ImageGallery({ imgName }) {
//   const [currentName, setCurrentName] = useState("");

//   const [imgArr, setImgArr] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [largeImageURL, setLargeImageURL] = useState(null);
//   useEffect(() => {
//     if (!imgName) {
//       return;
//     }

//     if (imgName) {
//       setLoading(true);
//       Api(imgName, page)
//         .then((data) => setImgArr([...imgArr, ...data.hits]))
//         .finally(() => setLoading(false));
//     }
//     if (imgName !== currentName) clearOnNewRequest();
//   }, [imgName, page, currentName]);

//   const clearOnNewRequest = () => {
//     setImgArr([]);
//     setPage(1);
//     setCurrentName(imgName);
//   };

//   const buttonOnclickNextPage = () => {
//     setPage((page) => page + 1);

//     scrollTop();
//   };

//   const onClickImgToggleModal = () => {
//     setIsOpen((isOpen) => !isOpen);
//   };

//   const imgModalWriting = (largeImageURL) => {
//     onClickImgToggleModal();
//     setLargeImageURL(largeImageURL);
//   };

//   const scrollTop = () => {
//     setTimeout(
//       () =>
//         window.scrollTo({
//           top: window.pageYOffset + document.documentElement.clientHeight,
//           behavior: "smooth",
//           block: "end",
//         }),
//       1000
//     );
//   };

//   return (
//     <>
//       <div className={container.container}>
//         {imgArr.length > 0 && (
//           <ul className={s.gallery}>
//             {imgArr.map((img) => (
//               <ImageGalleryItem
//                 key={img.id}
//                 src={img.webformatURL}
//                 alt={img.tags}
//                 onClick={() => imgModalWriting(img.largeImageURL)}
//               />
//             ))}
//           </ul>
//         )}
//       </div>

//       {imgArr.length > 0 && !loading && (
//         <Button nextPage={buttonOnclickNextPage} />
//       )}
//       {loading && <ThreeDots />}

//       {isOpen && (
//         <Modal onClose={onClickImgToggleModal} openImgModal={largeImageURL} />
//       )}
//     </>
//   );
// }
// export default ImageGallery;


// const fetch = async () => {
//       setStatus(Status.PENDING);

//       const { hits: newImg, totalHits: totalImg } =
//         await searchImages(imgName, page);
//       if (newImg.length === 0 && totalImg === 0) {
        
//         return ("Error");
//       }
      
//       if (page === 1) {
//         return (`Found ${totalImg} images`);
//       }
//       setCurrentName(imgName);
//       setImgArr([...imgArr, ...newImg]);
//       setStatus(Status.RESOLVED);
//     };

//     fetch();