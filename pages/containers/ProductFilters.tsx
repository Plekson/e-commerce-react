import FilterButton from "@/pages/components/FilterButton";
import React from "react";

const ProductFilters = () => {
  const options = ["Option 1", "Option 2", "Option 3"];

  const handleSelect = (selectedOption: string) => {
    console.log("Selected Option:", selectedOption);
  };
  return (
    <div className="border shadow-md rounded-lg max-w-screen-xl p-4 my-4 mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-lg">Filtry</h1>
        <button>Wyczyść filtry</button>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 md:grid-cols-6 xl:grid-cols-6 gap-2 mt-2">
        <FilterButton
          options={options}
          onSelect={handleSelect}
          selectedOption="Kolor"
        />
        <FilterButton
          options={options}
          onSelect={handleSelect}
          selectedOption="Rozmiar"
        />
        <FilterButton
          options={options}
          onSelect={handleSelect}
          selectedOption="Kolor"
        />
        <FilterButton
          options={options}
          onSelect={handleSelect}
          selectedOption="Kolor"
        />
        <FilterButton
          options={options}
          onSelect={handleSelect}
          selectedOption="Kolor"
        />
        <FilterButton
          options={options}
          onSelect={handleSelect}
          selectedOption="Kolor"
        />
      </div>
      <div className="pt-4 text-right">
        <a href="#">Szukaj</a>
      </div>
    </div>
  );
};

export default ProductFilters;
