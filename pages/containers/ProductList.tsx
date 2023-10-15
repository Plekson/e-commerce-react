import ProductCard from "@/pages/components/ProductCard";
import React, { useEffect, useState } from "react";
import apiData from "../api/products.json";
import { Product } from "../api/productType";

interface ProductListProps {
  selectedCategory?: string;
}

const ProductList = ({ selectedCategory }: ProductListProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (selectedCategory) {
      const filteredProducts = apiData.products.filter(
        (product) => product.category === selectedCategory
      );
      setProducts(filteredProducts);
    } else {
      setProducts(apiData.products);
    }
  }, [selectedCategory]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4 gap-2">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
