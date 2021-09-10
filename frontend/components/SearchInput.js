import { useState } from "react";
import style from "../styles/header.module.css";
import SearchIcon from "@material-ui/icons/Search";

export default function SearchInput() {
  const [search, setSearch] = useState({
    value: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setSearch({ ...search, [name]: value });
  };

  return (
    <form id={`${style.block_input_icon}`} onSubmit={handleSubmit}>
      <button>
        <SearchIcon id={`${style.colorIconSearch}`} />
      </button>
      <input
        type="text"
        name="value"
        id={`${style.styleInput}`}
        onChange={handleChange}
      />
    </form>
  );
}
