import React from "react";
import FilterButton from "../components/FilterButton";
import Button from "../components/Button";
import InfoDropdown from "../components/InfoDropdown";

interface ProductDescProps {
  images: string[]; // Tablica adresów URL obrazów
}

const ProductDesc = ({ images }: ProductDescProps) => {
  const options = ["S", "M", "L"];

  const handleSelect = (selectedOption: string) => {
    console.log("Selected Option:", selectedOption);
  };
  function handleButton(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="lg:basis-1/2 max-w-lg lg:mt-0 mt-4 lg:mx-0 mx-4">
      <div className="text-left">
        <h1 className="text-3xl font-semibold">Bluza mf</h1>
        <h2 className="text-xl font-medium my-4">Cena $$$</h2>
        <div className="my-8">
          <h3 className="py-2">
            Kolor: <span className="font-medium">czarny</span>
          </h3>
          <div className="flex">
            {images.map((image, index) => (
              <div>
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index}`}
                  className="w-20 h-20 object-cover cursor-pointer border-2 border-gray-300 mr-2"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>Rozmiar:</h3>
          <FilterButton
            options={options}
            onSelect={handleSelect}
            selectedOption="Rozmiar"
          />
        </div>
        <Button label="Dodaj do koszyka" onClick={handleButton} />
        <InfoDropdown
          title="Informacje o dostawie"
          deliveryInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
};

export default ProductDesc;
