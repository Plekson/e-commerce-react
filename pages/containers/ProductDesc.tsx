import React from "react";
import FilterButton from "../components/FilterButton";
import Button from "../components/Button";
import InfoDropdown from "../components/InfoDropdown";

interface Product {
  id: number;
  name: string;
  price: number
  description: string;
  image: string[]; // Zmieniono nazwę na "image"
  // Dodaj inne właściwości, jeśli są dostępne
}

interface ProductDescProps {
  product: Product;
}

const ProductDesc = ({ product }: ProductDescProps) => {
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
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <h2 className="text-xl font-medium my-4">{`Cena: ${product.price} PLN`}</h2>
        <div className="my-8">
          <h3 className="py-2">
            Kolor: <span className="font-medium">czarny</span>
          </h3>
          <div className="flex">
            {Array.isArray(product.image)
              ? product.image.map((img, index) => (
                  <div key={index}>
                    <img
                      src={img}
                      alt={`Thumbnail ${index}`}
                      className="w-20 h-20 object-cover cursor-pointer border-2 border-gray-300 mr-2"
                    />
                  </div>
                ))
              : (
                  <div>
                    <img
                      src={product.image}
                      alt={`Thumbnail 0`}
                      className="w-20 h-20 object-cover cursor-pointer border-2 border-gray-300 mr-2"
                    />
                  </div>
                )}
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
        <div className="space-y-4 bg-white">
        <InfoDropdown
          title="Informacje o produkcie"
          deliveryInfo={product.description}
        />
        <InfoDropdown
          title="Informacje o dostawie"
          deliveryInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        </div>
      </div>
    </div>
  );
};

export default ProductDesc;
