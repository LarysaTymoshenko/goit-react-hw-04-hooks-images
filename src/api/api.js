import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getImages = axios.create({
  baseURL: "https://pixabay.com/api/",
  timeout: 1000,

  params: {
    key: "23833327-aee66bbf86a23c3fb1d188dcb",
    per_page: 12,
    image_type: "photo",
    orientation: "horizontal",
  },
});

export async function searchImages(name, page = 1) {
  const params = { q: name, page };
  try {
    const { data: hits } = await getImages("", { params });
    return hits;
  } catch (error) {
    toast.error(`Sorry, please enter the name again `);
  }
}
