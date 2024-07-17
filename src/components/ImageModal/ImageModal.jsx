import { useContext, useState } from "react";
import styles from "./ImageModal.module.css";
import Modal from "react-modal";
import { AppContext } from "../../App";

Modal.setAppElement("#root");

const modalStyles = {
  content: {
    border: "2px solid rgb(166, 105, 224)",
    padding: "0",
    maxWidth: "1000px",
    margin: "0 auto",
    scrollbarsWidth: "none",
  },
};

const ImageModal = () => {
  const { selectedImage, setSelectedImage } = useContext(AppContext);

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <div className={styles.backdrop}>
      <Modal
        style={modalStyles}
        isOpen={selectedImage !== null}
        onRequestClose={closeModal}
      >
        {selectedImage && (
          <div className={styles.modalContainer}>
            <img
              src={selectedImage.urls.regular}
              alt={selectedImage.alt_description}
            />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ImageModal;
