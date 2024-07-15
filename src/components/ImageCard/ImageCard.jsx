import styles from "./ImageCard.module.css";

const ImageCard = ({ image }) => {
  return (
    <>
      <img
        className={styles.galleryImage}
        src={image.urls.small}
        alt={image.alt_description}
        // likes={image.likes}
      />
    </>
  );
};

export default ImageCard;
