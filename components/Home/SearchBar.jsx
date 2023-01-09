import React from "react";
import { FiSearch } from "react-icons/fi";
import style from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <div className={style.search}>
      <input type='text' placeholder='Search' className={style.input} />
      <div className={style.icon}>
        <FiSearch size={20} color='#fff' />
      </div>
    </div>
  );
};

export default SearchBar;
