import React from "react";
import Image from "next/image";
import { ShoppingCartIcon, EyeIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import CartIcon from "./CartIcon";

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
        <div className="absolute bottom-2 right-2">
            <CartIcon />
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
