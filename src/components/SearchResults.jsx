import React from "react";
import "./SearchResults.css";
import { SearchResultsTable } from "./SearchResultsTable";

export const SearchResults = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResultsTable result={result} key={id}/>;
      })}
    </div>
  );
};
