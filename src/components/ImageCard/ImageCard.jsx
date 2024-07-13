import styles from "./ImageCard.module.css";

const ImageCard = ({ image }) => {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        // likes={image.likes}
      />
    </div>
  );
};

export default ImageCard;
