import React, { useEffect, useState } from "react";
import CartProduct from "@/pages/components/CartProduct";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartBarProps {
  toggler: string;
  onClose: () => void;
  display: string;
}

const CartBar = ({ toggler, onClose, display }: CartBarProps) => {
  const products = [
    {
      id: 1,
      name: "Example Product 1",
      price: 19.99,
    },
    {
      id: 2,
      name: "Example Product 2",
      price: 29.99,
    },
    {
      id: 3,
      name: "Example Product 3",
      price: 39.99,
    },
  ];
  return (
    <div
      className={`sm:top-[64px] top-[108px] z-20 sm:h-[calc(100vh-64px)] h-[calc(100vh-108px)] absolute xl:w-1/3 lg:w-1/2 max-w-screen bg-white z-30 px-4 pt-4 border-t flex flex-col duration-500 ease-in-out ${toggler}`}
    >
      <div className="flex justify-between mb-8">
        <h1 className="text-xl">Koszyk</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
          onClick={onClose}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div id="products">
        {products.map((product) => (
          <CartProduct key={product.id} product={product} />
        ))}
      </div>
      <div className="flex py-5">
        <button className="flex-1 border rounded-lg bg-green-600 text-white py-4">
          Złoż zamówienie
        </button>
      </div>
    </div>
  );
};

export default CartBar;
