import ProductCard from "@/pages/components/ProductCard";
import React, { useEffect, useState } from "react";
import apiData from "../api/api-data.json";

interface Product {
  id: number;
  category: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // W tym przypadku możesz pominąć żądanie Axios, ponieważ dane są już dostępne w `apiData`.
    setProducts(apiData.products);
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4 gap-2">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
