import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick}>Load More</button>
    </div>
  );
};

export default LoadMoreBtn;
