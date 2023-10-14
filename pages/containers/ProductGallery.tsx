import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface ProductGalleryProps {
  image: string[]; // Tablica adresów URL obrazów
}

const ProductGallery = ({ image }: ProductGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  useEffect(() => {
    // Jeśli masz tylko jedno zdjęcie, ustaw selectedImageIndex na 0
    if (image.length === 1) {
      setSelectedImageIndex(0);
    }
  }, [image]);

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handlePrevClick = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + image.length) % image.length
    );
  };

  const handleNextClick = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % image.length);
  };

  const selectedImage = Array.isArray(image) ? image[selectedImageIndex] : image;

  return (
    <div className="lg:basis-1/2 lg:mx-0 mx-4 flex flex-col items-center overflow-hidden md:max-h-[calc(100vh-61px-1.25rem)] max-h-[calc(100vh-105px-1.25rem)]">
      <div className={`mb-2 overflow-hidden sm:h-75 h-[75vh] relative md:max-w-[75%]`}>
        <img src={selectedImage} alt="Selected" className="h-full" />
        <button
          onClick={handlePrevClick}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-l"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          onClick={handleNextClick}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-r"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="lg:flex hidden mt-2">
        {Array.isArray(image)
          ? image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className={`w-24 h-24 object-cover cursor-pointer border-2 border-gray-300 mx-1 ${
                  index === selectedImageIndex ? "border-green-600" : ""
                }`}
                onClick={() => handleThumbnailClick(index)}
              />
            ))
          : (
              <img
                src={image}
                alt="Thumbnail"
                className="w-24 h-24 object-cover cursor-pointer border-2 border-gray-300 mx-1"
                onClick={() => handleThumbnailClick(0)}
              />
            )}
      </div>
    </div>
  );
};

export default ProductGallery;
