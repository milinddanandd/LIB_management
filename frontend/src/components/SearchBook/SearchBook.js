// components/SearchBook.js
import React, { useState } from "react";
import axios from "axios";

const SearchBook = ({ onSearchResults }) => {
  const [searchTitle, setSearchTitle] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/books/search?title=${searchTitle}`
      );
      onSearchResults(response.data);
    } catch (error) {
      console.error("Error searching for books:", error);
    }
  };

  return (
    <div className="search-book">
      <input
        type="text"
        placeholder="Search by title"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBook;
