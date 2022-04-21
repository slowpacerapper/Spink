import React from "react";
import { Label, Search, SearchIcon } from "./SearchBar.styled";

const SearchBar = ({ search, setSearch }) => {
  return (
    <Label htmlFor="search">
      <SearchIcon />
      <Search
        type="text"
        placeholder="search e.g speaker, earbud, headphone"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Label>
  );
};

export default SearchBar;
