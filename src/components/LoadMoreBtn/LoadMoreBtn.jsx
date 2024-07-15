import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div>
      <button className={styles.loadMoreBtn} onClick={onClick}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
