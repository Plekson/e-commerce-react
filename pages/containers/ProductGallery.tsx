// ProductGallery.tsx
import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface ProductGalleryProps {
  images: string[]; // Tablica adresów URL obrazów
}

const ProductGallery = ({ images }: ProductGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handlePrevClick = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextClick = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const selectedImage = images[selectedImageIndex];

  return (
    <div className="lg:basis-1/2 lg:mx-0 mx-4 flex flex-col items-center overflow-hidden md:max-h-[calc(100vh-61px-1.25rem)] max-h-[calc(100vh-105px-1.25rem)]">
      <div className={`mb-2 overflow-hidden h-full relative`}>
        <img src={selectedImage} alt="Selected" className="w-full h-full" />
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
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={`w-24 h-24 object-cover cursor-pointer border-2 border-gray-300 mx-1 ${
              index === selectedImageIndex ? "border-green-600" : ""
            }`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
