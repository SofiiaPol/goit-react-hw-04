import styles from "./SearchBar.modul.css";

function SearchBar({ onSubmit }) {
  return (
    <header>
      <form>
        <input
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

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
