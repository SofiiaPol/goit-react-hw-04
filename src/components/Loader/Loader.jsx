import { Grid } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.Loader}>
      <Grid
        height="40"
        width="40"
        radius="10"
        color="blue"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
