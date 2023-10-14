import React, { useEffect, useState } from "react";
import CartProduct from "@/pages/components/CartProduct";
import Link from "next/link";

interface SlideBarProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    data: string;
    btnTitle: string;
  }

const SlideBar = ({ isOpen, onClose, title, data, btnTitle }: SlideBarProps) => {
    const slideBarOpen = isOpen ? 'md:right-0 right-0' : 'md:right-[-100%] right-[-768px]';
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
      className={`sm:top-[64px] top-[108px] z-20 sm:h-[calc(100vh-64px)] h-[calc(100vh-108px)] absolute xl:w-1/3 lg:w-1/2 max-w-screen bg-white z-30 px-4 pt-4 border-t flex flex-col duration-500 ease-in-out ${slideBarOpen}`}
    >
      <div className="flex justify-between mb-8">
        <h1 className="text-xl">{title}</h1>
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
        <Link href={`/subpages/cartpage`} className="flex-1 border rounded-lg bg-green-600 text-white py-4 text-center">
          {btnTitle}
        </Link>
      </div>
    </div>
  );
};

export default SlideBar;
