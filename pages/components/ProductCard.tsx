import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import CartIcon from "./CartIcon";
import { Product } from "../api/productType";
import { addToCart } from "../utils/addToCart";
import { Color } from "../api/colorType";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();

  const handleProductClick = () => {
    router.push(`/subpages/ItemPage?id=${product.id}`);
  };

  const handleAddToCart = (): void =>{
    const selectedColor = { hex: '#000000', name: 'Black' };
    addToCart(product, selectedColor);
  };

  return (
    <div
      className="cursor-pointer max-w-[12rem] sm:max-w-xs lg:max-w-sm w-full border rounded-lg shadow-md overflow-hidden mx-auto flex-shrink-0"
    >
      <div className="relative group">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          loading="eager"
          onClick={handleProductClick}
        />
        <div className="absolute bottom-2 right-2">
            <CartIcon addToCart={handleAddToCart}/>
        </div>
      </div>
      <div className="p-2 space-y-2" onClick={handleProductClick}>
        <h1 className="truncate">{product.name}</h1>
        <h2>{product.price}$</h2>
      </div>
    </div>
  );
};

export default ProductCard;