import "./App.css";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import styles from "./App.module.css";

function App() {
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
  // const handleSearchSubmit = query => {
  //   if (!query.trim()) {
  //     toast.error('Please enter a search term');
  //     return;
  //   }
  //   fetchImages(query);
  // };
  // return (
  //   <div className={styles.app}>
  //     <SearchBar onSubmit={handleSearchSubmit} />
  //     {isLoading && <Loader />}
  //     <ImageGallery images={images} />
  //     {/* <Toaster /> */}
  //   </div>
  // );
}

export default App;
