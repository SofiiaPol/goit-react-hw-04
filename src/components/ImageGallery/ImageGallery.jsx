import styles from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onImageClick }) => {
  const handleImageClick = (img) => {
    onImageClick(img);
  };

  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li
          className={styles.galleryItem}
          key={image.id}
          onClick={() => handleImageClick(image)}
        >
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
