import React from "react";

interface SearchResultsProps {
  results: string[];
}

const SearchResults = ({ results }: SearchResultsProps) => {
  return (
    <div
      className={`flex-col absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-md ${
        results.length > 0 ? "flex" : "hidden"
      }`}
    >
      {results.length === 0 ? (
        <div className="p-4">Brak wyników wyszukiwania.</div>
      ) : (
        results.map((result, index) => (
          <div key={index} className="p-4">
            <p className="text-gray-800">{result}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchResults;
