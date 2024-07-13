import "./App.css";
import { useState } from "react";
// import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { createContext } from "react";
import { searchImages } from "./api/unsplashApi";
import Loader from "./components/Loader/Loader";
// import styles from "./App.module.css";

export const AppContext = createContext();

const App = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSearchSubmit = async (query) => {
    setIsLoading(true);
    const response = await searchImages(query, 1, 15);
    console.log(response);
    setGalleryImages(response.results);
  };

  return (
    <AppContext.Provider value={{ setGalleryImages }}>
      <SearchBar onSubmit={onSearchSubmit} />
      <Loader />
      {galleryImages.length !== 0 && <ImageGallery images={galleryImages} />}
    </AppContext.Provider>
  );
};

export default App;

//  const [images, setImages] = useState([]);
// const [isLoading, setIsLoading] = useState(false);
// const fetchImages = async query => {
//   setIsLoading(true);
//   try {
//     const response = await axios.get('https://api.unsplash.com/search/photos', {
//       params: { query },
//       headers: {
//         Authorization: Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY},
//       },
//     });
//     setImages(response.data.results);
//   } catch (error) {
//     toast.error('Failed to fetch images');
//   } finally {
//     setIsLoading(false);
//   }
// }
// const handleSearchSubmit = (query) => {
//   if (!query.trim()) {
//     toast.error("Please enter a search term");
//     return;
//   }
//   fetchImages(query);
