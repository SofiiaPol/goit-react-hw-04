import styles from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!query.trim()) {
      toast.error("Please enter a search query");
      return;
    }
    onSearch(query);
  };
  return (
    <header>
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;

// import { useFormik } from "formik";
// import * as Yup from "yup";

// function SearchBar({ onSubmit }) {
//   const formik = useFormik({
//     initialValues: {
//       query: "",
//     },
//     validationSchema: Yup.object({
//       query: Yup.string().required("Required"),
//     }),
//     onSubmit: (values) => {
//       onSubmit(values.query);
//     },
//   });

//   return (
//     <header className={styles.header}>
//       <form onSubmit={formik.handleSubmit}>
//         <input
//           type="text"
//           name="query"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//           onChange={formik.handleChange}
//           value={formik.values.query}
//         />
//         <button type="submit">Search</button>
//       </form>
//     </header>
//   );
// }

// export default SearchBar;
