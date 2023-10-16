import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

interface FilterButtonProps {
  options: string[];
  onSelect: (option: string) => void;
  selectedOption: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  options,
  onSelect,
  selectedOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring focus:ring-blue-300"
      >
        {selectedOption}
        {isOpen ? (
          <ChevronUpIcon className="h-5 w-5 ml-2" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 ml-2" />
        )}
      </button>

      {isOpen && (
        <div className="z-10 origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className={`block px-4 py-2 text-sm text-gray-700 w-full text-left ${
                  option === selectedOption ? "bg-gray-200" : ""
                } hover:bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300`}
                role="menuitem"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
