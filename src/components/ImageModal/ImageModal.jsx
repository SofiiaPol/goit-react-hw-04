import styles from "./ImageModal.module.css";

const ImageModal = ({ image }) => {
  return (
    <>
      {image && (
        <div className={styles.modalContainer}>
          <img src={image.urls.regular} alt={image.alt_description} />
        </div>
      )}
    </>
  );
};

export default ImageModal;
