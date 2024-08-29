import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  // const handleChange = (e) => {
  //   const { value } = e.target;

  //   onSearch(value);
  // };

  const dispatch = useDispatch();
  return (
    <div className={s.wrapper}>
      <label className={s.label}>
        <span className={s.subtitle}>Find contact by name:</span>
        <input
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          type="text"
          name="search"
          className={s.input}
        ></input>
      </label>
    </div>
  );
};

export default SearchBox;
