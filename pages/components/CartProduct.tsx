import React from "react";

interface CartProductProps {
  product: {
    id: number;
    name: string;
    price: number;
  };
}

const CartProduct = ({ product }: CartProductProps) => {
  return (
    <div className="flex my-4">
      <div className="w-1/3">
        <img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
      </div>
      <div className="flex flex-col flex-1 px-2 items-stretch">
        <div>
          <div className="flex justify-between">
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
          <span>Option</span>
        </div>
        <div className="flex flex-1 justify-between items-end">
          <p>Ilość</p>
          <a
            href="#"
            className="text-green-600	hover:text-green-900 duration-200"
          >
            Remove
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
