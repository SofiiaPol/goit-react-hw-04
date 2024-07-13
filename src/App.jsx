import "./App.css";
// import { useState } from "react";
import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
// import ImageGallery from "./components/ImageGallery/ImageGallery";
// import Loader from "./components/Loader/Loader";
// import styles from "./App.module.css";

// const BASE_URL = "https://api.unsplash.com/";
// const PARAMS = {
//   key: "ZzTwiQ7oQoHLmWKR8dN2NaH-uHb94Zqp2oAVk06x040",
// };

function App() {
  return <SearchBar />;
}

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
