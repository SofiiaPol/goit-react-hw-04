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
  const [emptyResults, setEmptyResults] = useState(false);

  useEffect(() => {
    const getImages = async () => {
      setIsLoading(true);
      try {
        const response = await searchImages(query, page, PAGE_LIMIT);
        setEmptyResults(response.results.length === 0);
        const resultImages = (prevImages) => {
          return [...prevImages, ...response.results];
        };
        setGalleryImages(resultImages);
        setLoadMore(page < response.total_pages);
        setError(null);
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
      setGalleryImages([]);
      setPage(1);
      setQuery(searchQuery);
    }
  };

  return (
    <AppContext.Provider value={{ selectedImage, setSelectedImage }}>
      <SearchBar onSubmit={onSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      {galleryImages.length !== 0 && <ImageGallery images={galleryImages} />}
      {emptyResults && <p>Images not found</p>}
      {isLoading && <Loader />}
      {loadMore && <LoadMoreBtn page={page} setPage={setPage} />}
      {selectedImage && <ImageModal />}
    </AppContext.Provider>
  );
};

export default App;
