import { useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar.jsx";
import { SearchResults } from "./components/SearchResults.jsx";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchResults results={results} />
      </div>
    </div>
  );
}

export default App;
