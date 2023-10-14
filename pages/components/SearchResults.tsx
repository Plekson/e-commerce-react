// components/SearchResults.tsx
import React from "react";
import Link from 'next/link';

interface SearchResult {
  id: number;
  name: string;
  link: string;
}

interface SearchResultsProps {
  results: SearchResult[];
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
        results.map((result) => (
          <Link key={result.id} href={`../subpages/ItemPage?id=${result.id}`} className="block p-4 hover:bg-gray-100">
              <p className="text-gray-800">{result.name}</p>
          </Link>
        ))
      )}
    </div>
  );
};

export default SearchResults;
