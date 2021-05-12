import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./search.css";

const Search = () => {
  return (
    <div className="header">
      <div className="header-search">
        <input
          className="header-searchInput"
          type="text"
          placeholder="Search"
        />
        <SearchIcon className="header-searchIcon" />
      </div>
    </div>
  );
};
export default Search;
