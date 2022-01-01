// import axios from 'axios';
// import { toast } from 'react-toastify';

// const getImages = axios.create({
//   baseURL: 'https://pixabay.com/api/',
//   timeout: 1000,

//   params: {
//     key: '23833327-aee66bbf86a23c3fb1d188dcb',
//     per_page: 12,
//     image_type: 'photo',
//     orientation: 'horizontal',
//   },
// });

// export async function fetchImages(name, page) {
//   try {
//     const { data } = await getImages('', { params: { q: name, page } });
//     return data;
//   } catch (error) {
//     toast.error(`Нет картинок по запросу ${name}`);
//   }
// }