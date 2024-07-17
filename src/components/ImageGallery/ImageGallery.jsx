import styles from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { useContext } from "react";
import { AppContext } from "../../App";

const ImageGallery = ({ images }) => {
  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const { setSelectedImage } = useContext(AppContext);

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
