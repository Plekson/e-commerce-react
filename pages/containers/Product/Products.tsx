import React, { useEffect, useState } from "react";
import ProductCard from "../../components/Cart/ProductCard";
import apiData from "../../api/products.json";

interface Product {
  id: number;
  category: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface ProductsProps {
  title: string;
}

const Products = ({ title }: ProductsProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(apiData.products);
  }, []);

  return (
    <div className="my-4 p-5 bg-white lg:rounded-lg">
      <h1 className="text-2xl font-semibold mb-2">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar space-x-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
