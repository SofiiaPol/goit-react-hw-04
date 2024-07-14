import styles from "./ImageModal.module.css";
import Modal from "react-modal";

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
    >
      {image && (
        <div className="image-modal-content">
          <img src={image.urls.regular} alt={image.alt_description} />
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
