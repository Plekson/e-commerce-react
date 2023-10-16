import React from "react";
import { Product } from "../../api/productType";
import Image from "next/image";

interface CartProductProps {
  product: Product;
}

const CartProduct = ({ product }: CartProductProps) => {
  const selectedColorName = product.selectedColor ? product.selectedColor.name : '';

  return (
    <div className="flex my-4">
      <div className="w-1/3">
        <Image src={Array.isArray(product.image) ? product.image[0] : product.image} alt={product.name} width={300} height={200}/>
      </div>
      <div className="flex flex-col flex-1 px-2 items-stretch">
        <div>
          <div className="flex justify-between">
            <h2 className="font-medium">{product.name}</h2>
            <p className="font-medium">{product.price} PLN</p>
          </div>
          <h2>Kolor: {selectedColorName}</h2>
        </div>
        <div className="flex flex-1 justify-between items-end">
          <p>Ilość:</p>
          <a
            href="#"
            className="text-green-600	hover:text-green-900 duration-200"
          >
            Usuń
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
