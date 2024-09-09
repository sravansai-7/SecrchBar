import React from "react";
import "./SearchResultsTable.css";

export const SearchResultsTable = ({ result }) => {
  return (
    <div
      className="search-result"
      onClick={(e) => {
        alert(`You clicked on ${result.name}`);
      }}
    >
      {result.name}
    </div>
  );
};
