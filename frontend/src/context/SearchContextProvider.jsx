import React, { useState } from "react";
import SearchContext from "./SearchContext";

const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState(null);
  const [result, setResult] = useState([]);
  return (
    <SearchContext.Provider value={{ search, setSearch, result, setResult }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
