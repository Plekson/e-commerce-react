import React, { useEffect, useState } from "react";
import DotIndicator from "@/pages/components/Indicators/DotIndicator";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const images = [
  "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
  "https://via.placeholder.com/800x400",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-screen-lg mx-auto lg:h-96 md:h-80 sm:h-64 h-56 overflow-hidden md:mt-[calc(61px+1.25rem)] mt-[calc(105px+1.25rem)] lg:rounded-lg">
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-20"
        onClick={handlePrev}
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-20"
        onClick={handleNext}
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
      <div
        className={`w-full h-full overflow-hidden bg-blue-500 flex transition-transform ease-in-out`}
      >
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className="w-full h-full flex-none transition-transform ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <img
              src={imageUrl}
              alt={`image-${index}`}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex">
        {images.map((_, index) => (
          <DotIndicator
            key={index}
            active={index === currentIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
