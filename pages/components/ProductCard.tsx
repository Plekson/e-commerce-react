import React from "react";
import Image from "next/image";
import { ShoppingCartIcon, EyeIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

interface Product {
  id: number;
  category: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();

  const handleProductClick = () => {
    router.push(`/subpages/ItemPage?id=${product.id}`);
  };

  return (
    <div
      className="cursor-pointer max-w-[12rem] sm:max-w-xs lg:max-w-sm w-full border rounded-lg shadow-md overflow-hidden mx-auto flex-shrink-0"
      onClick={handleProductClick}
    >
      <div className="relative group">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          loading="eager"
        />
        <div className="group-hover:block hidden absolute top-0 bottom-0 right-0 left-0 bg-black/30">
          <div className="w-full h-full flex justify-center items-center space-x-4">
            <ShoppingCartIcon className="h6 w-6" />
            <EyeIcon className="h6 w-6" />
          </div>
        </div>
      </div>
      <div className="p-2 space-y-2">
        <h1 className="truncate">{product.name}</h1>
        <h2>{product.price}$</h2>
      </div>
    </div>
  );
};

export default ProductCard;
