import styles from "./ImageCard.module.css";

const ImageCard = ({ image }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          className={styles.galleryImage}
          src={image.urls.small}
          alt={image.alt_description}
        />
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.info}>
          Likes: <span>{`${image.likes}`}</span>
        </p>
        <p className={styles.info}>
          Autor: <span>{`${image.user.name}`}</span>
        </p>
        <p className={styles.info}>
          <span>
            location:{" "}
            {`${image.user.location ? image.user.location : "Unknown"}`}{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
