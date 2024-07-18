import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ page, setPage }) => {
  return (
    <div>
      <button className={styles.loadMoreBtn} onClick={() => setPage(page + 1)}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
