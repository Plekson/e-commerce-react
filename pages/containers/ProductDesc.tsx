import React, { useEffect, useState } from "react";
import FilterButton from "../components/FilterButton";
import Button from "../components/Button";
import InfoDropdown from "../components/InfoDropdown";
import ColorPick from "../components/ColorPick";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string[];
}

interface ProductDescProps {
  product: Product;
}

interface Color {
  hex: string;
  name: string;
}

const ProductDesc = ({ product }: ProductDescProps) => {
  const options = ["S", "M", "L"];

  const handleSelect = (selectedOption: string) => {
    console.log("Selected Option:", selectedOption);
  };

  function handleButton(): void {
    throw new Error("Function not implemented.");
  }

  const [selectedColor, setSelectedColor] = useState<Color>({ hex: "", name: "" });
  const [colors, setColors] = useState<Color[]>([]);

  useEffect(() => {
    const fetchColorsFromApi = async () => {
      try {
        const response = await fetch("/api/getColors");
        const data = await response.json();

        if (data.colors && Array.isArray(data.colors)) {
          setColors(data.colors);
          setSelectedColor(data.colors[0]);
        } else {
          console.error('Invalid response format:', data);
        }
      } catch (error) {
        console.error('Error fetching colors:', error);
      }
    };

    fetchColorsFromApi();
  }, []);

  const handleColorChange = (color: Color) => {
    setSelectedColor(color);
    console.log("Selected color:", color);
  };

  return (
    <div className="lg:basis-1/2 max-w-lg lg:mt-0 mt-4 lg:mx-0 mx-4">
      <div className="text-left">
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <h2 className="text-xl font-medium my-4">{`Cena: ${product.price} PLN`}</h2>
        <div className="my-8">
        <h3 className="py-2">
            Kolor: <span className="font-medium">{selectedColor.name}</span>
          </h3>
          <div className="flex space-x-2">
            {colors.map((color, index) => (
              <ColorPick
                key={index}
                color={color.hex}
                onClick={() => handleColorChange(color)}
              />
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
