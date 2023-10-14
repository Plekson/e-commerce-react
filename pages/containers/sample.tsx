import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import apiData from "../api/products.json";

interface Product {
  id: number;
  category: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface SampleProps {
  title: string;
}

const Sample = ({ title }: SampleProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // W tym przypadku możesz pominąć żądanie Axios, ponieważ dane są już dostępne w `apiData`.
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

export default Sample;
