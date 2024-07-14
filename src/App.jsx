import "./App.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { createContext } from "react";
import { searchImages } from "./api/unsplashApi";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import Modal from "react-modal";

export const AppContext = createContext();

Modal.setAppElement("#root");

const App = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const onSearchSubmit = async (query) => {
    setIsLoading(true);
    setError(null);
    setPage(1);
    try {
      const response = await searchImages(query, 1, 15);
      setGalleryImages(response.results);
    } catch (err) {
      setError("something went wrong, pls try again");
    }
    setIsLoading(false);
  };

  const onLoadMore = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const newPage = page + 1;
      const response = await searchImages(query, newPage, 15);
      setGalleryImages((prevImages) => [...prevImages, ...response.results]);
      setPage(newPage);
    } catch (err) {
      setError("something went wrong, pls try again");
    }
    setIsLoading(false);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <AppContext.Provider value={{ setGalleryImages }}>
      <SearchBar onSubmit={onSearchSubmit} />
      {isLoading && <Loader />}
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        galleryImages.length !== 0 && (
          <ImageGallery images={galleryImages} onImageClick={openModal} />
        )
      )}
      {galleryImages.length !== 0 && !isLoading && (
        <LoadMoreBtn onClick={onLoadMore} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
    </AppContext.Provider>
  );
};

export default App;
