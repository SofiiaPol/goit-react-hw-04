import "./App.css";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { createContext } from "react";
import { searchImages } from "./api/unsplashApi";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

export const AppContext = createContext();
const PAGE_LIMIT = 15;

const App = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [query, setQuery] = useState("");
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    const getImages = async () => {
      setIsLoading(true);
      try {
        const response = await searchImages(query, page, PAGE_LIMIT);
        console.log(response);
        const resultImages = (prevImages) => {
          return [...prevImages, ...response.results];
        };
        setGalleryImages(resultImages);
        setLoadMore(page < response.total_pages);
      } catch (err) {
        setError("something went wrong, pls try again");
      } finally {
        setIsLoading(false);
      }
    };
    if (query) {
      getImages(query, page);
    }
  }, [query, page]);

  const onSearchSubmit = async (searchQuery) => {
    if (searchQuery !== query) {
      console.log("query", query);
      console.log("searchQuery", searchQuery);
      setGalleryImages([]);
      setPage(1);
      setQuery(searchQuery);
    }
    // setError(null);
  };

  // const onLoadMore = async () => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const newPage = page + 1;
  //     const response = await searchImages(query, newPage, 3);
  //     setGalleryImages((prevImages) => [...prevImages, ...response.results]);
  //     setPage(newPage);
  //   } catch (err) {
  //     setError("something went wrong, pls try again");
  //   }
  //   setIsLoading(false);
  // };

  return (
    <AppContext.Provider value={{ selectedImage, setSelectedImage }}>
      <SearchBar onSubmit={onSearchSubmit} />
      {isLoading && <Loader />}
      {/* {error ? (
        <ErrorMessage message={error} />
      ) : galleryImages.length === 0 ? (
        query.length !== 0 && <p> There is no image</p>
      ) : (
        <ImageGallery images={galleryImages} />
      )} */}
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <ImageGallery images={galleryImages} />
      )}
      {loadMore && <LoadMoreBtn page={page} setPage={setPage} />}
      {selectedImage && <ImageModal />}
    </AppContext.Provider>
  );
};

export default App;
