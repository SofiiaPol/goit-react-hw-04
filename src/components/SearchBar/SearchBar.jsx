import styles from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!query.trim()) {
      toast.error("Please enter a search query");
      return;
    }
    onSubmit(query);
  };

  return (
    <header className={styles.header}>
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          onChange={(event) => setQuery(event.target.value)}
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
