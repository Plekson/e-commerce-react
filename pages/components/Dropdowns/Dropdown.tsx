// Dropdown.tsx
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Category } from "../../api/categories";

const Dropdown = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !(dropdownRef.current as any).contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    fetch("/api/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative border-r" ref={dropdownRef}>
      <button
        className="p-2 rounded flex justify-between items-center"
        onClick={toggleDropdown}
      >
        Kategorie
        <ChevronDownIcon className="w-5 h-5 ml-2" />
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-40 bg-white border rounded shadow-lg">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/subpages/ItemsList?category=${category.slug}`}
              className="cursor-pointer block p-2 hover:bg-gray-200"
              onClick={() => setIsOpen(false)}
            >
              {category.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
